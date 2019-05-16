<script>
export default {
  

}
</script>


<template>
<div class="root flex-col AL-center">
  <span class="title">SEARCH</span>
  <input type="text" placeholder="Enter Keyword" class="search-input">
  <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/search-icon.svg" alt="" class="search-img pixecon">
</div>
</template>


<style lang="scss" scoped>
.root {
  background-color: white;
  min-height: calc(100vh - 12.8rem);
  width: 33rem;
  position: absolute;
  top: 12.8rem;
  left: 0;
}
.search-input {
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