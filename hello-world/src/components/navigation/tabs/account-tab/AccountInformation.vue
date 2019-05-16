<script>
import autocomplete from '../../../store/Autocomplete'
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
        let res = this.$axios.put(`/user/edit/${this.$store.getters['auth/user']._id}`, {
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
        this.error = e.response.data.message
      }
    }
  }
};
</script>

<template>
  <div>

      <input  v-model="name" type="text" placeholder="FIRSTNAME*" :class="{ errorBorder: this.nameErr != '' }"  class="input">

      <input v-model="lastName" type="text" placeholder="LASTNAME*" :class="{ errorBorder: this.lastNameErr != '' }" class="input">

      <input v-model="address1" type="text" placeholder="STREET NAME*" :class="{ errorBorder: this.address1Err != '' }" class="input">

      <input v-model="city" type="text" placeholder="CITY*" :class="{ errorBorder: this.cityErr != '' }" class="input">

      <input v-model="zip" type="text" placeholder="ZIP/POSTAL CODE*" :class="{ errorBorder: this.zipErr != '' }" class="input-">

      <autocomplete @selectedCountry="function (e) { country = e }" :country="country" :type="'country'"></autocomplete>
      <!-- <autocomplete :state="state" :type="'state'"></autocomplete> -->

      <input v-model="email" type="text" placeholder="EMAIL ADRESS*" :class="{ errorBorder: this.emailErr != '' }" title="" class="input">

      <input v-model="phone" type="text" placeholder="PHONE NUMBER*" :class="{ errorBorder: this.phoneErr != '' }" title="" class="input">

      <span v-if="error">{{ error }}</span>
      <button @click="changeInfo" class="final-btn flex center">
        <span>Change Information</span>
      </button>

  </div>
</template>

<style lang='scss' scoped>
.input {
  
}
</style>