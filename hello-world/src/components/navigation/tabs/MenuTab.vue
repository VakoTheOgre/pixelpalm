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
  }
}
</script>

<template>
<div class="main-menu">
  <div class="product-menu">
    <router-link tag="div" v-for="(category, index) in menus.main" :key="`${index}`"  
    :to="`/shop/${category.name.toLowerCase()}`"  class="product-menu_item">
      <img :src="category.svg" alt="icon" class="menu-icon pointer">
      <span class="menu-option pointer"> {{ category.name }} </span>
    </router-link>
  </div>
  <div class="socials flex JF-spaceBE">
    <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/pinterest-icon.svg" alt="Pinterest-icon" class="pointer">
    <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/twitter-icon.svg" alt="Twitter-icon" class="pointer">
    <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/facebook-icon.svg" alt="Facebook-icon" class="pointer">
    <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/instagram-icon.svg" alt="Instagram-icon" class="pointer">
    <grayIcon></grayIcon>
  </div>
</div>
</template>

<style lang="scss" scoped>
.main-menu {
  background-color: white;
  height: calc(100vh - 17.2rem);
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
  font-size: 3.2rem;
  padding-left: 1rem;
}
.socials {
  position: absolute;
  bottom: 2rem;
  width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
}
</style>
