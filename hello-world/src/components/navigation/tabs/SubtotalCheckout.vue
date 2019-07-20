<script>
export default {
    computed: {
        subtotal() {
        return this.$store.getters['cart/subtotal']
        }
    },
}
</script>

<template>
    <div class="subtotal-checkout-root flex-col">
        <!-- <span class="subtotal">SUBTOTAL: ${{ subtotal }}.00 </span> -->
        <span class="total">Order Total:  &nbsp &nbsp &nbsp ${{ subtotal }}.00 </span>
    </div>
</template>

<style lang="scss" scoped>
.subtotal-checkout-root {
    border-top: 0.2rem solid black;
    padding-top: 2rem;
    margin: 0;
    width: 27rem;
}
.total {
  padding-top: 0rem;
  padding-bottom: 1.8rem;
  width: 100%;
  text-align: left;
  font-size: 2rem;
  font-family: 'Pixelpalm Pro';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
}
@media only screen and (max-width: 1200px) {
    .subtotal-checkout-root {
        border-top: none;
        padding-top: 1rem;
    }
    .total {
        padding-top:0rem;
        width: calc(100vw - 2rem);
        text-align: left;
        padding-left: 0;
        margin: 0;
        font-size: 2rem;
        padding-left: 2rem;
        padding-bottom: 20rem;
        margin-top: -1rem;
    }
}
</style>
