<script>
import isHome from '../../helpers/mixins/isHome.js'
export default {
  mixins: [isHome],

  computed: {
    crumbs() {
      try {
        let crumbs = this.$route.fullPath.split('/').filter(val => val != '')
        crumbs.forEach((crumb, index) => {
          let splitCrumb = crumb.split('?')
          if(splitCrumb[1]) {
            crumbs[index] = decodeURIComponent(splitCrumb[0])
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
  <div :class="{'center': isHome}" class="bread-wrapper flex AL-center">
    <span v-if="isHome" class="bread-home">FREE WORLDWIDE SHIPPING FOR ORDERS ABOVE 100$</span>
    <div v-if="!isHome && $route.name != 'error'" class="breadcrumbs">
      <router-link tag="span" to="/" class="pointer bread-font" >HOME | </router-link>
      <router-link :key="index" tag="span" v-for="(crumb, index) in crumbs" :to="createCrumb(index)" class="pointer bread-font" >{{ crumb.toUpperCase() }} | </router-link>
    </div>
  </div>
</template>


<style lang="scss" scoped>
  .bread {
    &-wrapper {
      width: 100%;
      height: 2.4rem;
      background-color: black;
      padding-bottom: 2px;
    }

    &-home,
    &crumbs {
      text-align: center;
      color: white;
    }

    &crumbs {
      margin-left: 1rem;
    }
    
  }
  @media only screen and (max-width: 360px) {
    .bread-font {
      font-size: 0.9rem;
    }
  }
</style>

