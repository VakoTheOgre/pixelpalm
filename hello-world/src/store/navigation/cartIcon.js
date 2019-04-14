export default {
  namespaced: true,

  state: {
    cartOpen: false
  },

  getters: {
    cartState(state) {
      return state.cartOpen
    }
  },

  mutations: {
    close(state) {
      state.cartOpen = false
    },
    open(state) {
      state.cartOpen = true
    }
  }
};
