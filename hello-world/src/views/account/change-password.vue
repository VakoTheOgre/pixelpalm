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
  top: 6.6rem;
  left: 50%;
  transform: translateX(-50%);
  border-bottom: 0.2rem solid black;
  padding: 1rem;
  line-height: 2.2 !important;
}
.outer-wrap {
  min-width: calc( 100vw - 33rem );
}
.root-change {
  padding-right:2rem;
  padding-left:2rem;
  padding-bottom:2rem;
  width: 86rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  text-align: justify;
  // margin-left: 33rem;
  font-size: 2rem;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
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
    padding-right: 0 !important;
    padding-left: 0 !important;
    padding-bottom: 320px !important;
    margin-top: 13rem;
    width: calc( 100vw - 2rem ) !important;
    position: static;
    top: 0;
    left: 0;
    transform: translateX(0);
    text-align: justify;
    // margin-left: 33rem;
    font-size: 2rem;
    font-family: 'Pixelpalm-text';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
  }
  .option-span {
    font-family: 'Pixelpalm-category-font';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
    color: black;
    width: 100%;
    margin-left: 0;
    padding-top: 0 !important; 
    position: absolute; 
    top: -2rem;
    left: 0;
    font-size: 1rem;
  }
}
</style>
