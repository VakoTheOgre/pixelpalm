<script>
import menus from '@/helpers/navigation.json'
import grayIcon from '@/components/navigation/tabs/GrayAreaIcon'
import StudioIcon from '../StudioIcon'
export default {
  components: {
    grayIcon,
    StudioIcon
  },
  data() {
    return {
      menus
    }
  },
  computed: {
    exploreState() {
        return this.$store.getters['exploreIcon/exploreState']
    },
    socialsState() {
    return this.$store.getters['socialIcons/socialsState']
    }
  },
  methods: {
    closeExplore() {
      this.$store.commit("exploreIcon/close")
    }
  }
}
</script>

<template>
<div class="main-menu">
  <div class="explore-menu">
    <router-link tag="span" v-for="(category, index) in menus.explore" :key="`${index}`"  
    :to="`/studio/${category.name.toLowerCase()}`" @click="closeExplore" class="explore-menu_item">
      <img @click="closeExplore" :src="category.svg" alt="icon" class="menu-icon pointer">
      <span @click="closeExplore" class="menu-option pointer"> {{ category.name }} </span>
    </router-link>
  </div>
  <div v-if="!this.socialsState" class="socials flex JF-spaceBE">
    <studioIcon id="studioIcon"></studioIcon>
    <div class="socials-icons flex JF-spaceBE">
        <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/pinterest-icon.svg" alt="Pinterest-icon" class=" left pointer">
        <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/twitter-icon.svg" alt="Twitter-icon" class=" left pointer">
        <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/facebook-icon.svg" alt="Facebook-icon" class=" pointer">
        <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/instagram-icon.svg" alt="Instagram-icon" class=" right pointer">
    </div>
    <grayIcon id="grayIcon"></grayIcon>
  </div>
</div>
</template>

<style lang="scss" scoped>
.main-menu {
  width: 100vw;
  background-color: white;
  min-height: calc(100vh - 11rem);
  position: absolute;
  top: 11rem;
  left: 0;
}
.explore-menu {
  padding-left: 1rem;
  padding-top:  2rem;
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
  position: fixed;
  bottom: 1rem;
  left: 0;
  width: 100vw;
}
.left {
    padding-right: 1rem;
}
.right {
    padding-left: 1rem;
}
#grayIcon {
    padding-right: 1rem;
}
#studioIcon {
    padding-left: 1rem;
} 
</style>

