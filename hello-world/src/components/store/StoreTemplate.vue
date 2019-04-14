<script>
import StoreProductPreview from '@/components/store/StoreProductPreview'
export default {
  components: {
    StoreProductPreview
  },
  computed: {
    products() {
      return this.$store.getters['products/getAllProducts']
    }
  },
}
</script>


<template>
<div class="whole-store">
  <div :key="index" v-for="(product, index) in products" class="store-item pointer">
    <store-product-preview :product="product"></store-product-preview>
  </div>
</div>
</template>


<style lang="scss" scoped>
.whole-store {
  min-width: 144rem;
  display: grid;
  grid-template-columns: 24rem 24rem 24rem 24rem 24rem 24rem;
  column-gap: 1.6rem !important;
  grid-row-gap: 1.6rem;
  grid-auto-rows: 24rem;
  margin-left: 3.5rem;
  margin-top: 10rem;
}
.store-item {
  background-color: black;
  width: 24rem;
  height: 24rem;
  margin: 0;
  padding: 0;
}

</style>