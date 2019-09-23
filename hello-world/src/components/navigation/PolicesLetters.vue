<script>
export default {
  
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
  <div class="terms-wrap flex JF-spaceBE">
    <span @click="routePush('pp')" class="terms pointer">PP</span>
    <span @click="routePush('la')" class="terms pointer">LA</span>
  </div>
</template>

<style lang='scss' scoped>
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
</style>