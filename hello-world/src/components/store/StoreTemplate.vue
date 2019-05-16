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
  }
}
</script>


<template>
  <div :class="{ marginTop: $route.name != 'home', marginTopDesk: this.device == 'desktop' }" class="whole-store">
    <router-link tag="div" :to="`/shop/${product.subcategory.toLowerCase()}/${product._id}`"
                  :key="index" v-for="(product, index) in products">
        <img :src="product.images[0]" alt="img" class="photo pointer">
    </router-link>
  </div>
</template>


<style lang="scss" scoped>
@media only screen and (max-width: 1200px) {
  .marginTop {
    margin-top: 8.8rem !important; 
  }
}
@media only screen and (min-width: 1200px) {
  .marginTopDesk {
    margin-top: 12.8rem !important; 
  }
}
.whole-store {
  min-width: 144rem;
  display: grid;
  grid-template-columns: calc(50vw - 1.8rem) calc(50vw - 1.8rem);
  column-gap: 1rem;
  grid-row-gap: 1rem;
  grid-auto-rows: calc(50vw - 1.8rem);
  margin-left: 3.2vw;
  margin-top: 1rem;
  margin-bottom: 1.6rem;
}
.store-item {
  // background-color: black;
  // border: 0.1rem solid black;
  
  margin: 0;
  padding: 0;
}
.photo {
    // background-color: black;
    border: 0.1rem solid black;
    width: calc(50vw - 1.6rem);
    height: auto;
    margin: 0;
    padding: 0;
}
@media only screen and (min-width: 580px) {
  .whole-store {
    min-width: 32rem;
    display: grid;
    grid-template-columns: calc(33vw - 1.5rem) calc(33vw - 1.5rem) calc(33vw - 1.5rem);
    column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-auto-rows: calc(33vw - 1.5rem);
    margin-left: 2.3vw;
    margin-right: 2rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .photo {
    // background-color: black;
    // border: 0.1rem solid black;
    width: calc(33vw - 1.25rem);
    height: auto;
    margin: 0;
    padding: 0;
  }
}
@media only screen and (min-width: 1023px) {
  .whole-store {
    min-width: 32rem;
    display: grid;
    grid-template-columns: calc(50vw - 1.5rem) calc(50vw - 1.5rem);
    column-gap: 1rem;
    grid-row-gap: 1rem;
    grid-auto-rows: calc(50vw - 1.5rem);
    margin-left: 2.4vw;
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
@media only screen and (min-width: 1024px) {
  .whole-store {
    min-width: 32rem;
    display: grid;
    grid-template-columns: calc(22vw - 1.5rem) calc(22vw - 1.5rem) calc(22vw - 1.5rem) calc(22vw - 1.5rem);
    column-gap: 0.7rem;
    grid-row-gap: 0rem;
    grid-auto-rows: calc(22vw - 0.7rem);
    margin-left: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
  }
  .photo {
    // background-color: black;
    // border: 0.1rem solid black;
    width: calc(22vw - 1.5rem);
    height: auto;
    margin: 0;
    padding: 0;
  }
}
@media only screen and (min-width: 1200px) {
  .whole-store {
    min-width: 32rem;
    display: grid;
    grid-template-columns: calc(16vw - 1.5rem) calc(16vw - 1.5rem) calc(16vw - 1.5rem) calc(16vw - 1.5rem) calc(16vw - 1.5rem);
    column-gap: 1rem;
    grid-auto-rows: calc(16vw - 0.5rem);
    margin-left: 1vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .photo {
    // background-color: black;
    // border: 0.1rem solid black;
    width: calc(17vw - 3.6rem);
    height: auto;
    margin: 0;
    padding: 0;
  }
}
@media only screen and (min-width: 1280px) {
  .whole-store {
    min-width: 32rem;
    display: grid;
    grid-template-columns: calc(16vw - 1rem) calc(16vw - 1rem) calc(16vw - 1rem) calc(16vw - 1rem) calc(16vw - 1rem);
    column-gap: 1rem;
    grid-auto-rows: calc(16vw - 0.3rem);
    margin-left: 1.3vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .photo {
    // background-color: black;
    // border: 0.1rem solid black;
    width: calc(17vw - 3.6rem);
    height: auto;
    margin: 0;
    padding: 0;
  }
}
@media only screen and (min-width: 1366px) {
  .whole-store {
    min-width: 32rem;
    display: grid;
    grid-template-columns: calc(16vw - 1rem) calc(16vw - 1rem) calc(16vw - 1rem) calc(16vw - 1rem) calc(16vw - 1rem);
    column-gap: 1rem;
    grid-auto-rows: calc(16vw - 0rem);
    margin-left: 2.3vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .photo {
    // background-color: black;
    // border: 0.1rem solid black;
    width: calc(17vw - 3.6rem);
    height: auto;
    margin: 0;
    padding: 0;
  }
}
@media only screen and (min-width: 1580px) {
  .whole-store {
    min-width: 32rem;
    display: grid;
    grid-template-columns: calc(17vw - 3rem) calc(17vw - 3rem) calc(17vw - 3rem) calc(17vw - 3rem) calc(17vw - 3rem);
    column-gap: 1.8rem;
    grid-auto-rows: calc(17vw - 1.2rem);
    margin-left: 2vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .photo {
    // background-color: black;
    // border: 0.1rem solid black;
    width: calc(17vw - 3rem);
    height: auto;
    margin: 0;
    padding: 0;
  }
}
@media only screen and (min-width: 1820px) {
  .whole-store {
    min-width: 32rem;
    display: grid;
    grid-template-columns: calc(17vw - 3rem) calc(17vw - 3rem) calc(17vw - 3rem) calc(17vw - 3rem) calc(17vw - 3rem);
    column-gap: 1.8rem;
    grid-auto-rows: calc(17vw - 1.2rem);
    margin-left: 2.4vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .photo {
    // background-color: black;
    // border: 0.1rem solid black;
    width: calc(17vw - 3rem);
    height: auto;
    margin: 0;
    padding: 0;
  }
}
@media only screen and (min-width: 1920px) {
  .whole-store {
    min-width: 32rem;
    display: grid;
    grid-template-columns: calc(14vw - 4rem) calc(14vw - 4rem) calc(14vw - 4rem) calc(14vw - 4rem) calc(14vw - 4rem) calc(14vw - 4rem)  ;
    column-gap: 2rem;
    grid-auto-rows: calc(14vw - 2rem);
    margin-left: 2.6vw;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .photo {
    // background-color: black;
    // border: 0.1rem solid black;
    width: calc(14vw - 3rem);
    height: auto;
    margin: 0;
    padding: 0;
  }
}
</style>