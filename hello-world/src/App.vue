<script>
import Cookie from 'js-cookie'
import sidebar from '@/components/navigation/SideBar'
import ViewportListener from '@/helpers/mixins/ViewportListener.js'
import Navbar from '@/1_mobile/components/Navbar'
export default {
  components: {
    sidebar,
    Navbar
  },
  mixins: [ViewportListener],
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
  <div id="app">
    <sidebar v-if='device == "desktop"'></sidebar>
    <navbar v-if='device == "mobile"'></navbar>
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
