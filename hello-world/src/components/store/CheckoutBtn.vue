
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
            cart: 'cart/getCart'

        }),
        cart() {
           return this.$store.getters['cart/getCart']
        },
        cartItems() {
            if (this.cart.length > 0) {
                return false
            } else {
                return true
            }
        },
        checkout() {
        
        }
    }
    
}
</script>

<template>
    <router-link v-if="this.$route.name != 'checkout' && !cartItems" tag="div" to="/checkout" @click="checkout" :style="{ backgroundColor: backColor, marginTop: margin + 'rem' }" class="root-btn pointer flex center">
        <img style="margin: 0 !important;" src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/checkout.svg">
    </router-link>
    <div v-else-if="this.$route.name != 'checkout' || cartItems " style="font-size: 1.6rem;">Oops your cart is empty...</div>

</template>

<style lang="scss" scoped>
.root-btn {
  margin-top: 3rem !important;
  width: 27rem;
  height: 4rem;
  padding: 0 !important;
  margin: 0 !important;
}
@media only screen and (max-width: 1200px) {
    .root-btn {
        width: calc(100vw - 2rem);
        margin-top: 6rem !important;
    }
}
</style>
