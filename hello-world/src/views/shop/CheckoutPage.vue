<script>
import checkoutCart from '@/components/navigation/tabs/CheckoutCartTab'
import SubtotalCheckout from '@/components/navigation/tabs/SubtotalCheckout'
import Autocomplete from '@/components/store/Autocomplete.vue'
export default {
    components: {
        checkoutCart,
        SubtotalCheckout,
        Autocomplete
    },
    data() {
    return {
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
  watch: {
    name(newValue) {
      if(newValue.split("").length == 1 || newValue.split("").length < 1 && !newValue.split("").length == 0) {
        this.nameErr = 'Name too short'
      } else {
        this.nameErr = ''
      }
    },
    lastName(newValue) {
      if(newValue.split("").length == 1 || newValue.split("").length < 1 && !newValue.split("").length == 0) {
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
      if(newValue.split("").length == 1 || newValue.split("").length < 1 && !newValue.split("").length == 0) {
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
      <span class="title">CHECKOUT</span>
        <div class="wrapper flex JF-spaceBE AL-center">
            <form class="form flex-col" autocomplete="on">
                <div class="horizontal-wrap flex JF-spaceBE">
                    <input  v-model="name" type="text" placeholder="Firstname*" :class="{ errorBorder: this.nameErr != '' }"  class="input-h-l">

                    <input v-model="lastName" type="text" placeholder="Lastname*" :class="{ errorBorder: this.lastNameErr != '' }" class="input-h">
                </div>

                <div >
                  <input v-model="address1" type="text" placeholder="Street Name*" :class="{ errorBorder: this.address1Err != '' }" class="input-street">
                </div>
                

                <div class="horizontal-wrap flex JF-spaceBE">
                    <input v-model="city" type="text" placeholder="City*" :class="{ errorBorder: this.cityErr != '' }" class="input-h-l">

                    <input v-model="zip" type="text" placeholder="Zip/Postal Code*" :class="{ errorBorder: this.zipErr != '' }" class="input-h">
                </div>
                
                <div class="horizontal-wrap flex JF-spaceBE">
                    <autocomplete :type="'country'"></autocomplete>
                    <autocomplete :type="'state'"></autocomplete>
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
  top: 7.6rem;
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
    margin-bottom: 3.2rem;
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

</style>
