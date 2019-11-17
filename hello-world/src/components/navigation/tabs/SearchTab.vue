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

      clicked(item) {
        this.$router.push(`/shop/${item.subcategory.toLowerCase()}/${item._id}`)
        this.$store.commit("menuIcon/close")
        this.$store.commit("exploreIcon/close")
        this.$store.commit("searchIcon/close")
        this.$store.commit("accountIcon/close")
        this.$store.commit("cartIcon/close")
        this.$store.commit("legalsIcon/close")
        this.$store.commit("accountIcon/setCrumbs", null)
        this.form.reset()
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
    <div tag="div" @click="clicked(item)" v-for="(item, index) in filteredItems"  :key="index" class="item flex pointer AL-center">
      <img :src="item.images[0]" class="thumb">
        <span style="margin-top: 0.2rem;">{{ item.name }}</span>
    </div>
  </div>
</div>
</template>


<style lang="scss" scoped>
input {
  height: 4rem !important;
}
input::placeholder {
  font-size: 2rem;
  color: gray;
  line-height: 1.3333 !important; 
  opacity: 0.5;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
}
input:enabled {
  padding-left: 1rem !important;
  padding-top: 0.6rem !important;
  line-height: 2.2 !important; 
}
@media only screen and (max-width: 1200px) {
  input:enabled {
    padding-top: 0.8rem;
  }
}
.thumb {
  height: 3.9rem;
  width: 3.9rem;
  margin-right: 1rem;
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
  z-index: 2;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
}
.item {
  width: 27rem;
  height: 4rem;
  font-size: 2rem;
  color: black;
  border-bottom: 0.1rem solid black;
  border-right: 0.1rem solid black;
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
  width: calc(100% - 6rem);
  font-size: 2rem;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
  color: black;
  // margin-top: 6rem;
  border: 0.2rem solid black;
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