<script>
export default {


}
</script>


<template>
<div class="root flex-col AL-center">
  <span class="title">SEARCH</span>
  <input type="text" placeholder="ENTER KEYWORD" class="search-input">
  <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/search-icon.svg" alt="" class="search-img">
</div>
</template>


<style lang="scss" scoped>
.root {
  background-color: white;
  height: calc(100vh - 17.2rem);
}
.search-input {
  height: 4rem;
  width: calc(100% - 6rem);
  font-size: 1.2rem;
  // margin-top: 6rem;
  border: 0.2rem solid black;
  &:enabled {
    padding-left: 1rem;
    &::placeholder {
      color: black;
    }
  }
}
.title {
  font-size: 1.8rem;
  width: calc(100% - 6rem);
  text-align: left;
  margin-top: 5rem;
  margin-bottom: 0.6rem;
}
.search-img {
  position: absolute;
  right: 3.5rem;
  top: 25.4rem;
}
</style>