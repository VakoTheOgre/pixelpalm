export default {
  namespaced: true,

  state: {
    exploreOpen: false
  },

  getters: {
    exploreState(state) {
      return state.exploreOpen
    }
  },

  mutations: {
    close(state) {
      state.exploreOpen = false
    },
    open(state) {
      state.exploreOpen = true
    }
  }
};
