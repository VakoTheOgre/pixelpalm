<script>
import menus from '@/helpers/navigation.json'
import grayIcon from './GrayAreaIcon'
export default {
  components: {
    grayIcon
  },
  data() {
    return {
      menus
    }
  },

  methods: {
    closeMenu() {
      this.$store.commit("menuIcon/close")
    }
  }
}
</script>

<template>
<div class="main-menu">
  <div class="product-menu">
    <router-link tag="span" @click="closeMenu" v-for="(category, index) in menus.main" :key="`${index}`"  
    :to="`/shop/${category.name.toLowerCase()}`"  class="product-menu_item">
      <img :src="category.svg" alt="icon" class="menu-icon pointer">
      <span class="menu-option pointer"> {{ category.name }} </span>
    </router-link>
  </div>
  <div class="socials flex JF-spaceBE">
    <grayIcon></grayIcon>
      <a target="_blank" href="https://www.pinterest.com/pixelpalm/">  <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/pinterest-icon.svg" alt="Pinterest-icon" class="left pointer"></a>
      <a target="_blank" href="https://twitter.com/pixelpalm">         <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/twitter-icon.svg" alt="Twitter-icon" class="left pointer"></a>
      <a target="_blank" href="https://www.facebook.com/pixelpalm.co/"><img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/facebook-icon.svg" alt="Facebook-icon" class="pointer"></a>
      <a target="_blank" href="https://www.instagram.com/pixelpalm/">  <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/instagram-icon.svg" alt="Instagram-icon" class="right pointer"></a>
  </div>
</div>
</template>

<style lang="scss" scoped>
.main-menu {
  background-color: white;
  min-height: calc(100vh - 12.8rem);
  width: 33rem;
  position: absolute;
  top: 12.8rem;
  left: 0;
  
}
.product-menu {
  padding-left: 3rem;
  padding-top: 3rem;
  &_item {
    display: flex;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 2rem;
  }
}
.menu-icon {
  max-width: 3rem;
  max-height: 3rem;
}
.menu-option  {
  font-size: 2rem;
  padding-left: 1rem;
  text-rendering: geometricPrecision;
  font-family: 'Pixelpalm-category-font';
  font-smooth: never;
	-webkit-font-smoothing: none;

}
.socials {
  position: absolute;
  bottom: 2rem;
  width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
}
</style>
