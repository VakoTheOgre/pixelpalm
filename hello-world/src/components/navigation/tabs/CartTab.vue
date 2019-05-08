<script>
import { mapState } from 'vuex'
import { mapGetters } from 'vuex'
import CartItem from '@/services/CartService/cartService'
export default {
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
<div class="cart-wrapper flex JF-center">
      <div :key="index" v-for="(item,index) in cart" class="cart-item flex JF-spaceBE">
          <img :src="item.product.images[0]" class="thumb">
          <span> {{ item.product.name }} </span>
          <span class="size"> {{ item.size }} </span>
          <span> {{ item.amount }} </span>
          <span class="price"> {{ item.product.price }} </span>
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
        <button @click="remove(index)" class="bin">
          X
        </button>
      </div>
  </div>
</template>

<style lang="scss" scoped>
.cart-wrapper {
  background-color: white;
  height: calc(100vh - 17.2rem);
  // overflow-y: scroll;
  &:first-child {
    margin-top: 6rem;
  }
}
.cart-item {
  width: 27rem;
  height: 6rem;
  border: 0.2rem solid black;
  margin-bottom: 1rem;
  position: relative;
}
.thumb {
  height: 5.6rem;
  width: 5.6rem;
  border-right: 0.2rem solid black;
}
.bin {
  
}
.price {
  
}
.size {
  
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
</style>