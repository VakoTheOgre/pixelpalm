<script>
export default {
    data () {
        return {
            verified: false
        }
    },

    async mounted () {
        try {
            let res = await this.$axios.get(`/user/verify/${this.$route.params.token}`)
            this.verified = true
        } catch(e) {
            this.$router.push('/404')
        }
    }
}
</script>

<template>
    <div v-if="verified" class="root-confirm flex center">
        <span>Your account has been verified successfully</span>
    </div>
</template>

<style lang='scss' scoped>
.root-confirm {
  width: 100%;
  height: 100%;
  margin-left: 33rem;
  margin-top: 40rem;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
  font-size: 4rem;
}
@media only screen and (max-width: 1200px) {
  .root-confirm {
    margin-left: 1rem;
    max-width: calc(100vw - 2rem);
    width: calc(100vw - 2rem);
    margin-top: 10rem;
    height: auto;
    font-size: 2rem;
  }
}
</style>