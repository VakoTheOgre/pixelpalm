<script>
export default {
    computed: {
        accountState() {
            return this.$store.getters['accountIcon/accountState']
        },
        
        socialsState() {
        return this.$store.getters['socialIcons/socialsState']
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
                this.$store.commit("cartIcon/close")
                this.$store.commit("menuIcon/close")
                this.$store.commit("legalsIcon/close")
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
        console.log(e)
      }
    }
}
</script>

<template>
    <div class="root-search flex JF-spaceBE AL-center">
        <img @click="toggleAccount" src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/login-icon.svg" alt="login" class="user-icon pointer">
        <div class="search-wrapper flex JF-spaceBE">
            <input @change="search" @focus="toggleSocials" @blur="toggleSocials" type="text" placeholder="SEARCH" class="search-input">
            <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/search_icon_mobile.svg" alt="search" class="search-icon">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.root-search
 {
    width: 100vw;
    padding-top: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin: 7.4rem 0 0 0 ;
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
        &:focus {
            outline-color: transparent;
            outline-width: 0;
        }
        &::placeholder {
            color: black;
            text-rendering: geometricPrecision;
            font-family: 'Pixelpalm-category-font';
            font-smooth: never;
            -webkit-font-smoothing: none;
            font-size: 1rem !important;
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
</style>
