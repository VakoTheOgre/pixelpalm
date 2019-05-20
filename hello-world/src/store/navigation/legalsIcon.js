export default {
  namespaced: true,

  state: {
    legalsOpen: false,
		crumbs: null
  },

  getters: {
    legalsState(state) {
      return state.legalsOpen
    }
  },

  mutations: {
    close(state) {
      state.legalsOpen = false
      state.crumbs = null
    },
    open(state) {
      state.legalsOpen = true
    }
  }
};
