import CartItem from '../../services/CartService/cartService'
import axios from '../../main'
import Cookie from 'js-cookie'
export default {
  namespaced: true,

  state: {
    cart: []
  },

  getters: {
    getCart(state) {
      return state.cart
    },

    subtotal(state) {
      let sub = 0
      state.cart.forEach(item => {
        let itemTotal = item.amount * item.variant.price
        sub += itemTotal
      })
      return sub
    },

    getAmount (state) {
      let num = 0 
      for (let item of state.cart) {
        num += item.amount
      }
      return num
    }
  },

  mutations: {

    addToCart (state, payload) {
      for (let item of state.cart) {
        if (item.product._id == payload.product._id && item.variant.size == payload.variant.size) {
          CartItem.changeAmount(item, '+')
          return
        }
      }
    
      try {
        const cartItem = new CartItem(payload.product, payload.variant, 1)
        state.cart.push(cartItem)
      } catch (e) {
        console.log(e)
      }
    },

    clearCart (state) {
      state.cart = []
    },

    removeFromCart (state, payload) {
      state.cart.splice(payload, 1)
    },

  },

  actions: {

    checkout ({ commit, state }, payload) {
      return new Promise(async (resolve, reject) => {
        try {
          let res = await axios.post(`/shop/checkout`, {
            recipient: {
              name: payload.name,
              address1: payload.address,
              city: payload.city,
              state_code: payload.state_code,
              country_code: payload.country_code,
              zip: payload.zip
            },
            items: state.cart.map(item => {
              return { sync_variant_id: item.variant.order_id, quantity: item.amount }
            })
          }, { headers: { 'Authorization': `Bearer ${Cookie.get('token')}` } })
          commit('clearCart')
          resolve(res.data.approval_url)
        } catch (e) {
          reject(e)
        }
      })
    }
  }
}
