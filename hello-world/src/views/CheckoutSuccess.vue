<script>
export default {
  async mounted () {
    if (!this.$route.params.token) {
      this.$router.push('/404')
    }

    try {
      let res = await this.$axios.get(`/shop/confirm/${this.$route.params.token}`)
      this.success = true
    } catch (e) {
      this.$router.push('/404')
    }
  },

  data () {
    return {
      success: false
    }
  }
}
</script>

<template>
  <div v-if="success" class="succ">
    SUCCESS!!!!
  </div>
</template>

<style>
  .succ {
    font-size: 26px;
    color: limegreen;
  }
</style>

