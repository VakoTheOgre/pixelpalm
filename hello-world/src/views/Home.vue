<script>
import StoreTemplate from '@/components/store/StoreTemplate'
export default {
  components: {
    StoreTemplate
  },
  
  methods: {
     routePush(payload) {
       if ( payload == 'pp' ) {
        this.$router.push('/grayarea/policies')
       } else {
         this.$router.push('/grayarea/legal')
       }
       if ( this.device == 'desktop' ) {
        this.$store.commit("accountIcon/close")
        this.$store.commit("exploreIcon/close")
        this.$store.commit("searchIcon/close")
        this.$store.commit("menuIcon/close")
        this.$store.commit("cartIcon/close")
        this.$store.commit("legalsIcon/open")
       }
     }
  }

}
</script>

<template>
  <div class="home">
    <div v-if='device == "mobile"' class="carousel-wrapper">
      <carousel id="carousela" :per-page="1" :autoplay="true" :autoplayTimeout="3000" :loop="true" :paginationEnabled="false" >
            <slide id="slide">
              <div class="slide">
              
            </div>
            </slide>
            <slide id="slide2">
              <div class="slide">
              
            </div>
            </slide>
            <slide id="slide3">
              <div class="slide">
              
            </div>
            </slide>
      </carousel>
      <!-- <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/palm-logo.svg" class="logo-float"> -->
    </div>
    <store-template></store-template>
    <div class="terms-wrap flex JF-spaceBE">
      <span @click="routePush('pp')" class="terms pointer">PP</span>
      <span @click="routePush('la')" class="terms pointer">LA</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.terms {
  &-wrap {
    width: 5.5rem;
    position: absolute;
    bottom: 0.5rem;
    right: 1rem;
  }
  font-size: 1rem;
  user-select: none;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
.home {
  display: flex;
  margin: 0 !important;
  padding: 0 !important;
}
@media only screen and (max-width: 1200px) {
  .home {
    flex-direction: column;
    padding-top: 7rem;
  }
  #carousela {
    height: calc(100vh - 7rem) !important;
    margin-top: 7rem;
  }
  #slide,#slide2,#slide3 {
    width: 100vw;
    height: calc(100vh - 7rem) !important;
  }
  .carousel-wrapper {
    position: relative;
    height: calc(100vh - 4rem) !important;
  }
  .slide {
    display: block;
    background-image: url(https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80);
    background-size: cover;
    background-position: center center;
    width: 100vw;
    height: calc(100vh - 7rem) !important;
  }
  .logo-float {
    position: absolute !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

