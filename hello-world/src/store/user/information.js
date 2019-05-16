export default {
    namespaced: true,
  
    state: {
      infoOpen: false
    },
  
    getters: {
      infoState(state) {
        return state.infoOpen
      }
    },
  
    mutations: {
      close(state) {
        state.infoOpen = false
      },
      open(state) {
        state.infoOpen = true
      }
    }
  };
  