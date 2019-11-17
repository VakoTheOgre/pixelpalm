<script>

import SubtotalCheckout from '@/components/navigation/tabs/SubtotalCheckout'
import Autocomplete from '@/components/store/Autocomplete.vue'
import StateAutocomplete from '@/components/store/StateAutocomplete'
import ppla from '@/components/navigation/PolicesLetters'
export default {
    components: {
        SubtotalCheckout,
        Autocomplete,
        StateAutocomplete,
        ppla
    },
    data() {
    return {
      boxChecked: false,
      name: '',
      lastName: '',
      email: '',
      address1: '',
      city: '',
      phone: '',
      state_code: '',
      country_code: '',
      zip: '',

      nameErr: '',
      lastNameErr: '',
      address1Err: '',
      emailErr: '',
      cityErr: '',
      phoneErr: '',
      zipErr: '',

      error: '',
      boxChecked: false,

      loading: false
    }
  },

  mounted () {
    if ( !this.$store.getters['auth/user'] ) {
      return
    }
    const user = this.$store.getters['auth/user']
    if (user) {
      const name = user.name.split(" ")
      this.name = name[0]
      this.lastName = name[1]
      this.email = user.email
      this.address1 = user.address1
      this.city = user.city
      this.phone = user.phone
      this.zip = user.zip

    }
  },

  methods: {
    async changeInfo () {
      try {
        let res = await this.$axios.put(`/user/edit/${this.$store.getters['auth/user']._id}`, {
          name: `${this.name} ${this.lastName}`,
          address1: this.address1,
          city: this.city,
          state_code: this.state_code,
          country_code: this.country_code,
          zip: this.zip,
          email: this.email,
          phone: this.phone,
        }, {
          headers: { 'Authorization': `Bearer ${this.$store.getters['auth/token']}` }
        })
        this.error = res.data.message
        this.$store.dispatch('auth/me')
      } catch (e) {
        // this.error = e.response.data.message
        this.error = ''
      }
    },
  
    checkUncheck() {
      this.boxChecked = !this.boxChecked
      this.changeInfo()      
    },

    selectCountry(e) {
      this.country_code = e
    },

    selectState (e) {
      this.state_code = e
    },

    async checkout() {
      try {
        this.loading = true 
        let url = await this.$store.dispatch('cart/checkout', {
          name: this.name + ' ' + this.lastName,
          address: this.address1,
          city: this.city,
          state_code: this.state_code,
          country_code: this.country_code,
          zip: this.zip
        })
        window.location.replace(url)
        this.loading = false
      } catch (e) {
        this.loading = false
        window.alert(e.response.data.message)
      }
    }
  },
  watch: {
    name(newValue) {
      var re = /^[a-z ,.'-]+$/
      if(!re.test(newValue)) {
        this.nameErr = 'Name too short'
      } else {
        this.nameErr = ''
      }
    },
    lastName(newValue) {
      let re = /^[a-z ,.'-]+$/
      if(!re.test(newValue)) {
        this.lastNameErr = 'Lastname too short'
      } else {
        this.lastNameErr = ''
      }
    },
    address1(newValue) {
      if(newValue.split("").length == 1 || newValue.split("").length < 1 && !newValue.split("").length == 0) {
        this.address1Err = 'Street name too short'
      } else {
        this.address1Err = ''
      }
    },
    city(newValue) {
      if(newValue.split("").length == 1 || newValue.split("").length < 1 && !newValue.split("").length == 0) {
        this.cityErr = 'City name too short'
      } else {
        this.cityErr = ''
      }
    },
    zip(newValue) {
      if(newValue.split("").length == 1 || newValue.split("").length < 1 && !newValue.split("").length == 0) {
        this.zipErr = 'Zip code too short'
      } else {
        this.zipErr = ''
      }
    },
    phone(newValue) {
      let re = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/
      if(!re.test(newValue)) {
        this.phoneErr = 'Phone number too short'
      } else {
        this.phoneErr = ''
      }
    },
    email(newValue) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(!re.test(newValue)) {
        this.emailErr = 'Please provide a correct email address'
      } else {
        this.emailErr = ''
      }
    }
  }

}
</script>

<template>
    <div class="root-checkout flex center">
      <span v-if="device == 'desktop'" class="title">CHECKOUT</span>
      <span v-if="device == 'mobile'" class="headingMobile">CHECKOUT</span>
        <div class="wrapper flex JF-spaceBE AL-center">
            <form   class="form flex-col">
                <div class="horizontal-wrap flex JF-spaceBE">
                    <input  v-model="name" type="text" placeholder="First Name*" id="mobile-input" class="input-h-l ">

                    <input v-model="lastName" type="text" placeholder="Last Name*" class="input-h">
                </div>

                <div >
                  <input v-model="address1" type="text" placeholder="Street Address*" class="input-street">
                </div>
                

                <div class="horizontal-wrap flex JF-spaceBE">
                    <input v-model="city" type="text" placeholder="City*" id="mobile-input" class="input-h-l ">

                    <input v-model="zip" type="text" placeholder="Postal Code*" class="input-h">
                </div>
                
                <div class="horizontal-wrap flex JF-spaceBE">
                    <autocomplete @selectedCountry="selectCountry" :type="'Country'"></autocomplete>
                    <state-autocomplete @selectedState="selectState" :selectedCountry="country_code"></state-autocomplete>
                </div>
                
                <div v-if="this.device == 'desktop'" class="horizontal-wrap flex JF-spaceBE">

                    <input v-model="email" type="text" placeholder="Email Address*" :class="{ errorBorder: this.emailErr != '' }" title="" class="input-h-l">

                    <input v-model="phone" type="text" placeholder="Phone Number*" title="" class="input-h">

                </div>
                <subtotal-checkout v-if="device == 'mobile'"></subtotal-checkout>
                <div @click="checkout" class="final-btn flex center pointer ">
                  <span v-if="loading == false">PURCHASE NOW</span> <span v-if="loading == true"> LOADING </span>
                </div>
            </form>
            <div class="order-sum">
                <div v-if="this.device == 'mobile'" class="terms flex AL-center">
                  <div @click="checkUncheck" class="checkbox">
                    <img  v-if="boxChecked" src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/tick.svg" alt="Agreed" class="checkbox-tick">
                  </div>
                  <span  class="agree-txt">Save shipping info for future checkouts.</span>
                </div>
                <!-- <subtotal-checkout v-if="device == 'mobile'"></subtotal-checkout> -->
            </div>
            
        </div>
        
        <ppla v-if="device == 'desktop'"></ppla>
    </div>
</template>
    
<style lang="scss" scoped>
input::placeholder {
  font-size: 2rem;
  color: gray;
  line-height: 1.3333 !important; 
  opacity: 0.5;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
}
input:disabled {
  padding-left: 1rem;
  padding-top: 0.6rem;
  line-height: 2.2 !important; 
}
input:enabled {
  padding-left: 1rem;
  height: 4rem;
}
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
	// margin-left: 16.5rem;
  transform: translateX(-50%);
  border-bottom: 0.2rem solid black;
  line-height: 2 !important;
}
.errorBorder {
  border: 0.2rem solid red !important;
}
.root-checkout {
    min-width: calc(100vw - 33rem);
    min-height: 100vh;
    position: relative;
    margin-left: 33rem;
    // margin-right: 16.5rem;
    flex-direction: column;
}
.wrapper {
    max-width: 85rem !important;
    min-height: 53rem;
    // border: 0.1rem solid black;

}
.form {
    min-width: 86rem;
    // border: 0.1rem solid black;
    margin-right: 2rem;
    margin-bottom: 4rem;
}
.final-btn {
  width: 100%;
  height: 4rem;
  font-size: 2rem;
  background-color: black;
  color: white;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
.order-sum {
    // border: 0.1rem solid black;
    height: 100%;
    width: 28rem;
    margin-bottom: 5.4rem;
    padding-bottom: 20rem;
}
.horizontal-wrap {
    width: 100%;
    margin-bottom: 2rem;
}
.input {
    border: 0.2rem solid black;
    width: 27rem;
    margin-bottom: 2rem;
    position: relative;
    font-size: 2rem;
    line-height: 2.2 !important; 
    color: black;
    padding-top: 0.5rem !important;
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
    &-street {
      width: 100%;
      border: 0.2rem solid black;
      margin-bottom: 2rem;
      font-size: 2rem;
      color: black;
      font-family: 'Pixelpalm Pro-Input';
      text-rendering: geometricPrecision;
      font-smooth: never;
      -webkit-font-smoothing: none;
    }
    &-h {
        border: 0.2rem solid black;
        width: 100%;
        position: relative;
        font-size: 2rem;
        color: black;
        font-family: 'Pixelpalm Pro-Input';
        text-rendering: geometricPrecision;
        font-smooth: never;
        -webkit-font-smoothing: none;
        &-l {
            border: 0.2rem solid black;
            width: 100%;
            margin-right: 2rem;
            font-size: 2rem;
            color: black;
            font-family: 'Pixelpalm Pro-Input';
            text-rendering: geometricPrecision;
            font-smooth: never;
            -webkit-font-smoothing: none;
        }
    }
}
.error {
    position: absolute;
}
@media only screen and (max-width: 1200px) {
.headingMobile {
  width: calc(100vw - 2rem) ;
  text-align: left;
  margin-top: 10rem;
  z-index: 2;
  font-size: 1.5rem !important;
  font-family: 'Pixelpalm-category-font';
  font-smooth: never;
  -webkit-font-smoothing : none;
}
.agree-txt {
  width: 100%;
  text-align: left;
  margin-bottom: 1.8rem;
  padding-left: 0.8rem;
  line-height: 2.2 !important;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
  font-size: 1rem;
	-webkit-font-smoothing: none;
}
.terms {
  // padding-top: 0.8rem;
  padding-left: 1rem;
  width: 100%;
  margin-top:0;
  margin-bottom: 0;
  // padding-bottom: 0.6rem;
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
#mobile-input {
  margin-bottom: 2rem !important;
}
.errorBorder {
  border: 0.2rem solid red !important;
}
.root-checkout {
  flex-direction: column;
  justify-content: flex-start;
  min-width: 0;
  width: 100%;
  min-height: 0;
  position: relative; 
  margin-left: 0;
}
.wrapper {
  flex-direction: column;
    padding-top: 1rem;
    min-height: auto;
    // border: 0.1rem solid black;

}
.form {
    width: calc(100vw - 2rem);
    height: auto;
    margin-left: 2rem;
    // border: 0.1rem solid black;
    margin-bottom: 2rem;
    min-width: auto !important;
}
.final-btn {
  width: 100%;
  height: 4rem;
  font-size: 2rem;
  margin: -2.1rem 0 0 0 ;
  padding: 0;
  background-color: black;
  color: white;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
.order-sum {
    // border: 0.1rem solid black;
    height: 100%;
    width: 100%;
    max-width: 100vw;;
    margin-bottom: 3.2rem;
}
.horizontal-wrap {
    width: 100%;
    flex-direction: column;
    margin-bottom: 2rem;
}
.input {
    border: 0.2rem solid black;
    width: 100%;
    margin-bottom: 2rem;
    position: relative;
    font-size: 2rem;
    color: black;
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
    &-street {
      width: 100%;
      border: 0.2rem solid black;
      margin-bottom: 2rem;
      font-size: 2rem;
      color: black;
      font-family: 'Pixelpalm Pro-Input';
      text-rendering: geometricPrecision;
      font-smooth: never;
      -webkit-font-smoothing: none;
    }
    &-h {
        border: 0.2rem solid black;
        width: 100%;
        position: relative;
        font-size: 2rem;
        color: black;
        font-family: 'Pixelpalm Pro-Input';
        text-rendering: geometricPrecision;
        font-smooth: never;
        -webkit-font-smoothing: none;
        &-l {
            border: 0.2rem solid black;
            width: 100%;
            margin-right: 0;
            font-size: 2rem;
            color: black;
            font-family: 'Pixelpalm Pro-Input';
            text-rendering: geometricPrecision;
            font-smooth: never;
            -webkit-font-smoothing: none;
        }
    }
}
.error {
    position: absolute;
}
}
</style>
