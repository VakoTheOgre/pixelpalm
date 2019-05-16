<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        cartState() {
           return this.$store.getters['cartIcon/cartState']
        }
    },
    methods: {
        openCart() {
            this.$store.commit('cartIcon/open')
            this.$store.commit("exploreIcon/close")
            this.$store.commit("searchIcon/close")
            this.$store.commit("accountIcon/close")
            this.$store.commit("menuIcon/close")
            this.$store.commit("legalsIcon/close")
        }
    }
}
</script>

<template>
    <div @click="openCart" class="root-btn pointer flex center">
        <img  src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/view-cart.svg" >
    </div>
</template>

<style lang="scss" scoped>
.root-btn {
  margin-top: 3rem !important;
  background-color: black;
  width: 27rem;
  height: 3rem;
  padding: 0 !important;
  margin-top: 0rem !important;
  margin-bottom: 2rem !important;
  opacity: 0.9;
}
@media only screen and (max-width: 1200px) {
    .root-btn {
        width: calc(100vw - 2rem);
        margin-top: 0rem !important;
        
    }
}
</style>
