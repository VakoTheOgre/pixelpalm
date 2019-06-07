<script>
export default {
  data() {
    return {
      filteredItems: [],
      itemRoute: ''
    }
  },
  methods: {
    search(e) {
        if (e.target.value == "") {
          this.filteredItems = []
          return
        }
        this.filteredItems = this.$store.getters['products/getAllProducts'].filter(product => {
          const matchesName = product.name.toLowerCase().includes(e.target.value.toLowerCase())
          let matchesColor = false
          let matchesCategory = false
          for (let variant of product.variants) {
            if (variant.color.toLowerCase().includes(e.target.value.toLowerCase())) {
              matchesColor = true
              break
            }
          }
          if (product.subcategory.toLowerCase().includes(e.target.value.toLowerCase())) {
            matchesCategory = true
            
          }
          if (matchesName || matchesColor || matchesCategory) {
            return true
            
          } else {
            return false
          }
        })
      },
      routeId (id) {
        this.itemRoute = '/shop/:category/' + `${id}`
      }
  }

}
</script>


<template>
<div class="root flex-col AL-center">
  <span class="title">SEARCH</span>
  <input @input="search" type="text" placeholder="Enter Keyword" class="search-input">
  <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/search-icon.svg" alt="" class="search-img pixecon">
  <div v-if="filteredItems.length" class="dropdown">
    <router-link tag="div" :to="routeId( item._id )"  v-for="(item, index) in filteredItems" :key="index" class="item flex pointer AL-center JF-spaceBE">
      <img :src="item.images[0]" class="thumb">
      {{ item.name }}
    </router-link>
  </div>
</div>
</template>


<style lang="scss" scoped>
.thumb {
  height: 3.8rem;
  width: 3.8rem;
}
.dropdown {
  max-height: 30rem;
  max-width: 27rem;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  top: 10.1rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 0.2rem solid black;
  border-top: none !important;
  z-index: 2;
}
.item {
  width: 27rem;
  height: 4rem;
  font-size: 2rem;
  padding-left: 1rem;
  color: black;
  border-bottom: 0.1rem solid black;
  opacity: 1;
  white-space: nowrap;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
  padding-right: 5rem;

}
.root {
  background-color: white;
  min-height: calc(100vh - 12.8rem);
  width: 33rem;
  position: absolute;
  top: 12.8rem;
  left: 0;
}
.search-input {
  position: relative;
  height: 4rem;
  width: calc(100% - 6rem);
  font-size: 2rem;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
  color: black;
  // margin-top: 6rem;
  border: 0.2rem solid black;
  &:enabled {
    padding-left: 1rem;
    &::placeholder {
      color: gray;
      font-family: 'Pixelpalm Pro-Input';
      text-rendering: geometricPrecision;
      font-smooth: never;
      -webkit-font-smoothing: none;
    }
  }
}
.title {
  width: calc(100% - 6rem);
  text-align: left;
  padding-top: 3rem;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  font-family: 'Pixelpalm-category-font';
  font-smooth: never;
	-webkit-font-smoothing : none;
}
.search-img {
  position: absolute;
  right: 3.5rem;
  top: 6.6rem;
}
</style>