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
            this.$store.commit("accountIcon/setCrumbs", ['CART'])
        }
    }
}
</script>

<template>
    <div @click="openCart" class="root-btn pointer flex center">
        <span class="btn-text">SHOW CART</span>
    </div>
</template>

<style lang="scss" scoped>
.root-btn {
  margin-top: 3rem !important;
  background-color: white;
  width: 27rem;
  outline: 0.2rem solid black;
  height: 4rem;
  padding: 0 !important;
  margin-top: 0rem !important;
  outline-offset: -0.2rem;
  margin-bottom: 2rem !important;
  opacity: 0.9;
  font-size: 2rem;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
@media only screen and (max-width: 1200px) {
    .root-btn {
        width: calc(100vw - 2rem);
        margin-top: 0rem !important;
        color: black;
        background-color: white;
        outline-offset: -0.2rem;
        outline: 0.2rem solid black;
        height: 4rem;
    }
    
}
</style>
