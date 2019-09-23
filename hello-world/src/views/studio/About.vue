
<script>
export default {
    
    }
</script>

<template>
    <div class="form flex-col center">
      <span v-if="device == 'desktop'" class="heading">ABOUT</span>
      <span v-if="device == 'mobile'" class="headingMobile">ABOUT</span>
    </div>
</template>

<style lang="scss" scoped>
.heading {
	font-size: 2rem;
  position: absolute;
  width: 27rem;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
  text-align: center;
  top: 8.7rem;
  left: 50%;
	margin-left: 16.5rem;
  transform: translateX(-50%);
  border-bottom: 0.2rem solid black;
  line-height: 2 !important;
}
@media only screen and (max-width: 1200px) {
  .form {
    width: 100vw;
    justify-content: flex-start !important;
    background-color: white;
    height: auto;
    padding-bottom: 2rem;
    margin-top: 10rem;
    margin-left: 0;
  }
  .headingMobile {
    width: calc(100vw - 2rem) ;
    text-align: left;
    margin-bottom: 1rem;
    margin-top: 0 !important;
    font-size: 1.5rem !important;
    font-family: 'Pixelpalm-category-font';
    font-smooth: never;
    -webkit-font-smoothing : none;
  }
}

</style>
