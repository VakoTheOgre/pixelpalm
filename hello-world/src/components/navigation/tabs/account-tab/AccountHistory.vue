<script>
export default {

  computed: {
    orders () {
      return this.$store.getters['user/history']
    }
  },

  async mounted () {
    try {
      await this.$store.dispatch('user/getHistory')
    } catch (e) {

    }
  }
}
</script>

<template>

</template>

<style lang='scss' scoped>

</style>
