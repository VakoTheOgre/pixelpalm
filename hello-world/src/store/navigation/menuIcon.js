export default {
  namespaced: true,

  state: {
    menuOpen: false
  },

  getters: {
    menuState(state) {
      return state.menuOpen
    }
  },

  mutations: {
    close(state) {
      state.menuOpen = false
    },
    open(state) {
      state.menuOpen = true
    }
  }
};
