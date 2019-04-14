export default {
  namespaced: true,

  state: {
    searchOpen: false
  },

  getters: {
    searchState(state) {
      return state.searchOpen
    }
  },

  mutations: {
    close(state) {
      state.searchOpen = false
    },
    open(state) {
      state.searchOpen = true
    }
  }
};
