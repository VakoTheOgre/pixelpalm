export default {
  namespaced: true,

  state: {
    searchOpen: false,
		crumbs: null
  },

  getters: {
    searchState(state) {
      return state.searchOpen
    },
		crumbs (state) {
			return state.crumbs
		}
  },

  mutations: {
    close(state) {
      state.searchOpen = false
      state.crumbs = null
    },
    open(state) {
      state.searchOpen = true
    }
  }
};
