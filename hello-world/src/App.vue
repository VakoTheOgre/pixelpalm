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
      // let res = await this.$axios.post('/auth/login', {
      //   email: 'keemo@gmail.com',
      //   password: '135426'
      // })
      // Cookie.set('token', res.data.token)
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
.sidbar-wrapper {
  position: absolute;
  top: 0;
  left: 0;
}
#app {
  display: flex;
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

@media only screen and (max-width: 1200px) {
  #app {
    flex-direction: column;
  }
}
</style>
