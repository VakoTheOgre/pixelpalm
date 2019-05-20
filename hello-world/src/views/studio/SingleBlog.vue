<script>
export default {
    data () {
        return {
            blog: null,
            currentImage: 0
        }
    },
    
    async mounted () {
        try {
            const res = await this.$axios.get(`/blog/${this.$route.params.id}`)
            this.blog = res.data.blog
        } catch (e) {
            this.$router.push('/404')
        }
    }

}
</script>

<template>
    <div v-if="blog" class="form flex-col center">
        <span class="heading">BLOG</span>
        <div class="blog-box flex-col">
        <span v-html="blog.title" class="title"></span>

            <div class="carousel-wrap">
                <carousel id="carousela" @page-change="function (e) { currentImage = e }" :per-page="1" :autoplay="false" :autoplayHoverPause="false" :mouseDrag="true" :touchDrag="true"  :loop="false" :paginationEnabled="false" :value="currentImage">

                        <slide :key="`image-${index}`" v-for="(image, index) in blog.images" class="image-wrapper">
                            <img :src="image" class="carousel">
                        </slide>
v
                </carousel>
                <div class="carousel-navigation flex JF-spaceBE">
                    <div :key="index" @click="currentImage = index" v-for="(thumbnail, index) in blog.images" class="carousel-navigation_dot" :class="{'active-image': currentImage === index}">.</div>
                </div>
            </div>
            <p v-html="blog.text" class="paragraph"></p>
        </div>
    </div>
</template>

<style lang='scss' scoped>
.lowOpacity {
  opacity: 0.8;
}
  .carousel-navigation_dot.active-image {
    opacity: 1;
  }
.form {
	min-width: calc(100vw - 33rem);
}
.title {
    width: 86rem;
    text-align: left;
    padding-left: 1rem;
    height: 4rem;
    font-family: 'Pixelpalm Pro';
    text-rendering: geometricPrecision;
    font-smooth: never;
	-webkit-font-smoothing: none;
    position: absolute;
    font-size: 1.5rem;
    top: -3.8rem;
    left: 0;
}
.paragraph {
    padding-right:2rem;
  padding-left:2rem;
  padding-bottom:2rem;
  margin-top: 1.6rem;
  max-width: 100%;
  text-align: justify;
  font-size: 2rem;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
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
  line-height: 1;
}
.blog-box {
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
    border: 0.1rem solid black;
}
#carousela {
    width: 86rem;
    height: 56rem;
    border: 0.1rem solid black;
  }
  .carousel-wrap {
    position: relative;
    width: 86rem;
    height: 56rem;
  }
  .carousel {
    width: 86rem;
    height: 56rem;
    // border: 0.1rem solid black;
    &-navigation {
      position: absolute;
      left: 50%;
      bottom: 0.6rem;
      transform: translate(-50%, -50%);
      margin-left: 1rem;
      // z-index: 3;
      z-index: 3;
      &_dot {
        margin-right: 1rem;
        background-color: black;
        height: 1rem;
        width: 1rem;
        opacity: 0.5;
        cursor: pointer;
        user-select: none;
        color: transparent;
      }
    } 
  }
  @media only screen and (max-width: 1200px) {
    .carousel-navigation_dot.active-image {
    opacity: 1;
  }
}
</style>