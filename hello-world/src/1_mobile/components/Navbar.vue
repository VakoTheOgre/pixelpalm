<script>
import MenuTab from './menu-tabs/MenuTab'
import ExploreTab from './menu-tabs/ExploreTab'
import GrayAreaTab from './menu-tabs/GrayAreaTab'
import AccountTab from './menu-tabs/account/AccountTab'
import Compass from './NavCompass'
import SearchBar from './SearchBar'
export default {
    components: {
        MenuTab,    
        ExploreTab,
        GrayAreaTab,
        Compass,
        SearchBar,
        AccountTab
    },
    data() {
        return {
            compassPosition: 'FREE WORLDWIDE SHIPPING FOR ORDERS ABOVE $100'
        }
    },
    computed: {
        menuState() {
            return this.$store.getters['menuIcon/menuState']
        },
        exploreState() {
            return this.$store.getters['exploreIcon/exploreState']
        },
        accountState() {
            return this.$store.getters['accountIcon/accountState']
        },
        cartState() {
            return this.$store.getters['cartIcon/cartState']
        },
        legalsState() {
            return this.$store.getters['legalsIcon/legalsState']
        },
        
        menuIcon() {
            if(!this.menuState) {
                let menuIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/menu-icon.svg"

                return menuIcon
            } else {
                let menuIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/close-icon.svg"

                return menuIcon
            }
        },
        cartIcon() {
            if(!this.cartState) {
                let cartIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/cart-icon.svg"

                return cartIcon
            } else {
                let cartIcon = "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/close-icon.svg"
                
                return cartIcon
            }
        }
    },
    watch: {
        menuState: function() {
            if(this.menuState) {
                this.compassPosition = ['FREE WORLDWIDE SHIPPING FOR ORDERS ABOVE $100']
            } else if(!this.menuState && !this.exploreState && !this.legalsState && !this.accountState) {
                this.urlWatcher()
            }
        },
        exploreState: function() {
            if(this.exploreState) {
                this.compassPosition = ['THE STUDIO']
            } else if(!this.menuState && !this.exploreState && !this.legalsState && !this.accountState) {
                this.urlWatcher()
            }
        },
        legalsState: function() {
            if(this.legalsState) {
                this.compassPosition = ['GRAY AREA']
            } else if(!this.menuState && !this.exploreState && !this.legalsState && !this.accountState) {
                this.urlWatcher()
            }
        },
        accountState: function() {
            if(this.accountState) {
                this.compassPosition = ['ACCOUNT']
            } else if(!this.menuState && !this.exploreState && !this.legalsState && !this.accountState) {
                this.urlWatcher()
            }
        }
    },
    methods: {
        toggleMenu() {
            if(this.menuState) {
                this.$store.commit("menuIcon/close")
            } else {
                this.$store.commit("menuIcon/open")
                this.$store.commit("exploreIcon/close")
                this.$store.commit("searchIcon/close")
                this.$store.commit("accountIcon/close")
                this.$store.commit("cartIcon/close")
                this.$store.commit("legalsIcon/close")
            }
        },
        toggleCart() {
            if(this.cartState) {
                this.$store.commit("cartIcon/close")
            } else {
                this.$store.commit("cartIcon/open")
                this.$store.commit("exploreIcon/close")
                this.$store.commit("searchIcon/close")
                this.$store.commit("accountIcon/close")
                this.$store.commit("menuIcon/close")
                this.$store.commit("legalsIcon/close")
            }
        },
        urlWatcher() {
            let url = this.$route.fullPath
            let stripped = url.toUpperCase().split('/')
            stripped.splice(0, 1, 'HOME')   
            let i
            for (i = 0; i < stripped.length - 1; i++) {
                stripped[i] = stripped[i] + "/"   
            }
            this.compassPosition = stripped
        }
    },
    mounted() {
        this.urlWatcher()
    }
}
</script>

<template>
    <div class="root">
        <div class="menu-wrapper flex JF-spaceBE AL-center">
            <img @click="toggleMenu" :src="menuIcon"       title="Menu"    alt="MENU" class="menu-burger pointer">
            <img @click="toggleCart" :src="cartIcon"       title="Cart"    alt="CART" class="menu-cart pointer">
        </div>
        <compass :positions="this.compassPosition" ></compass>
        <transition name="slideIn2">
            <search-bar v-if="this.menuState || this.exploreState || this.legalsState"></search-bar>
        </transition>
        <transition name="slideIn">
            <menu-tab v-if="this.menuState"></menu-tab>
            <explore-tab v-else-if="this.exploreState"></explore-tab>
            <gray-area-tab v-else-if="this.legalsState"></gray-area-tab>
            <account-tab v-else-if="this.accountState"></account-tab>
        </transition>
        
    </div>
</template>

<style lang="scss" scoped>
.root {
    width: 100vw;
}
.menu {
    &-wrapper {
        width: 100vw;
        height: 5rem;
    }
    &-burger {
        width: 3rem;
        height: 3rem;
        margin-left: 1rem;
    }
    &-cart {
        width: 3rem;
        height: 3rem;
        margin-right: 1rem;
    }
}

.slideIn-enter-active,
.slideIn-leave-active,
.slideIn2-enter-active,
.slideIn2-leave-active {
  opacity: 1;
  transform: translateX(0) scale(1);
  transition: all 0.5s;
}
.slideIn-enter,
.slideIn-leave-to,
.slideIn2-enter,
.slideIn2-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  transition: all 0.5s;
}
</style>
