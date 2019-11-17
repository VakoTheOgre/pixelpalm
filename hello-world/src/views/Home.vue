<script>
import StoreTemplate from '@/components/store/StoreTemplate'
import ppla from '@/components/navigation/PolicesLetters'
export default {
  components: {
    StoreTemplate,
    ppla
  },

  data() {
    return {
      images: []
    }
  },
  
  computed: {
    async allImages() {
      try {
        let res = await this.$axios.get('/slider')
        this.images = res.data.sliders
      } catch(e) {
        console.log(e)
      }
    },

    currentImages() {
      if ( !this.allImages ) {
        return
      }
      for ( let i in this.images ) {
          return this.images[i].images
      }
    },
  }
  

}
</script>

<template>
  <div class="home flex-col">
    <div v-if='device == "mobile"' class="carousel-wrapper">
      <carousel id="carousela" :per-page="1" :autoplay="true"  :autoplayTimeout="2000" :loop="true" :paginationEnabled="false" >
          <slide v-for="(img, index) in currentImages" :key="index" id="slide" :style="{ backgroundImage: 'url(' + img + ')' }">
            <div class="slide">
              
            </div>
          </slide>
    </carousel>
      <!-- <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/palm-logo.svg" class="logo-float"> -->
    </div>
    <!-- <store-template></store-template> -->
    <div v-if="device == 'desktop'" class="terms-wrap flex JF-spaceBE">
      <span @click="routePush('pp')" class="terms pointer">PP</span>
      <span @click="routePush('la')" class="terms pointer">LA</span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.terms {
  &-wrap {
    width: 5.5rem;
    margin-left: 100%;
    transform: translateX(-95%);
    // position: absolute;
    // bottom: 0.5rem;
    // right: 1rem;
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

