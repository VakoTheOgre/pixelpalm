
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
</style>
