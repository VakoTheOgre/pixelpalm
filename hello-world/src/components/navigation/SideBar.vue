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
  computed: {
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
    }
  }
}
</script>

<template>
  <div class="sidebar">
    <div class="sidebar-logo flex-col AL-center">
      <router-link tag="img"  to="/" src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/pixelpalm_logo_big.svg" 
                          alt="PIXELPALM-LOGO" class="text-logo pointer"></router-link>
    </div>
    <main-menu></main-menu>
    <carousel :per-page="1" :autoplay="true" :autoplayHoverPause="false" :mouseDrag="false" :touchDrag="false" :autoplayTimeout="3000" :loop="true" :paginationEnabled="false" >
          <slide id="slide">
            <div class="slide">
            
          </div>
          </slide>
          <slide id="slide2">
            <div class="slide">
            
          </div>
          </slide>
          <slide id="slide3">
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
.sidebar {
  width: 33rem;
  min-height: 100vh;
  position: relative;
  &-logo {
    height: 5.6rem;
    font-size: 3rem;
    justify-content: flex-end;
  }
}
.slideIn-enter-active,
.slideIn-leave-active,
.slideIn2-enter-active,
.slideIn2-leave-active {
  opacity: 1;
  transform: translateX(0) scale(1);
  transition: all 0.5s;
}
.slideIn-enter,
.slideIn-leave-to,
.slideIn2-enter,
.slideIn2-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.5s;
}

#slide,#slide2,#slide3 {
  width: 100vw;
  height: calc(100vh - 12.8rem);
}
.slide {
  display: block;
  background-image: url(https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80);
  background-size: cover;
  background-position: center center;
  width: 33rem;
  height: calc(100vh - 12.8rem);
  
}
</style>
