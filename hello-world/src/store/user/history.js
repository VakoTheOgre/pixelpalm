export default {
    namespaced: true,
  
    state: {
      historyOpen: false
    },
  
    getters: {
      historyState(state) {
        return state.historyOpen
      }
    },
  
    mutations: {
      close(state) {
        state.historyOpen = false
      },
      open(state) {
        state.historyOpen = true
      }
    }
  };
  