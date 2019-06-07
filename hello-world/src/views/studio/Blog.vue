<script>
export default {
    

    computed: {
        blogs () {
            return this.$store.getters['blogs/blogs']
        }
    }
}
</script>

<template>
    <div class="blog-root flex center">
        <span v-if="this.device == 'desktop'" class="heading">BLOG</span>
        <div class="blog-grid flex JF-spaceBE AL-spaceBE">
            <div @click="$router.push(`/studio/blog/${blog._id}`)" v-for="(blog, index) in blogs" :key="index" class="mobile-wrap">
                <img :src="blog.images[0]" class="blog-img pointer">
                <span v-html="blog.title" class="blog-title"></span>
                <p v-html="blog.text" class="blog-desc"></p>
            </div>
        </div>
    </div>
</template>

<style lang='scss' scoped>

.blog {
    &-root {
        min-width: calc(100vw - 33rem);
        min-height: 100vh;
        position: static;
    }
    &-grid {
        max-width: 116rem;
        min-width: 116rem;
        flex-wrap: wrap;
        position: absolute;
        top: 25%;
        left: 50%;
        transform: translateX(-50%);
        margin-left: 16.5rem;
    }
    &-img {
        width: 36rem;
        height: 36rem;
    }
    &-title {
        width: 36rem;
        height: 4rem;
        text-align: left;
        padding-left: 1rem !important;
    }
    &-desc {
        width: 36rem;
        height: 14rem;
        padding: 1rem;
    }
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
@media only screen and (max-width: 1200px) {
.mobile-wrap {
    max-width: calc(50% - 0.5rem);
    margin-bottom: 1rem;
}
.blog {
    &-root {
        max-width: calc(100vw - 2rem);
        min-height: auto;
        position: static;
        margin-left: 1rem;
        margin-top: 8.2rem;
        }
        &-grid {
            max-width:100%;
            min-width: auto;
            flex-wrap: wrap;
            position: static;
            transform: translateX(0);
            margin-left: 0;
        }
        &-img {
            width: 100%;
            height: auto;
        }
        &-title {
            width: 100%;
            height: 4rem;
            text-align: left;
            padding-left: 1rem !important;
            border: 0.1rem solid black;
        }
        &-desc {
            width: 100%;
            height: 12rem;
            padding: 1rem;
            border: 0.1rem solid black;
        }
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
}
</style>