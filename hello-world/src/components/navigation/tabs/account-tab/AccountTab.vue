<script>
import registration from './RegistrationDropdown'
import LoggedUserTab from './LoggedInUserTab'
export default {
  components: {
    registration,
    LoggedUserTab,
  },
  data() {
    return {
      email: '',
      emailErr: '',
      password: '',
      error: '',
      registerPressed: false,
      forgotPassword: false,
      loading: false
    }
  },

  computed: {
    userSignedIn () {
      return !!this.$store.getters['auth/user']
    }
  },
  mounted () {
    if (this.userSignedIn) {
      this.$store.commit('loggedUser/open')
    }
  },
  watch: {
    email(newValue) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(!re.test(newValue)) {
        this.emailErr = 'Please provide a correct e-mail'
      } else {
        this.emailErr = ''
      }
    },
  },
  methods: {
    closeCurrentTab() {
      this.$emit('closeCurrentTab')
    },
    async login() {
      try{
        this.loading = true
        await this.$store.dispatch('auth/login', {email: this.email, password: this.password})
        this.error = "Successfully signed in"
        this.loading = false
      } catch(e) {
        this.loading = false
        this.error = e.response.data.message
        window.alert(e.response.data.message)
      }
    },
    registerRequest() {
      this.registerPressed = true;
    },

    closeEverything() {
      this.$store.commit("menuIcon/close")
      this.$store.commit("exploreIcon/close")
      this.$store.commit("searchIcon/close")
      this.$store.commit("accountIcon/close")
      this.$store.commit("cartIcon/close")
      this.$store.commit("legalsIcon/close")
    }
  }
}
</script>

<template>
<div class="root">
  <form v-if="!userSignedIn" class="form flex-col">
    <span class="new-customer-title">NEW CUSTOMERS
    </span>
    <div v-if="!this.registerPressed" class="new-customer flex-col">
      
      <button @click="registerRequest" class="btn pointer">
        <span class="sharp-span">CREATE ACCOUNT</span>
      </button>
    </div>
    <registration v-else></registration>
    <div class="hr"></div>
    <form class="flex-col" > 
      <span class="registered">REGISTERED CUSTOMERS</span>
      <input v-model="email" type="email" placeholder="Email Address*" class="mail input" :class="{ redError: error }">
      <!-- <span class="error">{{ emailErr }}</span> -->
      <input v-model="password" type="password" placeholder="Password*" class="pass">
      <router-link tag="span" to="/account/password-recovery" @click.native="closeEverything" class="forgot-pass pointer">FORGOT YOUR PASSWORD?</router-link>
      <button @click.prevent="login" class="btn  padding-bot pointer"><span v-if="loading == false">LOGIN</span> <span v-if="loading == true"> LOADING </span></button>
    </form>
    <!-- <span class="error">{{ error }}</span> -->
  </form>
  <logged-user-tab v-else/>
</div>
</template>

<style lang="scss" scoped>
@media only screen and (max-width: 1200px) {
  .hr {
    border-bottom: 0.2rem solid black;
    width: calc( 100% - 2rem ) !important;
  }
}
.hr {
  border-bottom: 0.2rem solid black;
}
@media only screen and (min-height: 879px) {
  .root {
    overflow: hidden !important;
  }
}
.root {
  // background-color: white;
  width: 33rem;
  background-color: white;
  overflow-y: scroll;
  min-height: calc(100vh - 12.8rem);
  max-height: 100%;
  overflow-x: hidden;
  // height: 100%;
  position: absolute;
  top: 12.8rem;
  left: 0;
}
.padding-bot {
  margin-bottom: 14rem;
}
.hr {
  border-bottom: 0.2rem solid black;
}
.error {
  padding: 0;
  margin: -1.5rem 0 0.5rem 0.5rem;
  color: black;
  font-size: 1.2rem;
}
.form {
  padding: 3rem 3rem 0 3rem;
  // background-color: white;
  min-height: 81.2rem; 
  
  z-index: 2;
}
.new-customer {
  padding-bottom: 3rem;
  &-title {
    padding-bottom: 1rem;
    font-size: 1.5rem;
    font-family: 'Pixelpalm-category-font';
    font-smooth: never;
    -webkit-font-smoothing : none;
  }
}
.sharp-span {
  color: white;
  font-size: 1.5rem;
  // height: 2.1rem;
  font-family: 'Pixelpalm-category-font';
  font-smooth: never;
  -webkit-font-smoothing : none;
}
.btn {
  height: 4rem; 
  border: none;
  background-color: black;
  color: white;
  font-size: 1.5rem;
  font-family: 'Pixelpalm-category-font';
  font-smooth: never;
  -webkit-font-smoothing : none;
}
.registered {
  padding-top: 3rem;
  padding-bottom: 1rem;
  font-size: 1.5rem;
  font-family: 'Pixelpalm-category-font';
  font-smooth: never;
	-webkit-font-smoothing : none;
  // white-space: nowrap;
}
.mail {
  height: 4rem; 
  border: 0.2rem solid black;
  background-color: transparent;
  color: black;
  margin-bottom: 2rem;
  font-size: 2rem;
  line-height: 2 !important;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
  &::placeholder {
    font-size: 2rem;
    color: gray;
    opacity: 0.5;
    line-height: 2.2 !important;
  }
  &:enabled {
    padding-left: 1rem;
    line-height: 2 !important;
  }
}
.pass {
  height: 4rem; 
  border: 0.2rem solid black;
  background-color: transparent;
  color: black;
  font-size: 2rem;
  line-height: 2 !important;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
  &::placeholder {
    font-size: 2rem;
    color: gray;
    opacity: 0.5;
    font-family: 'Pixelpalm Pro-Input';
    line-height: 2 !important;
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
  }
  &:enabled {
    padding-left: 1rem;
    line-height: 2 !important;
  }
}
.forgot-pass {
  width: 100%;
  line-height: 2 !important;
  text-align: end;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
  font-size: 1rem;
	-webkit-font-smoothing: none;
  margin-top: 0.5rem;
  margin-bottom: 2.3rem;
}
</style>
