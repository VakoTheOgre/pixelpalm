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
    <form class="root-forgot flex-col center">
      <span v-if="this.device == 'desktop'" class="title">FORGOT PASSWORD</span>
        <input type="text" v-model="email" placeholder="Enter your email" class="input">
        <button @click.prevent="send" class="btn pointer">SUBMIT</button>
        <span>{{ error }}</span>
    </form>
</template>

<style lang="scss" scoped>
.title {
  font-size: 2rem;
  position: fixed;
  white-space: nowrap;
  width: 37rem;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
  text-align: center;
  top: 8.6rem;
  left: calc(50% - 16.5rem);
  transform: translateX(-50%);
  margin-left: 33rem;
  border-bottom: 0.2rem solid black;
  padding: 1rem;
  line-height: 1;
}
.root-forgot {
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
  opacity: 1;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
  padding: 0;
  max-width: 56rem;
  width: 100%;
  &::placeholder {
    font-size: 2rem;
    color: gray;
    opacity: 1;
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
  }
  &:enabled {
    padding-left: 1rem;
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
  .root-forgot {
    margin-left: 1rem;
    max-width: calc(100vw - 2rem);
    width: calc(100vw - 2rem);
    margin-top: 10rem;
    height: auto;
  }
}
</style>

