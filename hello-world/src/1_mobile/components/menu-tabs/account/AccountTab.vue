<script>
import registration from './RegistrationDropdown'
import LoggedUserTab from '../../../../components/navigation/tabs/account-tab/LoggedInUserTab'
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
      forgotPassword: false
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
        await this.$store.dispatch('auth/login', {email: this.email, password: this.password})
        this.error = "Successfully signed in"
      } catch(e) {
        this.error = e.response.data.message
      }
    },
    registerRequest() {
      this.registerPressed = true;
      
    }
  }
}
</script>

<template>
<div class="root-account">
  <form v-if="!userSignedIn" class="form-outer flex-col">
    <span class="new-customer-title">
        NEW CUSTOMER
    </span>
    <div v-if="!this.registerPressed" class="new-customer flex-col">
      
      <button @click="registerRequest" class="btn pointer">
        CREATE ACCOUNT
      </button>
    </div>
    <registration v-else></registration>
    <hr>
    <span  class="registered">REGISTERED CUSTOMERS</span>
    <input  v-model="email" type="email" placeholder="Email Address*" class="mail">
    <input  v-model="password" type="password" placeholder="Password*" class="pass">
    <router-link tag="span" to="/users/forgot-password" class="forgot-pass pointer">FORGOT YOUR PASSWORD?</router-link>
    <button  @click.prevent="login" class="btn login pointer">LOGIN</button>
  </form>
  <logged-user-tab v-else />
</div>
</template>

<style lang="scss" scoped>
.root-account{
  width: 100vw;
  background-color: white;
  min-height: 100vh;
  padding-bottom: 20rem;
  overflow-y: scroll;
  max-height: 100%;
  overflow: scroll;
  // height: 100%;
  position: absolute;
  top: 7rem;
  left: 0;
}
.error {
  padding: 0;
  margin: -1.5rem 0 0.5rem 0.5rem;
  color: white;
  font-size: 1.2rem;
}
hr {
  width: 100vw;
  height: 0.2rem;
  border-color: black;
  margin-left: -1rem;
}
.form-outer {
  padding: 3rem 1rem 0 1rem;
  background-color: white;
  
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
}
.mail {
  height: 4rem; 
  border: 0.2rem solid black;
  background-color: transparent;
  color: black;
  margin-bottom: 2rem;
  font-size: 2rem;
    color: black;
    opacity: 1;
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
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
.pass {
  height: 4rem; 
  border: 0.2rem solid black;
  background-color: transparent;
  font-size: 2rem;
    color: black;
    opacity: 1;
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
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
.forgot-pass {
  width: 100%;
  text-align: end;
  padding-top: 0.5rem;
  user-select: none !important;
  padding-bottom: 3rem;
  cursor: pointer !important;
  font-size: 1rem;
    color: black;
    opacity: 1;
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
}
.login {
  margin-bottom: 1rem;
}
</style>