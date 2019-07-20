<script>
export default {
  metaInfo: {
        title: 'PixelPalm',
        // override the parent template and just use the above title only
        titleTemplate: '%s - Legal Area'
      }

}
</script>


<template>
<div  class="text-root flex root center">
  <span v-if="this.device == 'desktop'" class="heading">LEGAL</span>
  
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
  top: 8.6rem;
  left: 50%;
	margin-left: 16.5rem;
  transform: translateX(-50%);
  border-bottom: 0.2rem solid black;
  padding: 1rem;
  line-height: 2.2 !important;
}
.text-root {
  min-width: calc(100vw - 33rem);
}
.text-block {
  padding-right:2rem;
  padding-left:2rem;
  padding-bottom:2rem;
  width: 86rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  margin-left: 16.5rem;
  text-align: justify;
  // margin-left: 33rem;
  font-size: 2rem;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
@media only screen and (max-width: 1200px) {
  .text-root {
    width: calc(100vw - 2rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .text-block {
    padding-right: 0;
    padding-left: 2rem;
    padding-bottom: 2rem;
    font-size: 1rem;
    padding-top: 10rem;
    width: 100vw;
    position: static;
    text-align: justify;
    top: 0;
    left: 0;
    transform: translateX(0);
    overflow: hidden; 
    margin-left: 0;
  }

}
</style>