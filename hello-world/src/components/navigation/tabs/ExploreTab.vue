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
    closeSidebar() {
      this.$store.commit("exploreIcon/close")
      this.$store.commit("menuIcon/close")
      this.$store.commit("searchIcon/close")
      this.$store.commit("accountIcon/close")
      this.$store.commit("cartIcon/close")
      this.$store.commit("legalsIcon/close")
    }
  }
}
</script>

<template>
<div class="main-menu">
  <div class="explore-menu">
    <router-link @click.native="closeSidebar" tag="div" v-for="(category, index) in menus.explore" :key="`${index}`"  
    :to="`/studio/${category.name.toLowerCase()}`" class="explore-menu_item">
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
.explore-menu {
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
.menu-option {
  font-size: 2rem;
  padding-left: 1rem;
  font-family: 'Pixelpalm-category-font';
  font-smooth: never;
	-webkit-font-smoothing : none;
}
.socials {
  position: absolute;
  bottom: 2rem;
  width: 100%;
  padding-left: 3rem;
  padding-right: 3rem;
}
</style>
