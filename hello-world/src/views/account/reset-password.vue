<script>
export default {
    data () {
        return {
            password: '',
            password2: '',
            error: '',
            verified: true
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

    // async mounted () {
    //     try {
    //         let res = await this.$axios.get(`/user/verifyReset/${this.$route.params.token}`)
    //         this.verified = true
    //     } catch (e) {
    //         this.$router.push('/404')
    //     }
    // }
}
</script>

<template>
    <form v-if="verified" class="root-reset flex-col center">
        <span v-if="this.device == 'desktop'" class="title">RESET PASSWORD</span>
        <input v-model="password" type="password" placeholder="Enter new password*" class="input">
        <input v-model="password2" type="password" placeholder="Confirm Password*" class="input">
        <button @click.prevent="send" class="btn pointer">SAVE PASSWORD</button>
        <span>{{ error }}</span>
    </form>
</template>

<style lang="scss" scoped>
.title {
  font-size: 2rem;
  position: fixed;
  white-space: nowrap;
  width: 36rem;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
  text-align: center;
  top: 8.6rem;
  margin-left: 33rem;
  left: calc(50% - 18rem);
  transform: translateX(-50%);
  border-bottom: 0.2rem solid black;
  padding: 1rem;
  line-height: 2.2 !important;
}
.root-reset {
  width: 100%;
  height: 100%;
  margin-left: 33rem;
  margin-top: 40rem;
}
.input {
  height: 4rem; 
  border: 0.2rem solid black;
  background-color: transparent;
  color: black;
  margin-bottom: 2rem;
  font-size: 2rem;
  line-height: 2.2 !important; 
  opacity: 0.5;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
  padding: 0;
  max-width: 56rem;
  width: 100%;
  &::placeholder {
    font-size: 2rem;
    line-height: 2.2 !important; 
    color: gray;
    opacity: 0.5;
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
  }
  &:enabled {
    padding-left: 1rem;
    line-height: 2.2 !important; 
  }
}
.btn {
  height: 4rem; 
  max-width: 56rem;
  width: 100%;
  border: none;
  background-color: black;
  color: white;
  margin-bottom: 4rem;
  position: relative;
  font-size: 1.5rem;
  font-family: 'Pixelpalm-category-font';
  font-smooth: never;
  -webkit-font-smoothing : none;
}
@media only screen and (max-width: 1200px) {
  .root-reset {
    margin-left: 1rem;
    max-width: calc(100vw - 2rem);
    width: calc(100vw - 2rem);
    margin-top: 10rem;
    height: auto;

  }
}
</style>