<script>
import Cookie from 'js-cookie'
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

      async deleteBlog(blog) {
          try {
              await this.$axios.delete(`blog/${blog._id}`, { headers: { 'Authorization': `Bearer ${Cookie.get('token')}` }})
              await this.getBlogs()
          } catch(e) {
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
    <button style="position: absolute; left: 25%; top: 6rem; padding: 3rem;" @click="newPost">NEW POST</button>
    <div class="blog-admin-container flex-col ">
      <span v-for="(blog, i) in blogs" :key="i" class="single-blog flex AL-center JF-spaceBE"> {{ blog.title }} 
                                                                    <span @click="editBlog(blog)" class="edit-blog pointer">EDIT</span>
                                                                    <span @click="deleteBlog(blog)" class="delete-blog pointer">DELETE</span>
      </span>
      
    </div>
  </div>
</template>

<style lang="scss" scoped>
.blog-admin-container {
  margin-top: 5rem;
  width: 56rem;
  margin-left: 50%;
  transform: translateX(-50%)
}
.single-blog {
  height: 4rem; 
  margin-top: 2rem;
  border: 0.2rem solid black;
  padding-left: 2rem;
}
.edit-blog {
  padding: 1rem;
  background-color: gray;
  
}
.delete-blog {
  padding: 1rem;
  background-color: red;
}
</style>
