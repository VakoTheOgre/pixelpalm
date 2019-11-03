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
    <div class="subtotal-checkout-root flex ">
        <!-- <span class="subtotal">SUBTOTAL: ${{ subtotal }}.00 </span> -->
        <span class="total flex AL-center">Order Total:</span>
        <span class="num flex AL-center"> ${{ subtotal }}</span>
    </div>
</template>

<style lang="scss" scoped>
.subtotal-checkout-root {
    border-top: 0.2rem solid black;
    padding-top: 1rem;
    padding-bottom: 0.6rem;
    margin: 0;
    width: 42rem;
    margin-left: 100%;
    transform: translateX(-100%);
    justify-content: flex-end;
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
        border-top: none;
        margin-top: -2rem;
        padding-bottom: 3rem;
        padding-right: 1rem;
        width: calc(100vw - 2rem);
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
</style>
