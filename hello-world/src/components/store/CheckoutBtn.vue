
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
    }
    
}
</script>

<template>
    <router-link v-if="this.$route.name != 'checkout' && !cartItems" tag="div" to="/checkout" :style="{ backgroundColor: backColor, marginTop: margin + 'rem' }" class="root-btn pointer flex center">
        <img style="margin: 0 !important;" src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/check-out.svg">
    </router-link>

</template>

<style lang="scss" scoped>
.root-btn {
  margin-top: 3rem !important;
  width: 27rem;
  height: 4rem;
  padding: 0 !important;
  background-color: #15CD72 !important;
  margin: 0 !important;
}
@media only screen and (max-width: 1200px) {
    .root-btn {
        width: calc(100vw - 2rem);
        margin-top: 0rem !important;
    }
}
</style>
