<script>
export default {

  data () {
    return {
      filteredItems: []
    }
  },

  computed: {
        accountState() {
            return this.$store.getters['accountIcon/accountState']
        },
        socialsState() {
        return this.$store.getters['socialIcons/socialsState']
        },
        accountIcon() {
            if(!this.userSignedIn) {
                let accountIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/login-icon.svg"

                return accountIcon
            } else if (!this.accountState && this.userSignedIn) {
                let accountIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/account-logged-in-icon.svg"

                return accountIcon 
            }
        },
        userSignedIn () {
        return !!this.$store.getters['auth/user']
        }
    },
    methods: {
        toggleAccount() {
            if(this.accountState) {
                this.$store.commit("accountIcon/close")
            } else {
                this.$store.commit("accountIcon/open")
                this.$store.commit("exploreIcon/close")
                this.$store.commit("searchIcon/close")
                this.$store.commit("menuIcon/close")
                this.$store.commit("cartIcon/close")
                this.$store.commit("legalsIcon/close")
                this.$store.commit('accountIcon/setCrumbs', ['ACCOUNT'])
                
            }
        },
        toggleSocials() {
            
            if(this.socialsState) {
                this.$store.commit('socialIcons/close')
            } else {
                this.$store.commit('socialIcons/open')
            }
        },

      search(e) {
        if (e.target.value == "") {
          this.filteredItems = []
          return
        }
        this.filteredItems = this.$store.getters['products/getAllProducts'].filter(product => {
          const matchesName = product.name.toLowerCase().includes(e.target.value.toLowerCase())
          let matchesColor = false
          let matchesCategory = false
          for (let variant of product.variants) {
            if (variant.color.toLowerCase().includes(e.target.value.toLowerCase())) {
              matchesColor = true
              break
            }
          }
          if (product.subcategory.toLowerCase().includes(e.target.value.toLowerCase())) {
            matchesCategory = true
            
          }
          if (matchesName || matchesColor || matchesCategory) {
            return true
          } else {
            return false
          }
        })
      },

      clicked(item) {
        this.$router.push(`/shop/${item.subcategory.toLowerCase()}/${item._id}`)
        this.$store.commit("menuIcon/close")
        this.$store.commit("accountIcon/setCrumbs", null)
        this.form.reset()
      }
    }
}
</script>

<template>
    <div class="root-search flex JF-spaceBE AL-center">
        <img @click="toggleAccount" :src="accountIcon" alt="login" class="user-icon pointer">
        <div class="search-wrapper flex JF-spaceBE">
            <input @input="search" @focus="toggleSocials" @blur="toggleSocials" type="text" placeholder="Enter Keyword" class="search-input">
            <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/search_icon_mobile.svg" alt="search" class="search-icon">
        </div>
        <div v-if="filteredItems.length" class="dropdown">
            <div @click="clicked(item)" :key="index" v-for="(item, index) in filteredItems" class="item flex pointer AL-center">
                <img :src="item.images[0]" class="thumb">
                <span style="margin-top: 0.2rem;">{{ item.name }}</span>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.thumb {
  height: 3.9rem;
  width: 3.9rem;
  margin-right: 1rem;
}
.root-search
 {
    width: 100vw;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 7rem 0 0 0 ;
    background-color: white;
    z-index: 10;
    position: absolute;
    top: 0;
    left: 0;
}
.search {
    &-wrapper {
        height: 3.1rem;
        border: 0.2rem solid black;
        width: calc(100vw - 3rem);
        margin-left: 1rem;
        
    }
    &-input {
        height: 2.6rem;
        border: none;
        width: 100%;
        font-size: 2rem;
        padding-top: 0.25rem;
        font-family: 'Pixelpalm Pro-Input';
        text-rendering: geometricPrecision;
        font-smooth: never;
        -webkit-font-smoothing: none;
        &:focus {
            outline-color: transparent;
            outline-width: 0;
        }
        font-size: 2rem;
        line-height: 0.7;
        color: black;
        font-family: 'Pixelpalm Pro-Input';
        text-rendering: geometricPrecision;
        font-smooth: never;
        -webkit-font-smoothing: none;
        &::placeholder {
          color: gray;
          opacity: 0.5;
          font-family: 'Pixelpalm Pro-Input';
          text-rendering: geometricPrecision;
          font-smooth: never;
          -webkit-font-smoothing: none;
        }
        &:enabled {
            padding-left: 1rem;
            color: black;
            
        }
    }
    &-icon {
        padding-right: 0.4rem;
    } 

}
.user-icon {
    width: 3rem; 
    height: 3rem;
}
.item {
  width: 100%;
  height: 4rem;
  font-size: 2rem;
  color: black;
  border-bottom: 0.1rem solid black;
  border-right: 0.1rem solid black;
  white-space: nowrap;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
  padding-right: 5rem;
  &:first-of-type {
    border-top: 0.1rem solid black;
  }
}
.dropdown {
  min-height: 100vh;
  max-height: 812px;
  width: calc(100vw - 2rem);
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  top: 5.3rem;
  left: 1rem;
  background-color: white;
  z-index: 2;
}
</style>
