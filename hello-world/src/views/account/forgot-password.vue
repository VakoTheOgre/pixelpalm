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
<div class="root-wrapper">
  <span v-if="this.device == 'desktop'" class="title">PASSWORD RECOVERY</span>
  <span v-if="device == 'mobile'" class="headingMobile">PASSWORD RECOVERY</span>
  <form   class="root-forgot flex-col center">
      <input type="text" v-model="email" placeholder="Enter your email address" class="input">
      <button @click.prevent="send" class="btn pointer">SUBMIT</button>
      <span>{{ error }}</span>
  </form>
</div>
</template>

<style lang="scss" scoped>
.title {
  font-size: 2rem;
  position: absolute;
  width: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  white-space: nowrap;
	-webkit-font-smoothing: none;
  text-align: center;
  top: 8.7rem;
  left: 50%;
	margin-left: 16.5rem;
  transform: translateX(-50%);
  border-bottom: 0.2rem solid black;
  line-height: 2 !important;
}
.headingMobile {
  width: calc(100vw - 2rem) ;
  position: absolute;
  top: 10rem;
  left: 1rem;
  text-align: left;
  font-size: 1.5rem !important;
  font-family: 'Pixelpalm-category-font';
  font-smooth: never;
  -webkit-font-smoothing : none;
}
.root-forgot {
  width: calc( 100vw - 33rem );
  margin-left: 16.5rem;
  overflow: hidden;
  height: 100%;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
}
.input {
  height: 4rem; 
  border: 0.2rem solid black;
  background-color: transparent;
  color: black;
  margin-bottom: 2rem;
  font-size: 2rem;
  line-height: 2.2 !important; 
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
  .root-forgot {
    width: calc( 100vw - 2rem );
    margin-top: 13rem;
    margin-left: 1rem;
    overflow: hidden;
    height: 100%;
    position: static;
    left: 0;
    top: 0;
    transform: translateX(0);
    padding-bottom: 320px;
  }
}
</style>

