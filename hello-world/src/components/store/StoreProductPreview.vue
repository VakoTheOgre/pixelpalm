<script>
export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  }
}
</script>


<template>
  <router-link tag="div" :to="`/shop/${product.category}/${product._id}`" class="product-wrapper flex center">
    <!-- <img :src="product.images[0]" alt="img" class="photo"> -->
    {{ product.name }}
  </router-link>
</template>

<style lang="scss" scoped>
.product-wrapper {
  padding: 0;
  margin: 0;
  height: 100%;
  color: white;
}

</style>