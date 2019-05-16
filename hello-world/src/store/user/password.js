export default {
    namespaced: true,
  
    state: {
      passState: false
    },
  
    getters: {
      passState(state) {
        return state.passState
      }
    },
  
    mutations: {
      close(state) {
        state.passState = false
      },
      open(state) {
        state.passState = true
      }
    }
  };
  