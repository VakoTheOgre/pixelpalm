<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      product: null,
      selectedVariant: null,
      addedToCart: false,
      error: ''
    }
  },
  computed: {
    // ...mapGetters({
    //   cart: 'cart/getCart'
    // }),

    price() {
      if(!this.selectedVariant) {
        return 'SELECT A SIZE'
      } else {
        return this.selectedVariant.price
      }
    }
  },

  methods: {
    async getProduct() {
      try {
        let res = await this.$axios.get(`/shop/products/${this.$route.params.id}`)
        this.product = res.data.product
        // this.checkCart(this.product)
      } catch (e) {
        
        this.$router.push('/404')
      }
    },

    changeVariant(variant) {
      this.selectedVariant = variant
    },

    addToCart() {
      if(!this.selectedVariant) {
        this.error = 'Please select a size first'
        return
      }
      // this.$store.commit('cart/addToCart', {
      //   product: this.product,
      //   variant: this.selectedVariant
      // })
      this.addedToCart = true
    },
    checkout() {

    },

    checkCart(product) {
      this.cart.forEach((item, index, cart) => {
        console.log(check(product._id, item.product._id))
        if(check(product._id, item.product._id)) {
          this.addedToCart = true
          return
        } else if(!check(product._id, item.product._id) && index == cart.length - 1) {
          this.addedToCart = false
        }
      })
    }
  },
  
  created() {
    this.getProduct()
  }

}
</script>


<template> 
  <div class="wrapper">
    
  </div>
</template>


<style lang="scss" scoped>

</style>