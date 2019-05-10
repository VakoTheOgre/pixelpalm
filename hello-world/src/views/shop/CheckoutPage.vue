<script>
import cartDesktop from '@/components/navigation/tabs/CartTab'
export default {
    components: {
        cartDesktop
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
      streetNameErr: '',
      emailErr: '',
      cityErr: '',
      phoneErr: '',
      zipErr: '',

      error: '',
      boxChecked: false
    }
  },
  watch: {
    firstName(newValue) {
      if(newValue.split("").length <= 1) {
        this.nameErr = 'Name too short'
      } else {
        this.nameErr = ''
      }
    },
    lastName(newValue) {
      if(newValue.split("").length <= 1) {
        this.nameErr = 'Lastname too short'
      } else {
        this.nameErr = ''
      }
    },
    streetName(newValue) {
      if(newValue.split("").length <= 1) {
        this.streetErr = 'Street name too short'
      } else {
        this.streetErr = ''
      }
    },
    cityName(newValue) {
      if(newValue.split("").length <= 1) {
        this.cityErr = 'City name too short'
      } else {
        this.cityErr = ''
      }
    },
    zip(newValue) {
      if(newValue.split("").length <= 1) {
        this.zipErr = 'City name too short'
      } else {
        this.zipErr = ''
      }
    },
    phoneNum(newValue) {
      if(newValue.split("").length <= 1) {
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
  },

}
</script>

<template>
    <div class="root-checkout flex center">
        <div class="wrapper flex JF-spaceBE AL-center">
            <form class="form flex-col" autocomplete="on">
                <div class="horizontal-wrap">
                    <input  v-model="firstName" type="text" placeholder="FIRSTNAME*" class="input-2">
                        <span v-model="nameErr" class="error"> {{ nameErr }} </span>

                    <input v-model="lastName" type="text" placeholder="LASTNAME*" class="input-2">
                        <span v-model="lastNameErr" class="error"> {{ lastNameErr }} </span>
                </div>
                
                <input  v-model="address1" type="text" placeholder="STREET ADRESS*" class="input">
                    <span v-model="streetNameErr" class="error"> {{ streetNameErr }} </span>

                <div class="horizontal-wrap">
                    <input v-model="city" type="text" placeholder="CITY*" class="input-2">
                        <span v-model="cityErr" class="error"> {{ cityErr }} </span>

                    <input v-model="zip" type="text" placeholder="ZIP/POSTAL CODE*" class="input-2">
                        <span v-model="zipErr" class="error"> {{ zipErr }} </span>
                </div>
                
                <div class="horizontal-wrap">
                    
                </div>
                
                <div class="horizontal-wrap">

                    <input v-model="email" type="text" placeholder="EMAIL ADRESS*" class="input-h-l">
                        <span v-model="emailErr" class="error"> {{ emailErr }} </span>

                    <input v-model="phone" type="text" placeholder="PHONE NUMBER*" class="input-h">
                        <span v-model="phoneErr" class="error"> {{ phoneErr }} </span>

                </div>
                
            </form>
            <div class="order-sum">
                <cart-desktop v-if="this.device == 'desktop'"></cart-desktop>
            </div>
        </div>
    </div>
</template>
    
<style lang="scss" scoped>
.root-checkout {
    min-width: calc(100vw - 33rem);
    min-height: 100vh;
}
.wrapper {
    min-width: 83rem;
    min-height: 100vh;
}
.form {
    width: 56rem;
    height: 34rem;
    border: 0.1rem solid black;
}
.order-sum {
    border: 0.1rem solid black;
    height: 100%;
}
//===========================================================================CARTS CSS===================================================================================
.subtotal {
    border-top: 0.2rem solid black ;
  padding-top: 3rem;
  width: 100%;
  text-align: left;
  font-size: 1.6rem;
}
.cart-wrapper {
  background-color: white;
  min-height: 24rem;
  height: 24rem;
  width: 27rem;
  margin-bottom: 13.2rem;
  position: static;
  :first-of-type {
    margin-top: 0;
  }
}
.cart-item {
  width: 27rem;
  height: 6rem;
  border: 0.2rem solid black;
  position: relative;
  margin-top: 3rem;
  :first-of-type {
    margin-top: 0;
  }
}
.spans {
  padding: 0.2rem;
}
.thumb {
  height: 5.6rem;
  width: 5.6rem;
  border-right: 0.2rem solid black;
}
.details {
  width: 100%;
  font-size: 1.2rem;
}
.quantity-number {
  font-size: 1.2rem;
  padding-left: 0.3rem;
  height: 1.8rem;
  font-family: 'pixelcart';
  text-align: center;
}
button {
  background-color: transparent;
  border: none;
}
.bin {
  font-size: 1.2rem;
}
//===========================================================================CARTS CSS===================================================================================
</style>
