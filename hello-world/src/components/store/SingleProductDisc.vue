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
    toggleDD() {
      this.descOpen = !this.descOpen
    },
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

    <span @click="toggleDD" v-if=" this.device == 'mobile'" class="drop-title flex AL-center pointer">DESCRIPTION</span>

    <transition name="drop">
      <span v-if="descOpen" class="disc-wrapper pointer">
       {{ discription }}
      </span>
    </transition>
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
.drop-enter-active {
  transform: scaleY(1);
  opacity: 1;
  transition: all 0.5s;
  height: 100%;
  overflow: hidden;
}
.drop-leave-active {
  transform: scaleY(0);
  opacity: 1;
  transition: all 0.5s;
  height: 100%;
  overflow: hidden;
}

.drop-enter {
  transform: scaleY(0);
  opacity: 0;
  // transition: all 0.5s;
}
.drop-leave-to {
  transform: scaleY(0);
  opacity: 0;
  // transition: all 0.5s;
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
}
</style>
