export default {
    computed: {
      isHome() {
        if(this.$route.name === 'home') {
          return true
        } else {
          return false
        }
      }
    }
  }
  