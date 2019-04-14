<script>
import registration from './RegistrationDropdown'
export default {
  components: {
    registration
  },
  data() {
    return {
      email: '',
      emailErr: '',
      password: '',
      error: '',
      registerPressed: false
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
    }
  },
  methods: {
    closeCurrentTab() {
      this.$emit('closeCurrentTab')
    },
    async login() {
      try{
        let ret = await this.$store.dispatch('auth/login', {email: this.email, password: this.password})
        this.error = 'All good'
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
<div class="root">
  <form class="form flex-col">
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
    <span class="registered">REGISTERED CUSTOMERS</span>
    <input v-model="email" type="email" placeholder="EMAIL ADRESS*" class="mail">
    <span class="error">{{ emailErr }}</span>
    <input v-model="password" type="password" placeholder="PASSWORD*" class="pass">
    <span class="forgot-pass">FORGOT YOUR PASSWORD?</span>
    <button @click.prevent="login" class="btn pointer">LOGIN</button>
    <span class="error">{{ error }}</span>
  </form>
</div>
</template>

<style lang="scss" scoped>
.root {
  background-color: white;
  height: calc(100vh - 17.2rem);
}
.error {
  padding: 0;
  margin: -1.5rem 0 0.5rem 0.5rem;
  color: white;
  font-size: 1.2rem;
}
hr {
  width: 33rem;
  height: 0.2rem;
  border-color: black;
  margin-left: -3rem;
}
.form {
  padding: 3rem 3rem 0 3rem;
  background-color: white;
  
}
.new-customer {
  padding-bottom: 3rem;
  &-title {
    padding-bottom: 1rem;
    font-size: 1.8rem;
  }
}
.btn {
  height: 4rem; 
  border: none;
  background-color: black;
  color: white;
}
.registered {
  padding-top: 3rem;
  padding-bottom: 1rem;
  font-size: 1.8rem;
}
.mail {
  height: 4rem; 
  border: 0.2rem solid black;
  background-color: transparent;
  color: black;
  margin-bottom: 2rem;
  &::placeholder {
    font-size: 1.2rem;
    color: black;
  }
  &:enabled {
    padding-left: 1rem;
  }
}
.pass {
  height: 4rem; 
  border: 0.2rem solid black;
  background-color: transparent;
  color: black;
  &::placeholder {
    font-size: 1.2rem;
    color: black;
  }
  &:enabled {
    padding-left: 1rem;
  }
}
.forgot-pass {
  width: 100%;
  text-align: end;
  padding-top: 0.5rem;
  padding-bottom: 3rem;
}
</style>
