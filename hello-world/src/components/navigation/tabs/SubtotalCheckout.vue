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
.subtotal {
  width: 100%;
  font-size: 2rem;
  text-align: left;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
}
.total {
  padding-top: 0rem;
  padding-bottom: 4.2rem;
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
    .subtotal {
        width: calc(100vw - 2rem);
        text-align: right;
        font-family: 'Pixelpalm-text';
        text-rendering: geometricPrecision;
        font-smooth: never;
        -webkit-font-smoothing: none;
    }
    .total {
        padding-top: 0.5rem;
        width: calc(100vw - 2rem);
        text-align: right;
        font-size: 1.6rem;
    }
}
</style>
