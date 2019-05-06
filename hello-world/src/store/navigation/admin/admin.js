import axios from '@/main.js'
import Cookie from 'js-cookie'
export default {
    namespaced: true,
  
    state: {
      component: "admin-products-list",
      products: [],
      currentProduct: null
    },
  
    getters: {
      component(state) {
        return state.component
      },
      products (state) {
        return state.products
      },
      currentProduct (state) {
        return state.currentProduct
      }
    },
  
    mutations: {
      component(state, payload) {
        state.component = payload
      },
      products (state, payload) {
        state.products = payload
      },
      currentProduct (state, payload) {
        state.currentProduct = payload
      }
    },

    actions: {
      async getProducts ( {commit } ) {
        try {
          let res = await axios.get('/admin/products', {headers: { 'Authorization': `Bearer ${Cookie.get('token')}` } })
          // this.syncProducts = res.data.products.filter(product => !product.category || !product.subcategory) 
          //this.syncProducts 
          commit('products', res.data.products)
          return Promise.resolve()
        } catch(e) {
          console.log(e)
          return Promise.reject(e)
        }
      },

      refreshCurrentProduct ({ state, commit },id) {
        state.products.forEach(prod => {
          if (prod._id === id) {
            commit('currentProduct', prod)
            return
          }
        })
      }
    }
  };
  