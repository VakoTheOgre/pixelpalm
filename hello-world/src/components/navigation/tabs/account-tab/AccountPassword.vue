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
    <form class="reset-root flex-col">
        <input type="text" v-model="email" placeholder="Email" class="input">
        <div @click.prevent="send" class="btn flex center pointer">SUBMIT</div>
        <!-- <span>{{ error }}</span> -->
    </form>
</template>
<style lang="scss" scoped>
.reset-root {
    width: calc(100vw -2rem);
    margin-top: 2rem;
}
.input {
  height: 4rem; 
  border: 0.2rem solid black;
  background-color: transparent;
  width: calc(100% - 2rem);
  margin-left: 1rem;
  margin-bottom: 2rem;
  line-height: 2.2 !important; 
  font-size: 2rem;
    color: black;
    opacity: 0.5;
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
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
  border: none;
  width: calc(100% - 2rem);
  background-color: black;
  margin-left: 1rem;
  color: white;
  margin-bottom: 4rem;
  position: relative;
  font-size: 1.5rem;
  font-family: 'Pixelpalm-category-font';
  font-smooth: never;
  -webkit-font-smoothing : none;
}
</style>
