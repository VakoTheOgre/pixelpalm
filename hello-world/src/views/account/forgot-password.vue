<script>
export default {
    data () {
        return {
            email: '',
            error: ''
        }
    },

    methods: {
        async send () {
            try {
                let res = await this.$axios.post(`/user/reset`, { email: this.email })
                this.error = res.data.message                
            } catch (e) {
                this.error = e.reponse.data.message
            }
        }
    }
}
</script>
<template>
    <form>
        <input type="text" v-model="email">
        <button @click.prevent="send">SEND</button>
        <span>{{ error }}</span>
    </form>
</template>
<style>

</style>
