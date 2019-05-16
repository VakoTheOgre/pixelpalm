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
        <span class="subtotal">SUBTOTAL: ${{ subtotal }}.00 </span>
        <span class="total">ORDER TOTAL: ${{ subtotal }}.00 </span>
    </div>
</template>

<style lang="scss" scoped>
.subtotal-checkout-root {
    border-top: 0.2rem solid black;
    padding-top: 4rem;
    width: 27rem;
}
.subtotal {
  width: 100%;
  text-align: left;
  font-size: 1.6rem;
}
.total {
  padding-top: 1rem;
  width: 100%;
  text-align: left;
  font-size: 1.6rem;
}
@media only screen and (max-width: 1200px) {
    .subtotal-checkout-root {
        border-top: none;
        padding-top: 1rem;
    }
    .subtotal {
        width: calc(100vw - 2rem);
        text-align: right;
        font-size: 1.6rem;
    }
    .total {
        padding-top: 0.5rem;
        width: calc(100vw - 2rem);
        text-align: right;
        font-size: 1.6rem;
    }
}
</style>
