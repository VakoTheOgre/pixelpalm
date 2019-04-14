import CartItem from './node_modules/@/services/CartService/cartService'
import axios from './node_modules/axios'
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
    }
  },

  mutations: {

    addToCart(state, payload) {
      const cartItem = new CartItem(payload.product, payload.variant, 1)
      state.cart.push(cartItem)
    },

    clearCart(state) {
      state.cart = []
    },

    removeFromCart(state, payload) {
      state.cart.splice(payload, 1)
    }
  },

  actions: {

    checkout({state}) {

    }
  }
}