<script>
import slider from '../AdminSlider'
export default {
  components: {
    slider
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
    }
  },

  // methods: {
  //   send() {

  //   }
  // }

}

</script>

<template>
  <div v-if="allImages" class="root">
    <slider v-for="(img, index) in images" :key="index" :cat="images[index].category" :id="images[index]._id" :imgSet="images[index].images"></slider>
  </div>
</template>

<style lang='scss' scoped>
.root {
  min-width: 100vw;
  min-height: 100vh;
  height: 100%;
  width: 100%;
}
</style>
