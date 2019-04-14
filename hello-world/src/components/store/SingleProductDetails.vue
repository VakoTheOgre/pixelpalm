<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
  }

}
</script>


<template>
  <div class="details-wrapper flex">
    <div class="price-title-wrapper flex-col">
      <div class="title flex center">
        {{title}}
      </div>
      <div class="price flex center">
        {{price}}
      </div>
    </div>
    <div class="artist-sign" style="background-color: blue;">

    </div>
  </div>
</template>


<style lang="scss" scoped>
.details-wrapper {
  width: calc(100% - 2rem);
  height: 6rem;
  flex-direction: row;
  margin-left: 1rem;
  margin-top: 0.7rem;
}
.price-title-wrapper {
  width: 50%;
}
.title,
.price {
  height: 50%;
}
.artist-sign {
  height: 100%;
  width: 50%;
}
</style>