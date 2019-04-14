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
    <div class="sidebar-logo flex center">
      PIXELPALM
    </div>
    <img src="https://cdn4.vectorstock.com/i/1000x1000/51/93/vertical-flat-background-of-geometric-triangle-vector-19385193.jpg" class="add-img">
    <main-menu></main-menu>
    <account-tab v-if="this.accountState"></account-tab>
    <cart-tab v-if="this.cartState"></cart-tab>
    <explore-tab v-if="this.exploreState"></explore-tab>
    <menu-tab v-if="this.menuState"></menu-tab>
    <search-tab v-if="this.searchState"></search-tab>
    <grayArea v-if="this.legalsState"></grayArea>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  width: 33rem;
  min-height: 100vh;
  position: relative;
  &-logo {
    height: 10rem;
    font-size: 3rem;
  }
}
.add-img {
  width: 33rem;
  height: calc(100vh - 17.2rem);
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: -1;
}

</style>
