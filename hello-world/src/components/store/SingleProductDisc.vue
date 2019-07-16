<script>
export default {
  props: {
    discription: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      descOpen: null
    }
  },
  mounted () {
    this.checkDevice()
  },
  methods: {

    checkDevice() {
      if(this.device == 'desktop') {
        this.descOpen = true
      } else {
        this.descOpen = false
      }
    }
  }
}
</script>


<template>

  <div class="dropdown-root flex-col">

    <span v-if=" this.device == 'mobile'" class="drop-title flex AL-center pointer">DESCRIPTION
      <span class="disc-wrapper pointer">
        {{ discription }}
      </span>
    </span>
    
  </div>
</template>


<style lang="scss" scoped>
.dropdown-root {
  max-height: 26.9rem;
  height: 100%;
  width: 100%;
  margin-bottom: 2rem;
  position: relative;
  border: 0.1rem solid black;
  padding-top: 1rem;

}
.drop-title {
  height: 4rem; 
  text-align: left;
  width: 100%;
  padding-left: 1rem;
}
.disc-wrapper {
    // border: 0.1rem solid black;
    height: 4rem;
    width: calc(100% - 2rem);
    margin-bottom: 2rem;
    font-size: 2rem;
      padding-top: 0.4rem;
      font-family: 'Pixelpalm-text';
      text-rendering: geometricPrecision;
      font-smooth: never;
      -webkit-font-smoothing: none;
  }
@media only screen and (max-width: 1200px) {
  .dropdown-root {
    max-height: 20.9rem;
    height: auto;
    width: 100%;
    padding-right: 1rem;
    margin-bottom: 2rem;
    position: relative;
    margin-top: 2rem;
    user-select: none;
    // border: 0.1rem solid black;
    padding-top: 0;

  }
  .drop-title {
    height: 4rem; 
    text-align: left;
    width: 100%;
    padding-left: 1rem;
    position: relative;
  }
  .disc-wrapper {
      // border: 0.1rem solid black;
      height: 4rem;
      width: calc(100% - 2rem);
      position: absolute;
      top: 5rem;
      left: 0;
      margin-bottom: 2rem;
      font-size: 2rem;
        padding-top: 0.4rem;
        font-family: 'Pixelpalm-text';
        text-rendering: geometricPrecision;
        font-smooth: never;
        -webkit-font-smoothing: none;
    }
}
</style>
