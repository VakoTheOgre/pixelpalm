<script>
export default {
computed: {
  legalsState() {
      return this.$store.getters['legalsIcon/legalsState']
  },
  legalsIcon() {
    if(!this.legalsState) {
      let legalsIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/gray-area-icon.svg"

      return legalsIcon
    } else {
      let legalsIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/close-icon.svg"

      return legalsIcon
    }
  }
},
methods: {
  toggleLegals() {
      if(this.legalsState) {
        this.$store.commit("legalsIcon/close")
      } else {
        this.$store.commit("legalsIcon/open")
        this.$store.commit("exploreIcon/close")
        this.$store.commit("searchIcon/close")
        this.$store.commit("accountIcon/close")
        this.$store.commit("menuIcon/close")
        this.$store.commit("cartIcon/close")
      }
    }
}
}
</script>

<template>
<img @click="toggleLegals" :src="legalsIcon" alt="Grayarea-icon" class="pointer">
</template>

<style lang="scss" scoped>

</style>