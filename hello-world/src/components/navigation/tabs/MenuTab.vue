<script>
import grayIcon from './GrayAreaIcon'
export default {
components: {
  grayIcon
}
}
</script>

<template>
<div class="main-menu">
  <div class="product-menu">
    <router-link tag="div" to="/shop/t-shirts" class="product-menu_item">
      <img src="" alt="T-shits icon" class="menu-icon pointer">
      <span class="menu-option pointer">T-SHIRTS</span>
    </router-link>
    <router-link tag="div" to="/shop/tanktops" class="product-menu_item">
      <img src="" alt="Tanktops icon" class="menu-icon pointer">
      <span class="menu-option pointer">TANKTOPS</span>
    </router-link>
    <router-link tag="div" to="/shop/hoodies" class="product-menu_item">
      <img src="" alt="Hoodies icons" class="menu-icon pointer">
      <span class="menu-option pointer">HOODIES</span>
    </router-link>
    <router-link tag="div" to="/shop/sweaters" class="product-menu_item">
      <img src="" alt="Sweaters icon" class="menu-icon pointer">
      <span class="menu-option pointer">SWEATERS</span>
    </router-link>
    <router-link tag="div" to="/shop/hats-caps" class="product-menu_item">
      <img src="" alt="Caps icon" class="menu-icon pointer">
      <span class="menu-option pointer">HATS&CAPS</span>
    </router-link>
    <router-link tag="div" to="/shop/beanies" class="product-menu_item">
      <img src="" alt="Beanies icon" class="menu-icon pointer">
      <span class="menu-option pointer">BEANIES</span>
    </router-link>
  </div>
  <div class="socials flex JF-spaceBE">
    <img src="../../../assets/icons/pinterest-icon.svg" alt="Pinterest-icon" class="pointer">
    <img src="../../../assets/icons/twitter-icon.svg" alt="Twitter-icon" class="pointer">
    <img src="../../../assets/icons/facebook-icon.svg" alt="Facebook-icon" class="pointer">
    <img src="../../../assets/icons/instagram-icon.svg" alt="Instagram-icon" class="pointer">
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
