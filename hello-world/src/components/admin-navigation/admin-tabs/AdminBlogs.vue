<script>
export default {
    methods: {
      newPost () {
        this.$store.commit('admin/component', 'admin-new-blog')
      },

      async getBlogs () {
        try {
          let res = await this.$axios.get('/blog')
          this.blogs = res.data.blogs
        } catch (e) {
          console.log(e)
        }
      },

      editBlog(blog) {
        this.$store.commit('admin/component', 'admin-blog-edit')
        this.$store.commit('admin/blog', blog)
      }
    },

    data () {
      return {
        blogs: []
      }
    },

    mounted () {
      this.getBlogs()
    }

}
</script>

<template>
  <div>
    <button @click="newPost">NEW POST</button>
    <div>
      <span @click="editBlog(blog)" v-html="blog.title" v-for="(blog, i) in blogs" :key="i"></span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    
</style>
