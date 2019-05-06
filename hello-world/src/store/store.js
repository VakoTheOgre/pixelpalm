import Vue from 'vue'
import Vuex from 'vuex'
import menuIcon from './navigation/menuIcon'
import exploreIcon from './navigation/exploreIcon'
import searchIcon from './navigation/searchIcon'
import accountIcon from './navigation/accountIcon'
import legalsIcon from './navigation/legalsIcon'
import cartIcon from './navigation/cartIcon'
import products from './Products/products'
import admin from './navigation/admin/admin'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menuIcon,
    exploreIcon,
    searchIcon,
    accountIcon,
    cartIcon,
    products,
    legalsIcon,
    admin
  },
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
