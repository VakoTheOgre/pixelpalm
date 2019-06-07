<script>
export default {
  data() {
    return {
      firstName: '',
      lastName: '',
      nameErr: '',

      email: '',
      emailErr: '',

      password: '',
      password2: '',
      passwordErr: '',

      error: '',
      boxChecked: false
    }
  },
  watch: {
    firstName(newValue) {
      if(newValue.split("").length <= 1) {
        this.nameErr = 'Name too small'
      } else {
        this.nameErr = ''
      }
    },
    lastName(newValue) {
      if(newValue.split("").length <= 1) {
        this.nameErr = 'Name too small'
      } else {
        this.nameErr = ''
      }
    },
    email(newValue) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(!re.test(newValue)) {
        this.emailErr = 'Please provide a correct email address'
      } else {
        this.emailErr = ''
      }
    },
    password(newValue) {
      if(newValue.split("").length < 3) {
        this.passwordErr = 'Passwords need to have 8 or more characters'
      } else {
        this.passwordErr = ''
      }
    },
    password2(newValue) {
      if(this.password != newValue) {
        this.passwordErr = 'Passwords do not match'
      } else {
        this.passwordErr = ''
      }
    }
  },
  methods: {

    async register() {
      if(!(this.firstName || this.lastName || this.email || this.password || this.password2) || (this.nameErr || this.passwordErr || this.passwordErr)) {
        this.error = 'Please provide correct info'
        return
      } else {
        this.error = ''
      }

      if (!this.boxChecked) {
        this.error = 'Please agree to the terms of use'
      }

      if (this.password != this.password2) {
        this.error = "Passwords don't match"
      }

      try {
        let ret = await this.$store.dispatch('auth/register', {email: this.email, password: this.password, name: `${this.firstName} ${this.lastName}`})
        this.$store.commit("menuIcon/open")
        this.$store.commit("accountIcon/close")
      } catch(e) {
        this.error = e.response.data.message
      }
    },
    checkUncheck() {
      this.boxChecked = !this.boxChecked
    }
  }
}
</script>


<template>
<form class="inner-form flex-col">
  <input  v-model="firstName" type="text" placeholder="First Name*" class="input">
  <!-- <span v-model="nameErr" class="error"> {{ nameErr }} </span> -->
  
  <input v-model="lastName" type="text" placeholder="Last Name*" class="input">
  <!-- <span v-model="nameErr" class="error"> {{ nameErr }} </span> -->

  <input v-model="email" type="email" placeholder="Email Address*" class="input" :class="{ redError: emailErr != '' }"> 
  <!-- <span v-model="emailErr" class="error"> {{ emailErr }} </span> -->

  <input autocomplete="password"  v-model="password" type="password" placeholder="Password*" class="input">
  <input autocomplete="password"  v-model="password2" type="password" placeholder="Confirm Password*" class="input">
  <!-- <span v-model="passwordErr" class="error"> {{ passwordErr }} </span> -->
  
  <div class="terms flex AL-center">
    <div @click="checkUncheck" class="checkbox">
      <img  v-if="boxChecked" src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/tick.svg" alt="Agreed" class="checkbox-tick">
    </div>
    <span class="agree-txt">I Agree to the Terms of Use</span>
  </div>
  <button @click.prevent="register" class="btn pointer">SUBMIT</button>
  <!-- <span class="btn-error"> {{error}} </span> -->
</form>
</template>

<style lang="scss" scoped>
.error {
  padding: 0;
  margin: -1.5rem 0 0.5rem 0.5rem;
  color: white;
  font-size: 1.2rem;
}
.btn-error {
  color: white;
  font-size: 1.2rem;
  position: absolute;
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
.checkbox {
  width: 2.4rem;
  height: 2.2rem;
  border: 0.2rem solid black;
  margin-top: -1rem;
  margin-bottom: 1rem;
  user-select: none;
  &-tick {
    padding-left: 0.2rem;
    padding-top: 0.2rem;
  }
}
.agree-txt {
  width: 100%;
  text-align: start;
  margin-bottom: 1.8rem;
  padding-left: 1rem;
  line-height: 1;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
  font-size: 1rem;
	-webkit-font-smoothing: none;
}
.btn {
  height: 4rem; 
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
.terms {
  // padding-top: 0.8rem;
  margin-top: -0.5rem;
  margin-bottom: -0.6rem;
  // padding-bottom: 0.6rem;
}

</style>