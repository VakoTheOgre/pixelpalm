<script>
import isShop from '../../helpers/mixins/isShop.js'
import { mapGetters } from 'vuex'
export default {
  mixins: [isShop],
  
  data () {
    return {
      routeName: ''
    }
  },

  watch: {
    $route(v) {
      if (v.name) {
        this.routeName = v.name
      }
    }
  },

  computed: {


    ...mapGetters({
      products: 'products/getAllProducts'
    }),

    menuState() {
        return this.$store.getters['menuIcon/menuState']
    },
    exploreState() {
        return this.$store.getters['exploreIcon/exploreState']
    },
    accountState() {
        return this.$store.getters['accountIcon/accountState']
    },
    cartState() {
        return this.$store.getters['cartIcon/cartState']
    },
    legalsState() {
        return this.$store.getters['legalsIcon/legalsState']
    },

    injectedCrumbs () {
       if (this.$store.getters['accountIcon/crumbs']) {
         return this.$store.getters['accountIcon/crumbs']
       } else if (this.$store.getters['menuIcon/crumbs']) {
         return this.$store.getters['menuIcon/crumbs']
       }
      
    },

    crumbs() {
      if (this.injectedCrumbs) {
        return this.injectedCrumbs
      }
      try {
        let crumbs = this.$route.fullPath.split('/').filter(val => val != '')
        crumbs.forEach((crumb, index) => {
          if (crumb.length > 15) {
            
            for (let i = 0; i < this.products.length; i++) {
              console.log('lol')
              if (this.products[i]._id == crumb) {
                crumbs[index] = this.products[i].name
                return
              }
            }
          }
        })

        return crumbs
      } catch(e) {

      }
    }
  },

  methods: {
    createCrumb(index) {
      let fullCrumb = ''
      for (let i = 0; i <= index; i++) {
        fullCrumb = `${fullCrumb}/${this.crumbs[i]}`
      }

      return fullCrumb
    }
  }
}
</script>


<template>
  <div :class="{'center': isShop}" class="bread-wrapper flex center">

    <div v-if="isShop && !injectedCrumbs && !menuState && !cartState &&  !accountState && !exploreState && !legalsState" class="flex center">
      <span class="absolute-span">
          <router-link tag="span" to="/"> &ensp;HOME&ensp; </router-link>
      <router-link :key="index" tag="span" v-for="(crumb, index) in crumbs" :to="createCrumb(index)" > |&ensp;{{ crumb.toUpperCase() }}&ensp; </router-link>
      </span>
    </div>

    <div v-else-if="menuState || cartState ||  accountState || exploreState || legalsState">
      <span :key="index" v-for="(crumb, index) in crumbs" class="absolute-span"> {{ crumb }}</span>
    </div>

    <div v-else-if="(routeName ==  'legal' || 'payment' || 'policies' || 'returns' || 'shipping') && routeName != 'home'" class="flex center"> 
      <span class="absolute-span">{{ routeName.toUpperCase() }}</span>
    </div>

    <div v-else class="flex center"> 
      <span class="absolute-span">FREE WORLDWIDE SHIPPING FOR ORDERS ABOVE $50</span>
    </div>

  </div>
</template>


<style lang="scss" scoped>
.bread-wrapper {
  width: 100%;
  position: relative;
  height: 2rem;
  text-rendering: geometricPrecision;
  font-family: 'Pixelpalm-text';
  font-smooth: never;
  -webkit-font-smoothing: none;
  font-size: 1rem;
  color: white ;
  z-index: 5;
  background-color: black;
}
.absolute-span {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: 0.1rem;
  transform: translate(-50%, -50%);
  white-space: nowrap;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
</style>

