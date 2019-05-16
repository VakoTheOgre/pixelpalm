<script>
import Cookie from 'js-cookie'
import sidebar from '@/components/navigation/SideBar'
import ViewportListener from '@/helpers/mixins/ViewportListener.js'
import Navbar from '@/1_mobile/components/Navbar'
import Footer from '@/1_mobile/components/Footer'
export default {
  components: {
    sidebar,
    Navbar,
    Footer
  },
  mixins: [ViewportListener],
  async mounted () {
    try {
      await this.$store.dispatch('auth/me')
      await this.$store.dispatch('products/getAllProducts')
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<template>
  <div id="app">
    <div v-if='device == "desktop"' class="fake-sidebar">
      .
    </div>
    <sidebar v-if='device == "desktop" && $route.name != "admin"'></sidebar>
    <navbar v-if='device == "mobile"'></navbar>
    <router-view/>
    <!-- <div class="spacer"></div> -->
    <Footer v-if='device == "mobile"'></Footer>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}
// @media only screen and (min-width: 1200px) and (max-height: 872px) {
//   html {
//     font-size: 42.5%;
//   }
//   .pixecon {
//     width: 20px;
//     height: 20px;
//   }
// }
.sidbar-wrapper {
  position: absolute;
  top: 0;
  left: 0;
}
#app {
  display: flex;
  overflow: hidden;
}
.fake-sidebar {
  color: transparent;
  display: block;
  user-select: none;
  width: 33rem;
  min-height: 100vh;
}
@font-face {
    font-family: 'Pixelpalm-category-font';
    src: 
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/menu-fonts/Pixelpalm-category-font.svg) format('svg'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/menu-fonts/Pixelpalm-category-font.eot) format('embedded-opentype'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/menu-fonts/Pixelpalm-category-font.eot#iefix) format('embedded-opentype'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/menu-fonts/Pixelpalm-category-font.woff2) format('woff2'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/menu-fonts/Pixelpalm-category-font.woff) format('woff'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/menu-fonts/Pixelpalm-category-font.ttf) format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Pixelpalm-text';
    src:
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/regular-font/Pixelpalm-text-regular.svg) format('svg'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/regular-font/Pixelpalm-text-regular.eot) format('embedded-opentype'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/regular-font/Pixelpalm-text-regular.eot#iefix) format('embedded-opentype'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/regular-font/Pixelpalm-text-regular.woff2) format('woff2'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/regular-font/Pixelpalm-text-regular.woff) format('woff'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/regular-font/Pixelpalm-text-regular.ttf) format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Pixelpalm Pro';
    src:
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/bold-font/PixelpalmProBold.svg) format('svg'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/bold-font/PixelpalmProBold.eot) format('embedded-opentype'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/bold-font/PixelpalmProBold.eot#iefix) format('embedded-opentype'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/bold-font/PixelpalmProBold.woff2) format('woff2'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/bold-font/PixelpalmProBold.woff) format('woff'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/bold-font/PixelpalmProBold.ttf) format('truetype');
    font-weight: bold;
    font-style: normal;
}
@font-face {
    font-family: 'new_cart_font';
    src:
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/cart-font/newcartfont.svg) format('svg'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/cart-font/newcartfont.eot) format('embedded-opentype'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/cart-font/newcartfont.eot#iefix) format('embedded-opentype'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/cart-font/newcartfont.woff2) format('woff2'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/cart-font/newcartfont.woff) format('woff'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/cart-font/newcartfont.ttf) format('truetype');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'Pixelpalm Pro-Input';
    src:
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/input-font/PixelpalmProRegular.svg) format('svg'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/input-font/PixelpalmProRegular.eot) format('embedded-opentype'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/input-font/PixelpalmProRegular.eot#iefix) format('embedded-opentype'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/input-font/PixelpalmProRegular.woff2) format('woff2'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/input-font/PixelpalmProRegular.woff) format('woff'),
      url(https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/fonts/input-font/PixelpalmProRegular.ttf) format('truetype');
    font-weight: 100;
    font-style: normal;
}



/* 

  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;

  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;

  font-family: 'Pixelpalm Pro';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;

  font-family: 'new_cart_font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;

  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;

*/
@media only screen and (max-width: 1200px) {
  #app {
    flex-direction: column;
  }
}
</style>
