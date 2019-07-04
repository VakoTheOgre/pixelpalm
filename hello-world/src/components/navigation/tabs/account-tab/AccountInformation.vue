<script>
import autocomplete from '../../../store/AutocompleteSidebar'
export default {

  components: {
    autocomplete
  },

  data () {
    return {
      name: '',
      nameErr: '',

      lastName: '',
      lastNameErr: '',

      address1: '',
      address1Err: '',

      city: '',
      cityErr: '',

      zip: '',
      zipErr: '',

      country_code: '',
      state_code: '',

      email: '',
      emailErr: '',

      phone: '',
      phoneErr: '',

      error: ''
    }
  },

  mounted () {
    const user = this.$store.getters['auth/user']
    const fullName = user.name.split(" ")
    this.name = fullName[0]
    this.lastName = fullName[1]
    this.address1 = user.address1
    this.city = user.city
    this.state_code = user.state_code
    this.country_code = user.country_code
    this.zip = user.zip
    this.email = user.email
    this.phone = user.phone    
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
        this.$store.commit('information/close')
        this.$store.commit('loggedUser/open')
        this.error = res.data.message
        this.$store.dispatch('auth/me')
      } catch (e) {
        // this.error = e.response.data.message
        this.error = ''
      }
    }
  }
};
</script>

<template>
  <div style="margin-top: 8rem;">
      <input  v-model="name" type="text" placeholder="First Name*" :class="{ errorBorder: this.nameErr != '' }"  class="input">

      <input v-model="lastName" type="text" placeholder="Last Name*" :class="{ errorBorder: this.lastNameErr != '' }" class="input">

      <input v-model="address1" type="text" placeholder="Street Name*" :class="{ errorBorder: this.address1Err != '' }" class="input">

      <input v-model="city" type="text" placeholder="City*" :class="{ errorBorder: this.cityErr != '' }" class="input">

      <input v-model="zip" type="text" placeholder="Zip/Postal Code*" :class="{ errorBorder: this.zipErr != '' }" class="input">

      <input v-model="email" type="text" placeholder="Email Adress*" :class="{ errorBorder: this.emailErr != '' }" title="" class="input">

      <input v-model="phone" type="text" placeholder="Phone Number*" :class="{ errorBorder: this.phoneErr != '' }" title="" class="input">

      <span v-if="error">{{ error }}</span>
      <span @click="changeInfo" class="final-btn flex center pointer">
        Save Changes
      </span>

  </div>
</template>

<style lang='scss' scoped>
#component {
  margin-left: 1rem;
  margin-bottom: 2rem;

}
.input {
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
  font-size: 2rem;
  width: calc(100% - 2rem);
  color: black;
  line-height: 2.2 !important; 
  margin-left: 1rem;
  height: 4rem;
  margin-bottom: 2rem;
  border: 0.2rem solid black;
  &::placeholder {
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    line-height: 2.2 !important; 
    opacity: 0.5;
	  -webkit-font-smoothing: none;
    font-size: 2rem;
    color: gray;
    
  }
  &:enabled {
    padding-left: 1rem;
    line-height: 2.2 !important; 
  }
}
.final-btn {
  width: calc(100% - 2rem);
  margin-left: 1rem;
  height: 4rem;
  font-size: 1.5rem;
  background-color: black;
  color: white;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
</style>