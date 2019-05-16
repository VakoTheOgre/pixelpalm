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
    <div v-if="verified">
        <span>Your account has been verified successfully</span>
    </div>
</template>

<style lang='scss' scoped>

</style>