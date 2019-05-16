<script>
export default {
    data () {
        return {
            password: '',
            password2: '',
            error: '',
            verified: false
        }
    },

    methods: {
        async send () {
            if (this.password != this.password2) {
                this.error = "Passwords must match"
                return
            }
            try {
                let res = await this.$axios.put(`/user/reset/${this.$route.params.token}`, { password: this.password })
                this.error = res.data.message + ' redirecting shortly'
                setTimeout(() => {
                    this.$router.push('/')
                }, 3000)                
            } catch (e) {
                
                this.error = e.reponse.data.message
            }
        }
    },

    async mounted () {
        try {
            let res = await this.$axios.get(`/user/verifyReset/${this.$route.params.token}`)
            this.verified = true
        } catch (e) {
            this.$router.push('/404')
        }
    }
}
</script>

<template>
    <form v-if="verified">
        <input type="text" v-model="password">
        <input type="text" v-model="password2">
        <button @click.prevent="send">SEND</button>
        <span>{{ error }}</span>
    </form>
</template>