<script>
export default {
  computed: {
    products() {
      if (this.$route.params.category) {
        return this.$store.getters['products/getAllProducts'].filter(product => (
          product.subcategory.toLowerCase() === this.$route.params.category.toLowerCase()
        ))
      } else {
        return this.$store.getters['products/getAllProducts']
      }
    }
  },

}
</script>


<template>
  <div class="whole-store">
    <router-link tag="div" :to="`/shop/${product.subcategory.toLowerCase()}/${product._id}`"
                  :key="index" v-for="(product, index) in products">
        <img :src="product.images[0]" alt="img" class="photo pointer">
    </router-link>
  </div>
</template>


<style lang="scss" scoped>
.whole-store {
  min-width: 144rem;
  display: grid;
  grid-template-columns: 24rem 24rem 24rem 24rem 24rem 24rem;
  column-gap: 1.6rem;
  grid-row-gap: 1.6rem;
  grid-auto-rows: 24rem;
  margin-left: 3.5rem;
  margin-top: 12.6rem;
}
.store-item {
  // background-color: black;
  border: 0.1rem solid black;
  width: 24rem;
  height: 24rem;
  margin: 0;
  padding: 0;
}
.photo {
    // background-color: black;
    border: 0.1rem solid black;
    width: 24rem;
    height: 24rem;
    margin: 0;
    padding: 0;
}
@media only screen and (max-width: 1200px) {
  .whole-store {
    min-width: 32rem;
    display: grid;
    grid-template-columns: calc(50vw - 1.5rem) calc(50vw - 1.5rem);
    column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-auto-rows: calc(50vw - 1.5rem);
    margin-left: 0.9rem;
    margin-right: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .photo {
    // background-color: black;
    // border: 0.1rem solid black;
    width: calc(50vw - 1.25rem);
    height: auto;
    margin: 0;
    padding: 0;
  }
}
</style>