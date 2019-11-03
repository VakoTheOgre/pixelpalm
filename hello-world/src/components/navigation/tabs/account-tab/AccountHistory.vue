<script>
export default {

  // computed: {
  //   orders () {
  //     return this.$store.getters['auth/history']
  //   }
  // },

  async mounted () {
    try {
      await this.$store.dispatch('auth/getHistory')
    } catch (e) {
      console.log(e)
    }
  }
}
</script>

<template>
<div class="root">...</div>
</template>

<style lang='scss' scoped>

</style>
