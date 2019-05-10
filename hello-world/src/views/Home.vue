<script>
import StoreTemplate from '@/components/store/StoreTemplate'
export default {
  components: {
    StoreTemplate
  },
}
</script>

<template>
  <div class="home">
    <div v-if='device == "mobile"' class="carousel-wrapper">
      <carousel :per-page="1" :autoplay="true" :autoplayHoverPause="false" :mouseDrag="false" :touchDrag="false" :autoplayTimeout="3000" :loop="true" :paginationEnabled="false" >
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
      <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/logo-pixelpalm.svg" class="logo-float">
    </div>
    <store-template></store-template>

  </div>
</template>

<style lang="scss" scoped>
.home {
  display: flex;
}
@media only screen and (max-width: 1200px) {
  .home {
    flex-direction: column;
    padding-bottom: 17rem;
    padding-top: 7.4rem;
  }
  #slide,#slide2,#slide3 {
    width: 100vw;
    height: calc(100vh - 7.4rem);
  }
  .carousel-wrapper {
    position: relative;
  }
  .slide {
    display: block;
    background-image: url(https://images.unsplash.com/photo-1539601591461-2a5e0edb6915?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80);
    background-size: cover;
    background-position: center center;
    width: 100vw;
    height: calc(100vh - 7.4rem);
  }
  .logo-float {
    position: absolute !important;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

