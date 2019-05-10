<script>
import { mapGetters } from 'vuex'
import sizes from '@/components/store/Sizes'
import check from '@/helpers/checkIfInCart'
import checkoutBtn from '@/components/store/CheckoutBtn'
export default {
  components: {
    sizes,
    checkoutBtn
  },
  data() {
    return {
      product: null,
      selectedVariant: null,
      addedToCart: false,
      error: '',
      currentImage: 0,
      selectedSize: null
    }
  },
  computed: {
    ...mapGetters({
      products: 'products/getAllProducts',
      cart: 'cart/getCart'
    }),
  },

  watch: {
    products (v) {
      if (v.length > 0) {
        this.getProduct()
      }
    },
    product (v) {
      this.checkCart(v)
    }
  },

  methods: {

    selectSize(p) {
      this.selectedSize = p
    },
    
    getProduct() {
      let p = this.$store.getters['products/getAllProducts'].find(product => product._id === this.$route.params.id)
      if (p) {
        this.product = p
      } else {
        this.$router.push('/404')
      }
    },

    addToCart() {
      if(!this.selectedSize) {
        this.error = 'Please select a size first'
        return
      }
      let selectedVariant
      for (let variant in this.product.variants) {
        console.log(variant)
        if (this.product.variants[variant].size.toLowerCase() === this.selectedSize.toLowerCase()) {
          selectedVariant = this.product.variants[variant]
          break
        }
      }

      this.$store.commit('cart/addToCart', {
        product: this.product,
        variant: selectedVariant
      })
      this.addedToCart = true
    },
    checkCart(product) {
      this.cart.forEach((item, index, cart) => {
        console.log(product._id, item.product._id)
        if(check(product._id, item.product._id)) {
          this.addedToCart = true
          return
        } else if(!check(product._id, item.product._id) && index == cart.length - 1) {
          this.addedToCart = false
        }
      })
    }
  },
  mounted () {
    if (this.products.length > 0) {
        this.getProduct()
    }
    if (this.product) {
        this.checkCart(this.product)
    }
     
  }

}
</script>


<template> 
  <div v-if="product" class="flex root center">

    <div class="image-wrapper">
      <img :src="product.images[currentImage]" class="carousel">
      <div class="carousel-navigation flex JF-spaceBE">
        <div :key="index" @click="currentImage = index" v-for="(thumbnail, index) in product.images" class="carousel-navigation_dot" :class="{'active-image': currentImage === index}">.</div>
      </div>
    </div>
        
    <div class="details flex-col">
        <span class="details-short flex AL-center">&nbsp; {{ product.name }} </span>
        <span class="details-short flex AL-center">&nbsp; ${{ product.variants[0].price }} </span>
        <span class="details-short flex AL-center">&nbsp; SHARE </span>
        <div class="disc-wrapper">
          <p class="disc"> {{ product.description }} </p>
        </div>
        <span class="details-short flex AL-center">&nbsp; Select Size </span>

        <sizes @sizeSelect="selectSize"></sizes>
      
      <div v-if="!addedToCart" @click="addToCart" class="add-btn pointer flex center"><img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/add-to-cart.svg"></div>
    
      <checkout-btn v-else backColor="green" margin="0"></checkout-btn>
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
    text-rendering: geometricPrecision;
    font-family: 'Pixelpalm-category-font';
    font-smooth: never;
    -webkit-font-smoothing: none;
    width: 27rem;
    margin-right: 33rem;
    margin-left: 2rem;
    &-short {
      height: 4rem;
      width: 100%;
      margin-bottom: 2rem;
      user-select: none;
      border:0.1rem solid black;
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
    border: 0.1rem solid black;
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
        color: transparent;
      }
    } 
  }
  .disc-wrapper {
    border: 0.1rem solid black;
    height: 23.2rem;
    margin-bottom: 2rem;
  }
  .disc {
    text-align: justify;
    padding-left: 1rem; 
    padding-top: 1rem;
  }
  .add-btn {
    width: 100%;
    height: 4rem;
    background-color: black;
  }
  @media only screen and (max-width: 1200px) {
    .carousel-navigation_dot.active-image {
    opacity: 1;
  }

  .root {
      min-width: calc(100vw - 33rem);
      min-height: 100vh;
      flex-direction: column;
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
      border:0.1rem solid black;
    }
  }
  .image-wrapper {
    width: calc(100vw - 2rem);
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
  .disc-wrapper {
    border: 0.1rem solid black;
    height: 23.2rem;
    margin-bottom: 2rem;
  }
  .disc {
    text-align: justify;
    padding-left: 1rem; 
    padding-top: 1rem;
  }
  .add-btn {
    width: 100%;
    height: 4rem;
    background-color: black;
  }
}
</style>