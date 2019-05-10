export default {
    namespaced: true,
  
    state: {
      socialsOpen: false
    },
  
    getters: {
      socialsState(state) {
        return state.socialsOpen
      }
    },
  
    mutations: {
      close(state) {
        state.socialsOpen = false
      },
      open(state) {
        state.socialsOpen = true
      }
    }
  };
  