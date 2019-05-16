export default {
    namespaced: true,
  
    state: {
      loggedOpen: false
    },
  
    getters: {
      loggedState(state) {
        return state.loggedOpen
      }
    },
  
    mutations: {
      close(state) {
        state.loggedOpen = false
      },
      open(state) {
        state.loggedOpen = true
      }
    }
  };
  