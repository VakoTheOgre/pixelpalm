<script>
import { mapGetters } from 'vuex'
import sizes from '@/components/store/Sizes'
import checkoutBtn from '@/components/store/CheckoutBtn'
import viewCart from '@/components/store/ViewCartBtn'
import disc from '@/components/store/SingleProductDisc'
import vtitle from '@/components/store/SingleProductTitle'
import price from '@/components/store/SingleProductPrice'
import share from '@/components/store/SingleProductShare'
export default {
  components: {
    sizes,
    checkoutBtn,
    disc,
    vtitle,
    share,
    price,
    viewCart
  },
  data() {
    return {
      product: null,
      selectedVariant: null,
      error: 'E',
      currentImage: 0,
      selectedSize: null,
      addedText: false
    }
  },
  computed: {
    ...mapGetters({
      products: 'products/getAllProducts',
      cart: 'cart/getCart'
    }),
    cartState() {
        return this.$store.getters['cartIcon/cartState']
    }
  },

  watch: {
    products (v) {
      if (v.length > 0) {
        this.getProduct()
      }
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
        this.error = 'E'
        return
      } 
      this.addedText = true
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
      this.addedText = true
    }
  },
  mounted () {
    if (this.products.length > 0) {
        this.getProduct()
    }     
  }
 
}
</script>


<template> 
  <div v-if="product" class="root">
    
    <div class="carousel-wrap">

      <carousel id="carousela" @page-change="function (e) { currentImage = e }" :per-page="1" :autoplay="false" :autoplayHoverPause="false" :mouseDrag="true" :touchDrag="true"  :loop="false" :paginationEnabled="false" :value="currentImage">

            <slide :key="`image-${index}`" v-for="(image, index) in product.images" class="image-wrapper">
              <img :src="image" class="carousel">
            </slide>

            

      </carousel>
      <div class="carousel-navigation flex JF-spaceBE">
        <div :key="index" @click="currentImage = index" v-for="(thumbnail, index) in product.images" class="carousel-navigation_dot" :class="{'active-image': currentImage === index}">.</div>
      </div>

    </div>
    <div class="details flex-col">
        
        <vtitle v-if="this.device == 'desktop'" :name="product.name"></vtitle>
        <price  v-if="this.device == 'desktop'" :price="product.variants[0].price"></price>
        <share  v-if="this.device == 'desktop'" ></share>
        <disc   v-if="this.device == 'desktop'" :discription="product.description"></disc>

        <span   v-if="this.device == 'desktop' && !this.addedText" class="select-size flex AL-center">Select Size </span>
        <transition name="slideIn">
          <span   v-if="this.device == 'desktop' && this.addedText" class="select-size-small flex AL-center">Item Added To Cart </span>
        </transition>
        <sizes  v-if="this.device == 'desktop' && !this.addedText" @sizeSelect="selectSize"></sizes>
        <transition name="slideIn">
          <view-cart v-if="this.device == 'desktop' && this.addedText"></view-cart>
        </transition>



        <div v-if="this.device == 'mobile'" class="horizontarl-wrapper flex AL-center">
          <vtitle :name="product.name"></vtitle>
          <price :price="product.variants[0].price"></price>
        </div>
          <span   v-if="this.device == 'mobile' && !this.addedText" class="select-size flex AL-center">Select Size </span>
        <transition name="slideIn">
          <span   v-if="this.device == 'mobile' && this.addedText" class="select-size-small AL-center">Item Added To Cart </span>
        </transition>
        
        <sizes  v-if="this.device == 'mobile'" @sizeSelect="selectSize"></sizes>
        

        <div v-if="!this.addedText" @click="addToCart" class="add-btn pointer flex center">
          <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/add-to-cart.svg">
        </div>
        <checkout-btn v-else backColor="green" margin="0"></checkout-btn>
        <disc   v-if="this.device == 'mobile'" :discription="product.description"></disc>
        
        <share  v-if="this.device == 'mobile'" ></share>
                              <!-- :class="{ lowOpacity: this.error != '' }" -->
      
    </div>
  </div>
  <span v-else>Loading...</span>
</template>


<style lang="scss" scoped>
.lowOpacity {
  opacity: 0.8;
}
  .carousel-navigation_dot.active-image {
    opacity: 1;
  }
  .root {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: calc(100vw - 33rem);
    min-height: 100vh;
    // flex-direction: column;
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
    
  }
  .select-size {
    width: 100%; 
    height: 4rem;
    text-align: left;
    border: 0.1rem solid black;
    margin-bottom: 2rem;
    font-family: 'Pixelpalm-text';
    font-size: 2rem;
    padding-top: 0.3rem;
    text-rendering: geometricPrecision;
    font-smooth: never;
    padding-left: 1rem;
    -webkit-font-smoothing: none;
    padding-left: 1rem;
    &-small {
      width: 100%; 
      height: 4rem;
      text-align: left;
      border: 0.1rem solid black;
      margin-bottom: 2rem;
      margin-left: 50%;
      transform: translateX(-50%);
      font-family: 'Pixelpalm-text';
      font-size: 2rem;
      padding-top: 0.3rem;
      padding-left: 1rem;
      text-rendering: geometricPrecision;
      font-smooth: never;
      }
  }
  #carousela {
    width: 56rem;
    height: 56rem;
  }
  .carousel-wrap {
    position: relative;
    width: 56rem;
    height: 56rem;
    margin-left: 16.5rem;
  }
  .carousel {
    width: 56rem;
    height: 56rem;
    border: 0.1rem solid black;
    &-navigation {
      position: absolute;
      left: 50%;
      bottom: 0.6rem;
      transform: translate(-50%, -50%);
      margin-left: 1rem;
      // z-index: 3;
      z-index: -3;
      &_dot {
        margin-right: 1rem;
        background-color: black;
        height: 1rem;
        width: 1rem;
        opacity: 0.5;
        cursor: pointer;
        user-select: none;
        color: transparent;
      }
    } 
  }
  
  .add-btn {
    width: 100%;
    height: 4rem;
    background-color: black;
    // cursor: not-allowed;
  }
  .slideIn-enter-active,
  .slideIn-leave-active,
  .slideIn2-enter-active,
  .slideIn2-leave-active {
    opacity: 1;
    transition: all 0.5s;
  }
  .slideIn-enter,
  .slideIn-leave-to,
  .slideIn2-enter,
  .slideIn2-leave-to {
    opacity: 0;
    transition: all 0.5s;
  }
  @media only screen and (max-width: 1200px) {
    .carousel-navigation_dot.active-image {
    opacity: 1;
  }
  .select-size {
    width: 100%; 
    height: 4rem;
    text-align: left;
    border: 0.1rem solid black;
    margin-bottom: 2rem;
    font-family: 'Pixelpalm-text';
    font-size: 2rem;
    padding-top: 0.3rem;
    text-rendering: geometricPrecision;
    font-smooth: never;
    padding-left: 1rem;
    &-small {
      width: 100%; 
      height: 4rem;
      text-align: center;
      border: 0.1rem solid black;
      margin-bottom: 2rem;
      font-family: 'Pixelpalm-text';
      font-size: 2rem;
      padding-top: 0.3rem;
      text-rendering: geometricPrecision;
      padding-left: 1rem;
      font-smooth: never;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
  .root {
    display: flex;
    padding-top: 8.5rem;
    align-items: center;
    min-width: calc(100vw - 33rem);
    min-height: 100vh;
    flex-direction: column;
  }
  .details {
    justify-content: center;
    height: 56rem;
    font-size: 1.6rem;
    margin-left: 0;
    margin-right: 0;
    margin-top: -8.5rem;
    width: calc(100% - 2rem);
    &-short {
          border: none;
    }
  }
  #carousela {
    width: calc(100vw - 2rem);
    height: auto;
  }
  .carousel-wrap {
    position: relative;
    width: calc(100vw - 2rem);
    height: auto;
    margin-left: 0;
  }
  .carousel {
    width: 100%;
    height: auto;
    &-navigation {
      position: absolute;
      left: 50%;
      bottom: 1rem;
      transform: translate(-50%, -50%);
      z-index: 1;
      margin-left: 0;
      margin-right: 1rem;
      &_dot {
        margin-right: 0.6rem;
        background-color: black;
        height: 1rem;
        width: 1rem;
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
  .horizontarl-wrapper {
    width: 100%;
    border: 0.1rem solid black;
    height: 4rem;
    margin-bottom: 2rem;
  }
  .add-btn {
    width: 100%;
    height: 4rem;
    background-color: black;
  }
}
</style>