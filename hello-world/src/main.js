import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import '@/assets/main.scss'
import axios from 'axios'
import ViewportListener from './helpers/mixins/ViewportListener'
import VueCarousel from 'vue-carousel'
import { VueHammer } from 'vue2-hammer'
Vue.mixin(ViewportListener)

axios.defaults.baseURL = 'http://192.168.1.137:5000/api'

export default axios

Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(VueCarousel)
Vue.use(VueHammer)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
