<script>
import Cookie from 'js-cookie'
import sidebar from '@/components/navigation/SideBar'
import ViewportListener from '@/helpers/mixins/ViewportListener.js'
import Navbar from '@/1_mobile/components/Navbar'
import Footer from '@/1_mobile/components/Footer'
import Loader from './components/Loader'
import { setTimeout } from 'timers';
export default {
  components: {
    sidebar,
    Navbar,
    Footer,
    Loader
  },
  mixins: [ViewportListener],
  async mounted () {
    try {
      this.$store.commit('setLoading', true)
      await this.$store.dispatch('auth/me')
      await this.$store.dispatch('products/getAllProducts')
      await this.$store.dispatch('blogs/GET')
      this.$store.commit('setLoading', false)
      this.cookieAfterTimeout()
    } catch (e) {
      console.log(e)
    }
  },

  data () {
    return {
      cookieReady: false
    }
  },

  computed: {
    showCookies() {
      if ( Cookie.get('cookie-policy') ) {
        return false
      } else if ( this.cookieReady ) {
        return true
      }
    },

    loading () {
      return this.$store.getters['loading']
    }
  },

  methods: {
    acceptCookies () {
      Cookie.set( 'cookie-policy', 'accept' )
    },

    cookieAfterTimeout () {
      setTimeout(() => {
        this.cookieReady = true
      }, 5000)
    },

    closeCookies () {
      this.cookieReady = false
      this.acceptCookies()
    }
  }
}
</script>

<template>
  <div id="app">
    <div v-if="!loading">
      <sidebar v-if='device == "desktop" && $route.name != "admin"'></sidebar>
      <navbar v-if='device == "mobile"'></navbar>
      <transition mode="out-in" name="slide">
        <router-view/>
      </transition>
      <transition name="cookies" mode="in-out">
      <div v-if="showCookies" class="cookies flex JF-spaceBE">
          <span>This website uses cookies to ensure you get the best experience. <a style="color: black;" class="pointer" href="https://pixelpalm.co/grayarea/policies">More Info</a></span>
          <div @click="closeCookies" class="pointer ok">OK</div>
        </div>
      </transition>
      <Footer v-if='device == "mobile"'></Footer>
    </div>
    <loader v-else></loader>
  </div>
</template>

<style lang="scss">
input {
    border-radius: 0 !important;
    -webkit-appearance: none !important;
    -webkit-tap-highlight-color: transparent;
    outline:none !important;
}
input:focus {
  outline-color: transparent!important;
  outline-width: 0!important;
}
input:enabled {
  outline-color: transparent!important;
  outline-width: 0!important;
}
:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset !important;
    background-color: white !important;
 }

 :-webkit-autofill {
    -webkit-text-fill-color: black !important;
 }
//{
//   "name": "BLOG",
//   "svg": "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/blog-icon.svg"
// },
// {
//   "name": "PROJECTS",
//   "svg": "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/projects-icon.svg"
// },
    
.ok {
  background-color: black; color: white; 
  margin-left: 3rem; 
  margin-top: -0.7rem;
  font-size: 2rem !important; 
  padding: 0.4rem;
  padding-left: 0.7rem !important; 
  margin-right: 2rem; 
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
@media only screen and (max-width: 1199px) {
  .cookies {
    justify-content: flex-start;
    background-color: white;
    align-items: center;
    width: 100% !important;
    padding-left: 1rem !important;
    font-size: 1rem !important;
    white-space: normal !important;
    min-height: 5.2rem !important;
    height: auto !important;
    position: fixed !important;
    left: 0 !important;
    z-index: 10000 !important;
    top: auto !important;
    bottom: 0rem !important;
    font-family: 'Pixelpalm-text';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
  }
  .ok {
    background-color: black; 
    color: 
    white; margin-left: 3rem; 
    padding: 0.5rem !important;
    margin-top: 0 !important;
    padding-left: 0.7rem !important; 
    margin-right: 1rem; 
    font-size: 1.5rem !important;
    font-family: 'Pixelpalm-category-font';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
  }
  .cookies-enter-active {
    transition: transform 0.5s ease;
  }
  .cookies-leave-active {
    transition: transform 0.5s ease;
  }
  .cookies-enter {
    transform: translateY(100%);
  }
  .cookies-leave-to {
    transform: translateY(100%) !important;
  }
}

.slide-enter-active {
  transition: transform 0.1s;
}
.slide-leave-active {
  transition: transform 0.1s;
}
.slide-enter {
  opacity: 1;
}
.slide-leave-to {
  opacity: 0;
}
 
@media only screen and (min-width: 1200px) {
  .cookies-enter-active {
    transition: transform 0.2s ease;
  }
  .cookies-leave-active {
    transition: transform 0.2s ease;
  }
  .cookies-enter {
    transform: translateY(-100%);
  }
  .cookies-leave-to {
    transform: translateY(-100%);
  }
}
.cookies {
  justify-content: flex-start;
  align-items: center;
  width: calc( 100vw - 35rem );
  font-size: 2rem;
  white-space: nowrap;
  height: 6.4rem;
  position: absolute;
  right: 0;
  top: 1rem;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
.redError {
  border-color: red !important;
}

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  &:focus {
    outline-color: transparent !important;
    outline-width: 0px !important;
  }
  &:required:focus {
    outline-color: transparent !important;
    outline-width: 0px !important;
  }
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
#app {
  display: flex;
  overflow: hidden;
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
