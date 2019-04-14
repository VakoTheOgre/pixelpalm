<script>
import Cookie from 'js-cookie'
import sidebar from '@/components/navigation/SideBar'
export default {
  components: {
    sidebar
  },
  async mounted () {
    try {
      let res = await this.$axios.post('/auth/login', {
        email: 'keemo@gmail.com',
        password: '135426'
      })
      Cookie.set('token', res.data.token)
      await this.$store.dispatch('products/getAllProducts')
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<template>
  <div id="app" class="flex">
    <sidebar></sidebar>
    
    <router-view/>
  </div>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
html {
  font-size: 62.5%;
}
</style>
