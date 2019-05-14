<script>
import cartDesktop from '@/components/navigation/tabs/CartTab'
import SubtotalCheckout from '@/components/navigation/tabs/SubtotalCheckout'
export default {
    components: {
        cartDesktop,
        SubtotalCheckout
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
        <div class="wrapper flex JF-spaceBE AL-center">
            <form class="form flex-col" autocomplete="on">
                <div class="horizontal-wrap flex JF-spaceBE">
                    <input  v-model="name" type="text" placeholder="FIRSTNAME*" :class="{ errorBorder: this.nameErr != '' }"  class="input-h-l">

                    <input v-model="lastName" type="text" placeholder="LASTNAME*" :class="{ errorBorder: this.lastNameErr != '' }" class="input-h">
                </div>

                <div >
                  <input v-model="address1" type="text" placeholder="STREET NAME*" :class="{ errorBorder: this.address1Err != '' }" class="input">
                </div>
                

                <div class="horizontal-wrap flex JF-spaceBE">
                    <input v-model="city" type="text" placeholder="CITY*" :class="{ errorBorder: this.cityErr != '' }" class="input-h-l">

                    <input v-model="zip" type="text" placeholder="ZIP/POSTAL CODE*" :class="{ errorBorder: this.zipErr != '' }" class="input-h">
                </div>
                
                <div class="horizontal-wrap flex JF-spaceBE">
                    
                </div>
                
                <div class="horizontal-wrap flex JF-spaceBE">

                    <input v-model="email" type="text" placeholder="EMAIL ADRESS*" :class="{ errorBorder: this.emailErr != '' }" title="" class="input-h-l">

                    <input v-model="phone" type="text" placeholder="PHONE NUMBER*" :class="{ errorBorder: this.phoneErr != '' }" title="" class="input-h">

                </div>
                
            </form>
            <div class="order-sum">
                <cart-desktop v-if="this.device == 'desktop'"></cart-desktop>
                <subtotal-checkout></subtotal-checkout>
            </div>
        </div>
    </div>
</template>
    
<style lang="scss" scoped>
.errorBorder {
  border: 0.2rem solid red !important;
}
.root-checkout {
    min-width: calc(100vw - 33rem);
    min-height: 100vh;
}
.wrapper {
    min-width: 85rem;
    min-height: 53rem;
    // border: 0.1rem solid black;

}
.form {
    width: 56rem;
    height: 34rem;
    // border: 0.1rem solid black;
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
    width: 100%;
    height: 4rem;
    margin-bottom: 2rem;
    position: relative;
    &:enabled {
        padding-left: 1rem;
    }
    &-h {
        border: 0.2rem solid black;
        width: 50%;
        height: 4rem;
        position: relative;
        &:enabled {
            padding-left: 1rem;
        }
        &-l {
            border: 0.2rem solid black;
            width: 50%;
            margin-right: 2rem;
            height: 4rem;
            &:enabled {
                padding-left: 1rem;
            }
        }
    }
}
.error {
    position: absolute;
}
//===========================================================================CARTS CSS===================================================================================

.cart-wrapper {
  background-color: white;
  min-height: 24rem;
  margin-bottom: 10rem;
  width: 27rem;
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
