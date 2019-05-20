export default {
  namespaced: true,

  state: {
    menuOpen: false,
		crumbs: null
  },

  getters: {
    menuState(state) {
      return state.menuOpen
    },
		crumbs (state) {
			return state.crumbs
		}
  },

  mutations: {
    close(state) {
      state.menuOpen = false
      state.crumbs = null
    },
    open(state) {
      state.menuOpen = true
    }
  }
};
