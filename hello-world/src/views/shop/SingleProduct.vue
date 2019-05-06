<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      product: null,
      selectedVariant: null,
      addedToCart: false,
      error: '',
      sizes: ['S','M','L','XL','XXL'],
      currentImage: 0
    }
  },
  computed: {
    ...mapGetters({
      products: 'products/getAllProducts'
    }),
  },

  watch: {
    products (v) {
      if (v.length > 0) {
        this.getProduct()
      }
    }
  },

  methods: {

    getProduct() {
      let p = this.$store.getters['products/getAllProducts'].find(product => product._id === this.$route.params.id)
      if (p) {
        this.product = p
      } else {
        this.$router.push('/404')
      }
    },

    addToCart() {
      if(!this.selectedVariant) {
        this.error = 'Please select a size first'
        return
      }
      // this.$store.commit('cart/addToCart', {
      //   product: this.product,
      //   variant: this.selectedVariant
      // })
      this.addedToCart = true
    },
    checkout() {

    },

    checkCart(product) {
      this.cart.forEach((item, index, cart) => {
        console.log(check(product._id, item.product._id))
        if(check(product._id, item.product._id)) {
          this.addedToCart = true
          return
        } else if(!check(product._id, item.product._id) && index == cart.length - 1) {
          this.addedToCart = false
        }
      })
    }
  }

}
</script>


<template> 
  <div class="root flex center" v-if="product">

    <div class="image-wrapper">
      <img :src="product.images[currentImage]" class="carousel">
      <div class="carousel-navigation flex JF-spaceBE">
        <div :key="index" @click="currentImage = index" v-for="(thumbnail, index) in product.images" class="carousel-navigation_dot" :class="{'active-image': currentImage === index}">DOT</div>
      </div>
    </div>
        
    <div class="details flex-col">
        <span class="details-short flex AL-center"> {{ product.name }} </span>
        <span class="details-short flex AL-center"> {{ product.variants[0].price }} </span>
        <span class="details-short flex AL-center"> SHARE </span>
      <div class="sizes flex JF-spaceAR AL-center">
        <div v-for="(size, index) in sizes" :key="`option-${index}`"> {{ size }} </div>
      </div>
      <p class="disc"> {{ product.description }} </p>
      <button @click="addToCart" class="add-to-cart pointer">ADD TO CART</button>
    </div>
  </div>
  <span v-else>Loading...</span>
 
</template>


<style lang="scss" scoped>

.carousel-navigation_dot.active-image {
  opacity: 1;
}

.root {
    min-width: calc(100vw - 33rem);
    min-height: 100vh;
}
.details {
  justify-content: flex-start;
  height: 56rem;
  font-size: 1.6rem;
  width: 27rem;
  margin-right: 33rem;
  margin-left: 2rem;
  &-short {
    height: 4rem;
    width: 100%;
    margin-bottom: 2rem;
    user-select: none;
  }
}
.image-wrapper {
  width: 56rem;
  height: 56rem;
  position: relative;
}
.carousel {
  width: 56rem;
  height: 56rem;
  &-navigation {
    position: absolute;
    left: 50%;
    bottom: 2rem;
    transform: translate(-50%, -50%);
    margin-left: 1rem;
    z-index: 3;
    &_dot {
      margin-right: 1rem;
      background-color: black;
      height: 2rem;
      width: 2rem;
      opacity: 0.5;
      cursor: pointer;
      user-select: none;
    }
  } 
}
.sizes {
  width: 27rem;
}

</style>