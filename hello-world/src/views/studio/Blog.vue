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
    <div>
        <div @click="$router.push(`/studio/blog/${blog._id}`)" v-for="(blog, index) in blogs" :key="index">
            <span v-html="blog.title"></span>
        </div>
    </div>
</template>

<style lang='scss' scoped>

</style>