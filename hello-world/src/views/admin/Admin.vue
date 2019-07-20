<script>
import Cookie from 'js-cookie'
import AdminSideBar from '@/components/admin-navigation/AdminSideBar'
import AdminProductsList from '@/components/admin-navigation/admin-tabs/AdminProductsList'
import AdminProductTemplate from '@/components/admin-navigation/admin-tabs/AdminProductTemplate'
import AdminBlogs from '@/components/admin-navigation/admin-tabs/AdminBlogs'
import AdminSliders from '@/components/admin-navigation/admin-tabs/AdminSliders'
import AdminBlogEdit from '@/components/admin-navigation/admin-tabs/AdminBlogEdit'
import AdminNewBlog from '@/components/admin-navigation/admin-tabs/AdminNewBlog'
import axios from '@/main.js'
export default {
  components: {
    AdminSideBar,
    AdminProductsList,
    AdminProductTemplate,
    AdminBlogs,
    AdminBlogEdit,
    AdminNewBlog,
    AdminSliders
  },


  async beforeRouteEnter (to, from, next) {
    try {
      let adminRes = await axios.post('/admin/me',{}, { headers: 
            { 'Authorization': `Bearer ${Cookie.get('token')}`}
          })
      if(!adminRes.data.isAdmin) {
        next("/404")
      }
    } catch(e) {
      next("/404")
    }
    next()
  },

  async created() {
    this.$store.dispatch('admin/getProducts')
  },
  computed: {
    currentComponent() {
      return this.$store.getters["admin/component"]
    }
  }
}
</script>

<template>
  <div class="root flex">
    <admin-side-bar></admin-side-bar>
    <component :is="currentComponent"></component>
  </div>
</template>

<style lang="scss" scoped>

</style>