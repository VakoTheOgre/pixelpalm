<script>
export default {
    computed: {
        accountState() {
            return this.$store.getters['accountIcon/accountState']
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
        } 
    }
}
</script>

<template>
    <div class="root flex JF-spaceBE AL-center">
        <img @click="toggleAccount" src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/login-icon.svg" alt="login" class="user-icon pointer">
        <div class="search-wrapper flex JF-spaceBE">
            <input type="text" placeholder="SEARCH" class="search-input">
            <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/search_icon_mobile.svg" alt="search" class="search-icon">
        </div>
    </div>
</template>

<style lang="scss" scoped>
.root {
    width: calc(100vw - 2rem);
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
        height: 3rem;
        border: 0.2rem solid black;
        width: calc(100vw - 3rem);
        margin-left: 1rem;
        
    }
    &-input {
        height: 2.6rem;
        border: none;
        width: 100%;
        &::placeholder {
            font-size: 1.4rem;
            font-weight: bold;
            color: black;
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
