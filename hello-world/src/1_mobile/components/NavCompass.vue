<script>
import isShop from '../../helpers/mixins/isShop.js'
export default {
  mixins: [isShop],
  
  computed: {
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
      return this.$store.getters['accountIcon/crumbs']
    },

    crumbs() {
      if (this.injectedCrumbs) {
        return this.injectedCrumbs
      }
      try {
        let crumbs = this.$route.fullPath.split('/').filter(val => val != '')
        crumbs.forEach((crumb, index) => {
          if (crumb.length > 15) {
            this.$store.getters['products/getAllProudcts'].forEach(product => {
              if (product._id == crumb) {
                crumbs[index] = product.name
                return
              }
            })
          }
        })
        
        crumbs[crumbs.length - 1] = crumbs[crumbs.length - 1].split('?')[0]
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
  <div :class="{'center': isShop}" class="bread-wrapper flex AL-center">
    <span v-if="!isShop" class="bread-home">FREE WORLDWIDE SHIPPING FOR ORDERS ABOVE $50</span>
    <div v-if="isShop && !injectedCrumbs" class="breadcrumbs">
      <router-link tag="span" to="/" class="pointer bread-font"> HOME | </router-link>
      <router-link :key="index" tag="span" v-for="(crumb, index) in crumbs" :to="createCrumb(index)" class="pointer bread-font" >{{ crumb.toUpperCase() }} | </router-link>
    </div>
    <div v-else>
      <span :key="index" v-for="(crumb, index) in crumbs"> {{ crumb }}</span>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .bread {
    &-wrapper {
      width: 100%;
      height: 2.5rem;
      background-color: black;
      padding-bottom: 2px;
      line-height: 1;
      padding-top: 1.5px;
      text-rendering: geometricPrecision;
      font-family: 'Pixelpalm-category-font';
      font-smooth: never;
      -webkit-font-smoothing: none;
    }

    &-home,
    &crumbs {
      text-align: center;
      color: white;
      width: 100%;
      font-size: 0.5rem !important;
    }

    &crumbs {
      margin-left: 1rem;
    }
    
  }
  @media only screen and (max-width: 1200px) {
    .bread-font {
      text-rendering: geometricPrecision;
      font-family: 'Pixelpalm-category-font';
      font-smooth: never;
      -webkit-font-smoothing: none;
      font-size: 1rem;
    }
  }
</style>

