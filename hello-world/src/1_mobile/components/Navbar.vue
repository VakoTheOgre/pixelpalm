<script>
import MenuTab from './menu-tabs/MenuTab'
import ExploreTab from './menu-tabs/ExploreTab'
export default {
    components: {
        MenuTab,
        ExploreTab
    },
    data() {
        return {
            compassPosition: 'menu',
            compassText: 'FREE WORLD WIDE SHIPPING FOR ALL ORDERS ABOVE $100'
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
        compassController() {
            if(!this.menuState) {
                this.compassPosition = 'menu'
                this.compassText = 'FREE WORLD WIDE SHIPPING FOR ALL ORDERS ABOVE $100'
            } else if(!this.exploreState) {
                this.compassPosition = 'explore'
                this.compassText = 'THE STUDIO'
            } else if(!this.accountState) {
                this.compassPosition = 'account'
                this.compassText = 'ACCOUNT'
            } else if(!this.cartState) {
                this.compassPosition = 'cart'
                this.compassText = 'FREE WORLD WIDE SHIPPING FOR ALL ORDERS ABOVE $100'
            }
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
        },
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
        }
    }
}
</script>

<template>
    <div class="root">
        <div class="menu-wrapper flex JF-spaceBE AL-center">
            <img @click="toggleMenu" :src="menuIcon"       title="Menu"    alt="MENU" class="menu-burger pointer">
            <img @click="toggleCart" :src="cartIcon"       title="Cart"    alt="CART" class="menu-cart pointer">
        </div>
        <div class="compass flex center">
            <span class="compass-text"> {{ compassText }} </span>
        </div>
        <menu-tab v-if="this.menuState"></menu-tab>
        <explore-tab v-else-if="this.exploreState"></explore-tab>
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
.compass {
    width: 100vw;
    background-color: black;
    height: 2rem;
    color: white;
    &-text {
        margin: 0;
        padding: 0;
    }
}
</style>
