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
import checkout from './cart/checkout'
import VuexPersistence from 'vuex-persist'
Vue.use(Vuex)


const VuexPersist = new VuexPersistence({
  modules: ['cart','products']
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
    checkout
  },
  state: {

  },
  mutations: {

  },
  actions: {

  },
  plugins: [VuexPersist.plugin]
})
