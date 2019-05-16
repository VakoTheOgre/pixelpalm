export default {
  namespaced: true,

  state: {
    accountOpen: false,
		crumbs: null
  },

  getters: {
    accountState(state) {
      return state.accountOpen
    },
		crumbs (state) {
			return state.crumbs
		}
  },

  mutations: {
    close(state) {
      state.accountOpen = false
    },
    open(state) {
      state.accountOpen = true
    },

		setCrumbs (state, payload) {
			state.crumbs = payload
		}
  }
};
