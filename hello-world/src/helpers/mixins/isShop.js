export default {
    computed: {
      isShop() {
        if(this.$route.name === 'shop' || this.$route.name === 'shopCat' || this.$route.name === 'shopProd' || this.$route.name === 'checkout') {
          return true
        } else {
          return false
        }
      }
    }
  }
  