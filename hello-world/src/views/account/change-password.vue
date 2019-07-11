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
<div class="outer-wrap flex center">
  <span v-if="this.device == 'mobile'" class="option-span">ACCOUNT INFORMATION</span>
  <span v-if="this.device == 'desktop'" class="title">EDIT PASSWORD</span>
  <form class="root-change flex-col center">
      <input type="text" v-model="email" placeholder="Enter your email" class="input">
      <button @click.prevent="send" class="btn pointer">SUBMIT</button>
      <span>{{ error }}</span>
  </form>
</div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 2rem;
  position: absolute;
  white-space: nowrap;
  width: 37rem;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
  text-align: center;
  top: 8.6rem;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 0.2rem solid black;
  padding: 1rem;
  line-height: 2.2 !important;
}
.outer-wrap {
  width: 100vw;
  height: 100vh;
  position: relative;
}
.root-change {
  // margin-left: 33rem;
  width: 56rem;
  height: auto;
  // margin-top: 40rem;
}
.input {
  height: 4rem; 
  border: 0.2rem solid black;
  background-color: transparent;
  color: black;
  line-height: 2.2 !important; 
  margin-bottom: 2rem;
  font-size: 2rem;
  padding-bottom: 0.2rem;
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
    opacity: 0.5;
    line-height: 2.2 !important; 
    padding-bottom: 0.2rem;
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
  font-size: 1.5rem;
  font-family: 'Pixelpalm-category-font';
  font-smooth: never;
  -webkit-font-smoothing : none;
}
@media only screen and (max-width: 1200px) {
  .root-change {
    max-width: calc(100vw - 2rem);
    width: calc(100vw - 2rem);
    margin-bottom: 21rem;
    height: auto;
  }
  .option-span {
    font-family: 'Pixelpalm-category-font';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
    color: black;
    width: calc(100% - 2rem);
    margin-left: 1rem;
    padding-top: 0 !important; 
    position: absolute; 
    top: -2rem;
    left: 0;
    font-size: 1rem;
  }
}
</style>
