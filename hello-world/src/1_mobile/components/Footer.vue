<script>
export default {
data() {
    return {
        email: '',
        emailErr: '',
        loading: false
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
    submitMsg() {
      this.loading = true
      setTimeout(() => {
        this.loading = false
        this.sent = true
        setTimeout(() => {
          this.$router.push('/')
        },3000)
      },3000)
      
    },

     routePush(payload) {
       if ( payload == 'pp' ) {
        this.$router.push('/grayarea/policies')
       } else {
         this.$router.push('/grayarea/legal')
       }
       if ( this.device == 'desktop' ) {
        this.$store.commit("accountIcon/close")
        this.$store.commit("exploreIcon/close")
        this.$store.commit("searchIcon/close")
        this.$store.commit("menuIcon/close")
        this.$store.commit("cartIcon/close")
        this.$store.commit("legalsIcon/open")
       }
     }
  }
}
</script>

<template>
    <div class="root flex-col AL-center">
        <h3 class="heading">NEWSLETTER</h3>
        <div class="email-wrapper flex JF-spaceBE AL-center">
            <input v-model="email" type="email" placeholder="Email Address" class="newsletter-input">
            <img @click="submitMsg" src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/newsletter-icon.svg" alt="Envelope" class="newsletter-icon">
        </div>
        <div class="socials flex JF-spaceBE">
          <a target="_blank" href="https://www.pinterest.com/pixelpalm/">  <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/pinterest-icon.svg" alt="Pinterest-icon" class="left pointer"></a>
          <a target="_blank" href="https://twitter.com/pixelpalm">         <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/twitter-icon.svg" alt="Twitter-icon" class="left pointer"></a>
          <a target="_blank" href="https://www.facebook.com/pixelpalm.co/"><img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/facebook-icon.svg" alt="Facebook-icon" class="pointer"></a>
          <a target="_blank" href="https://www.instagram.com/pixelpalm/">  <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/instagram-icon.svg" alt="Instagram-icon" class="right pointer"></a>
        </div>
        <div class="rights">
            &copy;2019 PIXELPALM. All rights reserved.
        </div>
        <div class="terms-wrap flex JF-spaceBE">
          <span @click="routePush('pp')" class="terms pointer">PP</span>
          <span @click="routePush('la')" class="terms pointer">LA</span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.terms {
  &-wrap {
    width: 5.5rem;
    padding-bottom: 0.6rem;
  }
  font-size: 1rem;
  user-select: none;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
.root {
    width: 100vw;
    background-color: white;
    border-top: 0.2rem solid black;

}
.heading {
    width: 100vw;
    text-align: center;
    font-size: 1.5rem;
    padding-top: 3rem;
    padding-bottom: 1rem;
    font-family: 'Pixelpalm-category-font';
    text-rendering: geometricPrecision;
    font-smooth: never;
	-webkit-font-smoothing: none;
}
.email-wrapper {
    border: 0.2rem solid black;
    margin-bottom: 2rem;
    width: calc(100vw - 2rem);
}
.newsletter {
    &-input {
        height: 4rem; 
        border: none;
        background-color: transparent;
        width: calc(100% - 2rem);
        line-height: 2.2 !important; 
        font-size: 2rem;
          color: black;
          font-family: 'Pixelpalm Pro-Input';
          text-rendering: geometricPrecision;
          font-smooth: never;
          -webkit-font-smoothing: none;
          &::placeholder {
              font-size: 2rem;
              line-height: 2.2 !important; 
              color: gray;
              opacity: 0.5;
              font-family: 'Pixelpalm Pro-Input';
              text-rendering: geometricPrecision;
              font-smooth: never;
              -webkit-font-smoothing: none;
            }
        &:enabled {
          padding-left: 1rem;
          line-height: 2.2 !important; 
        }
    }
    &-icon {
        padding-right: 0rem;
        margin-right: 0.4rem;
        padding-left: 0.4rem;
    }
}
.socials {
    max-width: 15rem;
}
.left {
    padding-right: 1rem;
}
.right {
    padding-left: 1rem;
}
.rights {
    width: 100vw;
    text-align: center;
    padding-bottom: 0.5rem;
    margin-top: 2rem; 
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
	-webkit-font-smoothing: none;
}
</style>
