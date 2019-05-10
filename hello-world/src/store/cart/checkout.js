export default {
    namespaced: true,
  
    state: {
      checkoutOpen: false
    },
  
    getters: {
      checkoutState(state) {
        return state.checkoutOpen
      }
    },
  
    mutations: {
      close(state) {
        state.checkoutOpen = false
      },
      open(state) {
        state.checkoutOpen = true
      }
    },

    actions: {

    }
  };
  