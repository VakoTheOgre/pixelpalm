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
    legalsState() {
        return this.$store.getters['legalsIcon/legalsState']
    },
    socialsState() {
    return this.$store.getters['socialIcons/socialsState']
    }
  },
  methods: {
    closeLegals(payload) {
      this.$store.commit("legalsIcon/close")
      this.$store.commit('accountIcon/setCrumbs', [payload])
    }
  }
}
</script>

<template>
<div class="main-menu">
  <div class="product-menu">
    <router-link tag="span" v-for="(category, index) in menus.grayarea" :key="`${index}`"  
    :to="`/grayarea/${category.name.toLowerCase()}`" @click="closeLegals(menus.grayarea.name)" class="product-menu_item">
      <img @click="closeLegals" :src="category.svg" alt="icon" class="menu-icon pointer">
      <span @click="closeLegals" class="menu-option pointer"> {{ category.name }} </span>
    </router-link>
  </div>
  <div v-if="!this.socialsState" class="socials flex JF-spaceBE">
    <studioIcon id="studioIcon"></studioIcon>
    <div class="socials-icons flex JF-spaceBE">
        <a target="_blank" href="https://www.pinterest.com/pixelpalm/">  <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/pinterest-icon.svg" alt="Pinterest-icon" class="left pointer"></a>
        <a target="_blank" href="https://twitter.com/pixelpalm">         <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/twitter-icon.svg" alt="Twitter-icon" class="left pointer"></a>
        <a target="_blank" href="https://www.facebook.com/pixelpalm.co/"><img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/facebook-icon.svg" alt="Facebook-icon" class="pointer"></a>
        <a target="_blank" href="https://www.instagram.com/pixelpalm/">  <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/instagram-icon.svg" alt="Instagram-icon" class="right pointer"></a>
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
.product-menu {
  padding-left: 1rem;
  padding-top: 2rem;
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
  