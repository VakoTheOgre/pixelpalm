<script>
import { mapGetters } from 'vuex'
import MenuTab from './menu-tabs/MenuTab'
import ExploreTab from './menu-tabs/ExploreTab'
import GrayAreaTab from './menu-tabs/GrayAreaTab'
import AccountTab from './menu-tabs/account/AccountTab'
import Compass from './NavCompass'
import SearchBar from './SearchBar'
import CartTab from './menu-tabs/CartTab'
export default {
    components: {
        MenuTab,    
        ExploreTab,
        GrayAreaTab,
        Compass,
        SearchBar,
        AccountTab,
        CartTab
    },
    computed: {
        ...mapGetters({
        cart: 'cart/getCart',
        amount: 'cart/getAmount'
        }),
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
    methods: {
        toggleMenu() {
            if(this.menuState) {
                this.$store.commit("menuIcon/close")
                this.$store.commit("accountIcon/setCrumbs", null)
            } else {
                this.$store.commit("menuIcon/open")
                this.$store.commit("exploreIcon/close")
                this.$store.commit("searchIcon/close")
                this.$store.commit("accountIcon/close")
                this.$store.commit("cartIcon/close")
                this.$store.commit("legalsIcon/close")
                this.$store.commit("accountIcon/setCrumbs", ['FREE SHIPPING, NO MINIMUM FOR PIXELPALM MEMBERS.'])
            }
        },
        toggleCart() {
            if(this.cartState) {
                this.$store.commit("cartIcon/close")
                this.$store.commit("accountIcon/setCrumbs", null)
            } else {
                this.$store.commit("cartIcon/open")
                this.$store.commit("exploreIcon/close")
                this.$store.commit("searchIcon/close")
                this.$store.commit("accountIcon/close")
                this.$store.commit("menuIcon/close")
                this.$store.commit("legalsIcon/close")
                this.$store.commit("accountIcon/setCrumbs", ['CART'])
            }
        }
    }
}
</script>

<template>
    <div class="root">
        <div class="menu-wrapper flex JF-spaceBE AL-center">
            <img @click="toggleMenu" :src="menuIcon"  title="Menu"    alt="MENU" class="menu-burger pointer">
            <a href="/" class="text-logo pointer">
              <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/pixelpalm_logo_big.svg"  alt="PIXELPALM-LOGO" class="text-logo pointer">
            </a>
            <div class="menu-cart pointer flex center">
                <p v-if="!this.cartState" class="cart-nums flex center">{{ this.amount }}</p>
                <img @click="toggleCart" :src="cartIcon"  title="Cart" alt="CART" class="cart-img">
            </div>
        </div>
        <compass></compass>
        <transition name="slideIn2">
            <search-bar v-if="this.menuState || this.exploreState || this.legalsState"></search-bar>
        </transition>
        <transition name="slideIn">
            <menu-tab v-if="this.menuState"></menu-tab>
            <explore-tab v-else-if="this.exploreState"></explore-tab>
            <gray-area-tab v-else-if="this.legalsState"></gray-area-tab>
            <account-tab v-else-if="this.accountState"></account-tab>
            <cart-tab v-else-if="this.cartState"></cart-tab>
        </transition>
        
    </div>
</template>

<style lang="scss" scoped>
.root {
    width: 100vw;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 3;
    background-color: white;
}
.menu {
    &-wrapper {
        width: 100vw;
        height: 5rem;
        z-index: 10;
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
        position: relative;
        z-index: 1;
    }
}
.menu-cart img {
    position: absolute;
}
@media not all and (min-resolution:.001dpcm)
{ @supports (-webkit-appearance:none) {

    .cart-nums { 

        padding-top: 0.2rem;

    }
}}
.cart-nums{
    font-size: 1rem;
    // line-height: 0.7;
    // z-index: -1;
    font-family: 'iphoneCart';
    text-rendering: unset !important;
    font-smooth: never;
    -webkit-font-smoothing: none;
    -webkit-font-feature-settings: "kern";

}

.text-logo {
    height: 3rem;
    width: auto;
}
.slideIn-enter-active,
.slideIn-leave-active,
.slideIn2-enter-active,
.slideIn2-leave-active {
  transform: translateX(0) scale(1);
  transition: all 0.3s;
}
.slideIn-enter,
.slideIn-leave-to,
.slideIn2-enter,
.slideIn2-leave-to {
  transform: translateX(-100%);
  transition: all 0.3s;
}
</style>
