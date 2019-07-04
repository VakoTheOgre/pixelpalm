import Vue from 'vue'
import Vuex from 'vuex'
import menuIcon from './navigation/menuIcon'
import exploreIcon from './navigation/exploreIcon'
import searchIcon from './navigation/searchIcon'
import accountIcon from './navigation/accountIcon'
import legalsIcon from './navigation/legalsIcon'
import socialIcons from './navigation/socialIcons'
import cartIcon from './navigation/cartIcon'
import products from './Products/products'
import admin from './navigation/admin/admin'
import cart from './cart/cart'
import auth from './user/user.js'
import history from './user/history.js'
import information from './user/information.js'
import loggedUser from './user/loggedUser.js'
import password from './user/password.js'
import checkout from './cart/checkout'
import blogs from './blogs/blogs'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)


const VuexPersist = new VuexPersistence({
  modules: ['cart']
})

export default new Vuex.Store({
  modules: {
    menuIcon,
    exploreIcon,
    searchIcon,
    accountIcon,
    cartIcon,
    products,
    legalsIcon,
    admin,
    cart,
    socialIcons,
    checkout,
    auth,
    history,
    password,
    information,
    loggedUser,
    blogs
  },
  state: {
    loading: false
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    }
  },

  getters: {
    loading (state) {
      return state.loading
    }
  },

  actions: {
    
  },
  plugins: [VuexPersist.plugin]
})
