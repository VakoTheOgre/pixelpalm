<script>
import Cookie from 'js-cookie'
export default {
  data() {
    return {
      syncProducts: []
    }
  },

  async created() {
    try {
      let adminRes = await this.$http.post('/admin/me',{}, { headers: 
            { 'Authorization': `Bearer ${Cookie.get('token')}`}
          })
      if(!adminRes.data.isAdmin) {
        this.$router.push("/404")
      }
    } catch(e) {
      this.$router.push("/404")
    }
    try {
      let res = await this.$http.get('/admin/products', {headers: { 'Authorization': `Bearer ${Cookie.get('token')}` } })
      // this.syncProducts = res.data.products.filter(product => !product.category || !product.subcategory) 
      this.syncProducts = res.data.products
    } catch(e) {
      console.log(e)
    }
  }
}
</script>


<template>
  <ul>
    ></>
  </ul>
</template>


<style scoped>
</style>