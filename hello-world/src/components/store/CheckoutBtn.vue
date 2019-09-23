
<script>
import { mapGetters } from 'vuex'
export default {
    props: {
        backColor: {
            type: String,
            required: true
				},
				margin: {
					type: String,
					required: true
				}
    },
    data() {
        return {
            cartEmpty: true
        }
    },
    computed: {
        ...mapGetters({
            cart: 'cart/getCart',
            cartIcon: 'cartIcon/cartState'
        }),
        cart() {
           return this.$store.getters['cart/getCart']
        },
        cartIcon() {
           return this.$store.getters['cartIcon/cartState']
        },
        cartItems() {
            if (this.cart.length > 0) {
                return false
            } else {
                return true
            }
        }
    },

    methods: {
      closeSidebar () {
          if ( this.device == 'mobile' ) {
              this.$store.commit("cartIcon/close")
          } else {
              this.$store.commit("cartIcon/open")
          }
        this.$store.commit("menuIcon/close")
        this.$store.commit("exploreIcon/close")
        this.$store.commit("searchIcon/close")
        this.$store.commit("accountIcon/close")
        this.$store.commit("legalsIcon/close")
      }
    }
    
}
</script>

<template>
    <router-link v-if="this.$route.name != 'checkout' && !cartItems" tag="div" to="/checkout" @click.native="closeSidebar" :style="{ backgroundColor: backColor, marginTop: margin + 'rem' }" class="root-btn pointer flex center">
        <span class="btn-text">CHECKOUT</span>
    </router-link>

</template>

<style lang="scss" scoped>
.root-btn {
  margin-top: 3rem !important;
  width: 27rem;
  min-height: 4rem !important;
  padding: 0 !important;
  background-color: #15CD72 !important;
  outline-offset: -0.2rem;
  outline: 0.2rem solid #15CD72;
  margin: 0 !important;
  color: white;
  font-size: 2rem;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
@media only screen and (max-width: 1200px) {
    .root-btn {
        width: calc(100vw - 2rem);
        margin-top: 0rem !important;
    }
}
</style>
