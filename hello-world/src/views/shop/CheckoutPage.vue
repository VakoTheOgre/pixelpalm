<script>
import checkoutCart from '@/components/navigation/tabs/CheckoutCartTab'
import SubtotalCheckout from '@/components/navigation/tabs/SubtotalCheckout'
import Autocomplete from '@/components/store/Autocomplete.vue'
import StateAutocomplete from '@/components/store/StateAutocomplete'
export default {
    components: {
        checkoutCart,
        SubtotalCheckout,
        Autocomplete,
        StateAutocomplete
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
      boxChecked: false
    }
  },
  methods: {
    checkUncheck() {
      this.boxChecked = !this.boxChecked
    },

    selectCountry(e) {
      this.country_code = e
    },

    selectState (e) {
      this.state_code = e
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
      <span v-if="this.device == 'desktop'" class="title">CHECKOUT</span>
        <div class="wrapper flex JF-spaceBE AL-center">
            <form class="form flex-col" autocomplete="on">
                <div class="horizontal-wrap flex JF-spaceBE">
                    <input  v-model="name" type="text" placeholder="First Name*" id="mobile-input" :class="{ errorBorder: this.nameErr != '' }"  class="input-h-l ">

                    <input v-model="lastName" type="text" placeholder="Last Name*" :class="{ errorBorder: this.lastNameErr != '' }" class="input-h">
                </div>

                <div >
                  <input v-model="address1" type="text" placeholder="Street Name*" :class="{ errorBorder: this.address1Err != '' }" class="input-street">
                </div>
                

                <div class="horizontal-wrap flex JF-spaceBE">
                    <input v-model="city" type="text" placeholder="City*" id="mobile-input" :class="{ errorBorder: this.cityErr != '' }" class="input-h-l ">

                    <input v-model="zip" type="text" placeholder="Zip/Postal Code*" :class="{ errorBorder: this.zipErr != '' }" class="input-h">
                </div>
                
                <div class="horizontal-wrap flex JF-spaceBE">
                    <autocomplete @selectedCountry="selectCountry" :type="'Country'"></autocomplete>
                    <state-autocomplete @selectedState="selectState" :selectedCountry="country_code"></state-autocomplete>
                </div>
                
                <div v-if="this.device == 'desktop'" class="horizontal-wrap flex JF-spaceBE">

                    <input v-model="email" type="text" placeholder="Email Address*" :class="{ errorBorder: this.emailErr != '' }" title="" class="input-h-l">

                    <input v-model="phone" type="text" placeholder="Phone Number*" :class="{ errorBorder: this.phoneErr != '' }" title="" class="input-h">

                </div>
                <div class="final-btn flex center">
                  <span>PURCHASE NOW</span>
                </div>
            </form>
            <div class="order-sum">
                <checkout-cart v-if="this.device == 'desktop'"></checkout-cart>
                <div v-if="this.device == 'mobile'" class="terms flex AL-center">
                  <div @click="checkUncheck" class="checkbox">
                    <img  v-if="boxChecked" src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/tick.svg" alt="Agreed" class="checkbox-tick">
                  </div>
                  <span class="agree-txt">Save shipping info for future checkouts.</span>
                </div>
                <subtotal-checkout></subtotal-checkout>
            </div>
        </div>
    </div>
</template>
    
<style lang="scss" scoped>

.title {
  font-size: 2rem;
  position: absolute;
  width: 27rem;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
  text-align: center;
  top: 8.6rem;
  left: calc(50% - 0.5rem);
  transform: translateX(-50%);
  border-bottom: 0.2rem solid black;
  padding: 1rem;
  line-height: 1;
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
}
.wrapper {
    
    min-height: 53rem;
    // border: 0.1rem solid black;

}
.form {
    width: 56rem;
    height: 34rem;
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
}
.horizontal-wrap {
    width: 56rem;
    margin-bottom: 2rem;
}
.input {
    border: 0.2rem solid black;
    width: 27rem;
    height: 4rem;
    margin-bottom: 2rem;
    position: relative;
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
    &-street {
      width: 56rem;
      border: 0.2rem solid black;
      height: 4rem;
      margin-bottom: 2rem;
      padding-left: 1rem;
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
    }
    &-h {
        border: 0.2rem solid black;
        width: 27rem;
        height: 4rem;
        position: relative;
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
        &-l {
            border: 0.2rem solid black;
            width: 27rem;
            margin-right: 2rem;
            height: 4rem;
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
    }
}
.error {
    position: absolute;
}
@media only screen and (max-width: 1200px) {
.agree-txt {
  width: 100%;
  text-align: left;
  margin-bottom: 1.8rem;
  padding-left: 0.8rem;
  line-height: 1;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
  font-size: 1rem;
	-webkit-font-smoothing: none;
}
.terms {
  // padding-top: 0.8rem;
  padding-left: 2rem;
  
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
}
.wrapper {
  flex-direction: column;
    padding-top: 12.8rem;
    min-height: auto;
    // border: 0.1rem solid black;

}
.form {
    width: calc(100vw - 2rem);
    height: auto;
    margin-left: 2rem;
    // border: 0.1rem solid black;
    margin-bottom: 2rem;
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
    height: 4rem;
    margin-bottom: 2rem;
    position: relative;
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
    &-street {
      width: 100%;
      border: 0.2rem solid black;
      height: 4rem;
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
    }
    &-h {
        border: 0.2rem solid black;
        width: 100%;
        height: 4rem;
        position: relative;
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
        &-l {
            border: 0.2rem solid black;
            width: 100%;
            margin-right: 0;
            height: 4rem;
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
    }
}
.error {
    position: absolute;
}
}
</style>
