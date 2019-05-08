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
    }
  },

  mutations: {

    addToCart(state, payload) {
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