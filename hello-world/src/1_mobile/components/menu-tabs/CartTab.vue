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
      cart: 'cart/getCart',
      amount: 'cart/getAmount'
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
  <div class="scrollable-wrap flex-col AL-center">
        <span class="heading">CART</span>
        <div :key="index" v-for="(item,index) in cart" class="cart-item flex ">
            <img :src="item.product.images[0]" class="thumb">

            <div class="details flex JF-spaceAR AL-center">
              <span class="spans pointer"> {{ item.product.name }} </span>
              <span class="spans pointer"> {{ item.variant.size }} </span>
              <span class="spans pointer"> {{ item.amount }} </span>
              <span class="spans pointer"> ${{ item.variant.price }} </span>
              <img @click="remove(index)" src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/delete-icon.svg" alt="X" class="bin spans pointer">
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
        <div class="spacer"></div>
        <div v-if="amount == 0" class="empty">Oops! Your cart is empty...</div>
        <div v-if="amount !== 0" class="subtotal-checkout-root flex ">
            <!-- <span class="subtotal">SUBTOTAL: ${{ subtotal }}.00 </span> -->
            <span class="total flex AL-center">Order Total:</span>
            <span class="num flex AL-center"> ${{ subtotal }}</span>
        </div>
        <checkout-btn backColor="red" margin="3"></checkout-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.subtotal-checkout-root {
  justify-content: flex-end;
    padding-top: 1rem;
    padding-bottom: 0.6rem;
    width: 42rem;
}
.total {
  padding-top: 0rem;
  width: auto;
  text-align: left;
  font-size: 2rem;
  font-family: 'Pixelpalm Pro';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
}
.num {
  padding-top: 0rem;
  width: auto;
  height: 3rem;
  margin-left: 1rem;
  font-size: 2rem;
  font-family: 'Pixelpalm Pro';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
}
@media only screen and (max-width: 1200px) {
    .subtotal-checkout-root {
        border-top: none ;
        padding-top: 1rem;
        padding-bottom: 1.4rem;
        width: calc(100vw - 2rem) !important;
    }
    .num {
        padding-bottom: 1rem !important;
    }
    .total {
        padding-top:0rem;
        text-align: left;
        padding-left: 0;
        margin: 0;
        font-size: 2rem;
        padding-left: 2rem;
        margin-top: -1rem;
    }
}
.empty {
  font-size: 2rem;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
.spacer {
  height: 0.1rem;
  margin-bottom: 2rem;
  color: transparent;
  user-select: none;
}
.heading {
  width: calc(100vw - 2rem) ;
  text-align: left;
  padding-top: 3rem;
  margin-top: 0 !important;
  font-size: 1.5rem !important;
  font-family: 'Pixelpalm-category-font';
  font-smooth: never;
  -webkit-font-smoothing : none;
}
.scrollable-wrap {
  max-height: 100%;
  overflow: auto;
  overflow-x: hidden !important;
  height: 100%;
  padding-bottom: 20rem;
  width: 100%;

}
.cart-wrapper {
  position: absolute;
  width: 100vw;
  top: 7rem;
  left: 0;
  background-color: white;
  margin-bottom: -0.2rem !important;
  min-height: 100vh;
  max-height: 100%;
  overflow: auto;
  overflow-x: hidden !important;
  // z-index: 5;
  // overflow-y: scroll;
}
.cart-item {
  width: 27rem;
  height: 6rem;
  border: 0.2rem solid black;
  position: relative;
  margin-top: 2rem;
  :first-of-type {
    margin-top: 0;
  }
}
.spans {
  padding: 0.2rem;
  font-size: 2rem;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
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
  width: 1rem;
  height: 1rem;
  padding: 0;
  margin: 0 0.6rem 0.2rem 0;
}
@media only screen and (max-width: 1200px) {
  .cart-item {
    width: calc(100vw - 2rem);
  }
  .heading {
    margin-bottom: -1rem;
  }
}
</style>