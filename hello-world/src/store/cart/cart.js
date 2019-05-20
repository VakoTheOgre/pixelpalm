import CartItem from '../../services/CartService/cartService'
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

    addToCart(state, payload) {
      for (let item of state.cart) {
        console.log(item.product._id == payload.product._id && item.variant.size == payload.variant.size)
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

    clearCart(state) {
      state.cart = []
    },

    removeFromCart(state, payload) {
      state.cart.splice(payload, 1)
    },

    async checkout() {
      try {
        
      } catch (e) {
        console.log(e)
      }
    }
  },

  actions: {

    checkout({state}) {

    }
  }
}