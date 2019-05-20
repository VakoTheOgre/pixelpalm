export default {
  namespaced: true,

  state: {
    cartOpen: false,
		crumbs: null
  },

  getters: {
    cartState(state) {
      return state.cartOpen
    }
  },

  mutations: {
    close(state) {
      state.cartOpen = false
      state.crumbs = null
    },
    open(state) {
      state.cartOpen = true
    }
  }
};
