import axios from '../../main'
export default {
  namespaced: true,

  state: {
    products: []
  },
  getters: {
    getAllProducts (state) {
      return state.products
    }
  },
  mutations: {
    setAllProducts (state, payload) {
      // for (let i = 0; i < 15; i++) {
      //   state.products.push(...payload)
      // }
      state.products = payload
    }
  },
  actions: {
    async getAllProducts ({ commit }) {
      try {
				let res = await axios.get('/shop/products/')
				commit('setAllProducts', res.data.products)
        
        return Promise.resolve(true)
      } catch (e) {   
        return Promise.reject(e)
      }
    }
  }
}
