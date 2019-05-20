export default {
  namespaced: true,

  state: {
    exploreOpen: false,
		crumbs: null
  },

  getters: {
    exploreState(state) {
      return state.exploreOpen
    }
  },

  mutations: {
    close(state) {
      state.exploreOpen = false
      state.crumbs = null
    },
    open(state) {
      state.exploreOpen = true
    }
  }
};
