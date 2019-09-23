<script>
import MainMenu from '@/components/navigation/MainMenu'
import AccountTab from '@/components/navigation/tabs/account-tab/AccountTab'
import CartTab from '@/components/navigation/tabs/CartTab'
import ExploreTab from '@/components/navigation/tabs/ExploreTab'
import MenuTab from '@/components/navigation/tabs/MenuTab'
import SearchTab from '@/components/navigation/tabs/SearchTab'
import grayArea from '@/components/navigation/tabs/GrayArea'
export default {
  components: {
    MainMenu,
    AccountTab,
    CartTab,
    ExploreTab,
    MenuTab,
    SearchTab,
    grayArea
  },

  data() {
    return {
      images: []
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

    async allImages() {
      try {
        let res = await this.$axios.get('/slider')
        this.images = res.data.sliders
      } catch(e) {
        console.log(e)
      }
    },

    currentImages() {
      if ( !this.allImages ) {
        return
      }
      console.log('in')
      for ( let i in this.images ) {
        if ( this.$route.params.id == 'tanktops' ) {
          return this.images[i].images
        } else if ( this.$route.params.id == 't-shirts' ) {
          return this.images[i].images
        } else if ( this.$route.params.id == 'hoodies' ) {
          return this.images[i].images
        } else if ( this.$route.params.id == 'sweaters' ) {
          return this.images[i].images
        } else if ( this.$route.params.id == 'hats' ) {
          return this.images[i].images
        } else if ( this.$route.name == 'home' ) {
          return this.images[i].images
        } else {
          return this.images[i].images
        }
      }
    },

    menuState() {
      return this.$store.getters['menuIcon/menuState']
    },
    exploreState() {
      return this.$store.getters['exploreIcon/exploreState']
    },
    searchState() {
      return this.$store.getters['searchIcon/searchState']
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
    routeChecker() {
      if ( this.$route.name == 'home'  ) {
        // this.$route.name == 'shopProd' || this.$route.name == 'shop' ||this.$route.name == 'shopCat'
        return true
      } else {
        return false
      }
    }

  }
}
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-logo flex-col AL-center">
      <a href="/" class="text-logo pointer">
        <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/pixelpalm_logo_big.svg"  alt="PIXELPALM-LOGO" class="text-logo pointer">
      </a>
    </div>
    <main-menu></main-menu>
    <carousel v-show="routeChecker" id="carousela" :per-page="1" :autoplay="true"  :autoplayTimeout="2000" :mouseDrag="false" :touchDrag="false" :loop="true" :paginationEnabled="false" >
          <slide v-for="(img, index) in currentImages" :key="index" id="slide" :style="{ backgroundImage: 'url(' + img + ')' }">
            <div class="slide">
            
          </div>
          </slide>
    </carousel>
    <transition name="slideIn">
      <account-tab v-if="this.accountState"></account-tab>
      <cart-tab v-if="this.cartState"></cart-tab>
      <explore-tab v-if="this.exploreState"></explore-tab>
      <menu-tab v-if="this.menuState"></menu-tab>
      <search-tab v-if="this.searchState"></search-tab>
      <grayArea v-if="this.legalsState"></grayArea>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
#carousela {
  z-index: -1;
}
.sidebar {
  width: 33rem;
  min-height: 100vh;
  position: fixed;
  z-index: 100000000;
  top:0;
  left:0;
  &-logo {
    height: 5.6rem;
    font-size: 3rem;
    justify-content: flex-end;
  }
}
.text-logo {
  width: 25.8rem;
  height: 3.6rem
}
.slideIn-enter-active,
.slideIn-leave-active,
.slideIn2-enter-active,
.slideIn2-leave-active {
  opacity: 0.5;
  transform: translateX(0) scale(1);
  transition: all 0.3s;
}
.slideIn-enter,
.slideIn-leave-to,
.slideIn2-enter,
.slideIn2-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.3s;
}

  
#slide {
  background-size: cover;
  background-position: center center;
  width: 100vw;
  height: calc(100vh - 12.8rem);
}
.slide {
  display: block;
  
  width: 33rem;
  height: calc(100vh - 12.8rem);
  
}
</style>
