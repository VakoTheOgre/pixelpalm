<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import CartItem from '@/services/CartService/cartService'
import checkoutBtn from '@/components/store/CheckoutBtn'
import SubtotalCheckout from '@/components/navigation/tabs/SubtotalCheckout'
export default {
  components: {
    checkoutBtn,
    SubtotalCheckout
  },
  computed: {
    ...mapState('cart', {
      cart: state => state.cart
    }),
    ...mapGetters({
      cart: 'cart/getCart'
    }),
    subtotal() {
      return this.$store.getters['cart/subtotal']
    }
  },
  methods: {
    // addOne(item) {
    //   CartItem.changeAmount(item, '+')
    // },

    // removeOne(item) {
    //   if(item.amount > 1) {
    //     CartItem.changeAmount(item, '-')
    //   }
    // },
    remove(index) {
      this.$store.commit('cart/removeFromCart', index)
    }
  }
}
</script>

<template>
<div class="cart-wrapper flex-col AL-center">
  <span class="heading">CART</span>
      <div :key="index" v-for="(item,index) in cart" class="cart-item flex ">
          <img :src="item.product.images[0]" class="thumb">

          <div class="details flex JF-spaceAR AL-center">
            <span class="spans pointer"> {{ item.product.name }} </span>
            <span class="spans pointer"> {{ item.variant.size }} </span>
            <span class="spans pointer"> {{ item.amount }} </span>
            <span class="spans pointer"> ${{ item.variant.price }} </span>
            <div @click="remove(index)" class="bin spans pointer">
              X
            </div>
          </div>
          <!-- <div class="quantity-row flex-row AL-center JF-spaceBE">
            <span>Quantity:</span>
            <button @click="addOne(item)" class="plus flex center">
            <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/Inside-Cart/plus_10px_icon.svg" alt="+">
            </button>
            <div class="box-spinner flex center">
              <span class="quantity-number flex center">
                {{ item.amount }} 
              </span>
            </div>
             <button @click="removeOne(item)" class="minus flex center">
              <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/Inside-Cart/minus_10px_icon.svg" alt="-">
            </button>
          </div> -->
      </div>
      <subtotal-checkout></subtotal-checkout>
      <div class="spacer"></div>
      <checkout-btn backColor="red" margin="3"></checkout-btn>
  </div>
</template>

<style lang="scss" scoped>
.spacer {
  height: 2rem;
}
.heading {
  width: calc(100vw - 2rem) ;
  text-align: left;
  padding-top: 3rem;
  padding-bottom: 1rem;
  margin-top: 0 !important;
  font-size: 1.5rem !important;
  font-family: 'Pixelpalm-category-font';
  font-smooth: never;
  -webkit-font-smoothing : none;
}
.cart-wrapper {
  background-color: white;
  min-height: 100vh;
  // z-index: 5;
  // overflow-y: scroll;
  :first-of-type {
    margin-top: 1rem;
  }
}
.cart-item {
  width: 27rem;
  height: 6rem;
  border: 0.2rem solid black;
  position: relative;
  margin-top: 3rem;
  :first-of-type {
    margin-top: 0;
  }
}
.spans {
  padding: 0.2rem;
}
.thumb {
  height: 5.6rem;
  width: 5.6rem;
  border-right: 0.2rem solid black;
}
.details {
  width: 100%;
  font-size: 1.2rem;
}
.quantity-number {
  font-size: 1.2rem;
  padding-left: 0.3rem;
  height: 1.8rem;
  font-family: 'pixelcart';
  text-align: center;
}
button {
  background-color: transparent;
  border: none;
}
.bin {
  font-size: 1.2rem;
}
@media only screen and (max-width: 1200px) {
  .cart-item {
    width: calc(100vw - 2rem);
  }
}
</style>