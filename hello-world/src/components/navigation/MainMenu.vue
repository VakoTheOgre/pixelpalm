<script>
export default {
  data() {
    return {
      
    }
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
    },
    menuIcon() {
      if(!this.menuState) {
        let menuIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/menu-icon.svg"

        return menuIcon
      } else {
        let menuIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/close-icon.svg"

        return menuIcon
      }
    },
    exploreIcon() {
      if(!this.exploreState) {
        let exploreIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/palmtree-icon.svg"

        return exploreIcon
      } else {
        let exploreIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/close-icon.svg"

        return exploreIcon
      }
    },
    searchIcon() {
      if(!this.searchState) {
        let searchIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/search-icon.svg"

        return searchIcon
      } else {
        let searchIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/close-icon.svg"

        return searchIcon
      }
    },
    accountIcon() {
      if(!this.accountState) {
        let accountIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/login-icon.svg"

        return accountIcon
      } else {
        let accountIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/close-icon.svg"

        return accountIcon
      }
    },
    cartIcon() {
      if(!this.cartState) {
        let cartIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/cart-icon.svg"

        return cartIcon
      } else {
        let cartIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/close-icon.svg"

        return cartIcon
      }
    },
  },
  methods: {
    toggleMenu() {
      if(this.menuState) {
        this.$store.commit("menuIcon/close")
      } else {
        this.$store.commit("menuIcon/open")
        this.$store.commit("exploreIcon/close")
        this.$store.commit("searchIcon/close")
        this.$store.commit("accountIcon/close")
        this.$store.commit("cartIcon/close")
        this.$store.commit("legalsIcon/close")
      }
    },
    toggleExplore() {
      if(this.exploreState) {
        this.$store.commit("exploreIcon/close")
      } else {
        this.$store.commit("exploreIcon/open")
        this.$store.commit("menuIcon/close")
        this.$store.commit("searchIcon/close")
        this.$store.commit("accountIcon/close")
        this.$store.commit("cartIcon/close")
        this.$store.commit("legalsIcon/close")
      }
    },
    toggleSearch() {
      if(this.searchState) {
        this.$store.commit("searchIcon/close")
      } else {
        this.$store.commit("searchIcon/open")
        this.$store.commit("exploreIcon/close")
        this.$store.commit("menuIcon/close")
        this.$store.commit("accountIcon/close")
        this.$store.commit("cartIcon/close")
        this.$store.commit("legalsIcon/close")
      }
    },
    toggleAccount() {
      if(this.accountState) {
        this.$store.commit("accountIcon/close")
      } else {
        this.$store.commit("accountIcon/open")
        this.$store.commit("exploreIcon/close")
        this.$store.commit("searchIcon/close")
        this.$store.commit("menuIcon/close")
        this.$store.commit("cartIcon/close")
        this.$store.commit("legalsIcon/close")
      }
    },
    toggleCart() {
      if(this.cartState) {
        this.$store.commit("cartIcon/close")
      } else {
        this.$store.commit("cartIcon/open")
        this.$store.commit("exploreIcon/close")
        this.$store.commit("searchIcon/close")
        this.$store.commit("accountIcon/close")
        this.$store.commit("menuIcon/close")
        this.$store.commit("legalsIcon/close")
      }
    }
  }
}
</script>

<template>
  <div class="nav flex JF-spaceBE">
    <img @click="toggleMenu" :src="menuIcon"       title="Menu"    alt="" class="pointer">
    <img @click="toggleExplore" :src="exploreIcon" title="Explore" alt="" class="pointer">
    <img @click="toggleSearch" :src="searchIcon"   title="Search"  alt="" class="pointer">
    <img @click="toggleAccount" :src="accountIcon" title="Account" alt="" class="pointer">
    <img @click="toggleCart" :src="cartIcon"       title="Cart"    alt="" class="pointer">
  </div>
</template>

<style lang="scss" scoped>
.nav {
  width: 100%;
  padding: 2rem 3rem 2rem 3rem;
  border-bottom: 0.2rem solid black;
  &-icon {
    height: 3rem;
    width: 3rem;
  }
}
</style>
