export default {
  namespaced: true,

  state: {
    accountOpen: false
  },

  getters: {
    accountState(state) {
      return state.accountOpen
    }
  },

  mutations: {
    close(state) {
      state.accountOpen = false
    },
    open(state) {
      state.accountOpen = true
    }
  }
};
