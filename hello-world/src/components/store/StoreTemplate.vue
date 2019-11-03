<script>
export default {

  data () {
    return {
      infoBox: {
        title: '',
        price: '',
        entered: false
      }
    }
  },

  computed: {
    products() {
      if (this.$route.params.category) {
        return this.$store.getters['products/getAllProducts'].filter(product => (
          product.subcategory.toLowerCase() === this.$route.params.category.toLowerCase()
        ))
      } else {
        return this.$store.getters['products/getAllProducts']
      }
    }
  },

  methods: {
    getInfo(e, product) {
      this.entered = true
      const infoBox = e.target.parentElement.childNodes[1]
      this.infoBox.title = product.name
      this.infoBox.price = product.variants[0].price
    },

    removeInfo(e) {
      this.entered = false
      const infoBox = e.target.childNodes[1]
      this.infoBox.title = ''
      this.infoBox.price = ''
    }
  }
}
</script>


<template>
  <div :class="{ marginTop: $route.name != 'home', marginTopDesk: this.device == 'desktop' }" class="whole-store">
    <router-link class="product-box flex-col" @mouseleave.native="removeInfo" @mousemove.native="function(e) { getInfo(e, product) }" tag="div" :to="`/shop/${product.subcategory.toLowerCase()}/${product._id}`"
                  :key="index" v-for="(product, index) in products" :class="{ relative: (infoBox.title == product.name && device == 'desktop') }">
        <img :src="product.images[0]" alt="img" class="photo pointer" :class="{ blur: (infoBox.title == product.name && device == 'desktop') }">
        <div v-if="infoBox.title == product.name && device == 'desktop'" class="info flex-col">
          <span style="padding-bottom: 0.5rem;">{{ infoBox.title }}</span>
          <span>${{ infoBox.price }}</span>
        </div>

        <div v-if="device == 'mobile'" class="disc flex-col AL-center JF-spaceBE">
          <span class="title"> {{ product.name }} </span>
          <span class="price"> ${{  product.variants[0].price}} </span>
        </div>

        <div v-if="infoBox.title == product.name && device == 'desktop'" class="info flex-col">
          <span style="padding-bottom: 0.5rem;">{{ infoBox.title }}</span>
          <span>${{ infoBox.price }}</span>
        </div>
    </router-link>
  </div>
</template>


<style lang="scss" scoped>
.product-box {
  height: 100%;
}
.disc {
  margin-top: -0.3rem;
  padding-left: 0.2rem;
  width: calc( 100% - 0.1rem);
  height: 5rem;
  // background-color: red;
}
.title {
  font-size: 2rem;
  padding-top: 0.4rem;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
.price {
  font-size: 2rem;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
.blur {
  opacity: 0.4;
  transition: all 0.2s;

}
.info {
  color: black;
  font-size: 2rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
  text-align: center;
  user-select: none;
  cursor: pointer;
}

.photo {
  position: relative;
}
.relative {
  position: relative !important;
}
@media only screen and (max-width: 1200px) {
  .whole-store {
    margin-top: 5rem !important;
    padding-bottom: 5.2rem;
  }
}

@media only screen and (max-width: 768px) {
  .marginTop {
    margin-top: 7.8rem !important; 
  }
  .whole-store {
    overflow: hidden;
    min-width: 144rem;
    display: grid;
    grid-template-columns: calc(50vw - 1.5rem) calc(50vw - 1.5rem);
    column-gap: 1rem;
    grid-row-gap: 6rem;
    grid-auto-rows: calc(50vw - 1.5rem);
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .store-item {
    // background-color: black;
    // border: 0.1rem solid black;
    
    margin: 0;
    padding: 0;
  }
  .photo {
      // background-color: black;
      // border: 0.1rem solid black;
      width: calc(50vw - 1.6rem);
      height: auto;
      margin: 0;
      padding: 0;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1200px) {
  .marginTopDesk {
    padding-top: 10rem;
  }
  .whole-store {
    min-width: 32rem;
    display: grid;
    grid-template-columns: calc(25vw - 1.25rem) calc(25vw - 1.25rem) calc(25vw - 1.25rem) calc(25vw - 1.25rem) ;
    column-gap: 1rem;
    grid-auto-rows: calc(25vw - 1.25rem);
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .photo {
    // background-color: black;
    // border: 0.1rem solid black;
    width: calc(25vw - 1.25rem);
    height: auto;
    margin: 0;
    padding: 0;
  }
}
@media only screen and (min-width: 1201px) and (max-width: 1365px) {
  .marginTopDesk {
    padding-top: 10rem;
  }
  .whole-store {
    min-width: 32rem;
    display: grid;
    grid-template-columns: calc(25vw - 10rem) calc(25vw - 10rem) calc(25vw - 10rem) calc(25vw - 10rem) ;
    column-gap: 1rem;
    grid-auto-rows: calc(25vw - 10rem);
    margin-left: 35rem;
    margin-top: 2.6rem;
    margin-bottom: 1rem;
  }
  .photo {
    // background-color: black;
    // border: 0.1rem solid black;
    width: calc(25vw - 10rem);
    height: auto;
    margin: 0;
    padding: 0;
  }
}
@media only screen and (min-width: 1366px) {
  .marginTopDesk {
    padding-top: 11.6rem;
  }
  .whole-store {
    min-height: calc(96vh - 10px);
    min-width: 32rem;
    display: grid;
    grid-template-columns: calc( 16.6666667vw - 7rem) calc( 16.6666667vw - 7rem) calc( 16.6666667vw - 7rem) calc( 16.6666667vw - 7rem) calc( 16.6666667vw - 7rem) calc( 16.6666667vw - 7rem)  ;
    column-gap: 1rem;
    grid-auto-rows: calc( 16.6666667vw - 6rem);
    margin-left: 35rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .photo {
    // background-color: black;
    // border: 0.1rem solid black;
    width: calc( 16.6666667vw - 7rem);
    height: auto;
    margin: 0;
    padding: 0;
  }
}
</style>