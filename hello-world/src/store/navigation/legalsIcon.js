export default {
  namespaced: true,

  state: {
    legalsOpen: false
  },

  getters: {
    legalsState(state) {
      return state.legalsOpen
    }
  },

  mutations: {
    close(state) {
      state.legalsOpen = false
    },
    open(state) {
      state.legalsOpen = true
    }
  }
};
