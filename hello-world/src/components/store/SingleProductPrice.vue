<script>
export default {
  props: {
    price: {
      type: String,
      required: true
    }
  }
}
</script>


<template>
    <span class="details-short flex AL-center"> ${{ price }} </span>
</template>


<style lang="scss" scoped>
.details-short {
      height: 4rem;
      width: 100%;
      margin-top: 2rem;
      margin-bottom: 2rem;
      user-select: none;
      // border:0.1rem solid black;
      text-align: left;
      font-size: 2rem;
      padding-top: 0.4rem;
      font-family: 'Pixelpalm-text';
      text-rendering: geometricPrecision;
      font-smooth: never;
      -webkit-font-smoothing: none;
}
@media only screen and (max-width: 1200px) {
    .details-short {
      height: 4rem;
      width: auto;
      font-size: 3rem;
      margin-top: 0;
      margin-bottom: 0;
      user-select: none;
      border:none;
      text-align: left;
    }
}
</style>
