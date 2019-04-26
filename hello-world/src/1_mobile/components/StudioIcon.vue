<script>
export default {
computed: {
    exploreState() {
        return this.$store.getters['exploreIcon/exploreState']
    },
    exploreIcon() {
        if(!this.exploreState) {
        let exploreIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/palmtree-icon.svg"

        return exploreIcon
        } else {
        let exploreIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/close-icon.svg"

        return exploreIcon
        }
    },
},
methods: {
    toggleExplore() {
        if(this.exploreState) {
        this.$store.commit("exploreIcon/close")
        } else {
        this.$store.commit("exploreIcon/open")
        this.$store.commit("menuIcon/close")
        this.$store.commit("searchIcon/close")
        this.$store.commit("accountIcon/close")
        this.$store.commit("cartIcon/close")
        this.$store.commit("legalsIcon/close")
        }
    },
}
}
</script>

<template>
<img @click="toggleExplore" :src="exploreIcon" alt="EXPLORE" class="pointer">
</template>

<style lang="scss" scoped>

</style>