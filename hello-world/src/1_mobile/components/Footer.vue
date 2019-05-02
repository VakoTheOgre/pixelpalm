<script>
export default {
data() {
    return {
        email: '',
        emailErr: ''
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
}
</script>

<template>
    <div class="root flex-col AL-center">
        <h3 class="heading">NEWSLETTER</h3>
        <div class="email-wrapper flex JF-spaceBE AL-center">
            <input v-model="email" type="email" placeholder="Enter your email adress" class="newsletter-input">
            <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/newsletter-icon.svg" alt="Envelope" class="newsletter-icon">
        </div>
        <div class="socials flex JF-spaceBE">
            <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/pinterest-icon.svg" alt="Pinterest-icon" class=" left pointer">
            <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/twitter-icon.svg" alt="Twitter-icon" class=" left pointer">
            <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/facebook-icon.svg" alt="Facebook-icon" class=" pointer">
            <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/instagram-icon.svg" alt="Instagram-icon" class=" right pointer">
        </div>
        <div class="rights">
            2019 PIXELPALM Trading Limited
        </div>
    </div>
</template>

<style lang="scss" scoped>
.root {
    width: 100vw;
    background-color: white;
    border-top: 0.2rem solid black;
}
.heading {
    width: 100vw;
    text-align: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.email-wrapper {
    border: 0.2rem solid black;
    margin-bottom: 2rem;
    width: calc(100vw - 2rem);
}
.newsletter {
    &-input {
        width: 100%;
        height: 4rem;
        border: none;
        &:enabled {
            padding-left: 1rem;
        }
    }
    &-icon {
        padding-right: 0.4rem;
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
}
</style>
