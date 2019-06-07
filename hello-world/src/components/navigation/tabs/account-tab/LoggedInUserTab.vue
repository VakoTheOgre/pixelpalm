<script>
import Information from '@/components/navigation/tabs/account-tab/AccountInformation'
import Password from '@/components/navigation/tabs/account-tab/AccountPassword'
import History from '@/components/navigation/tabs/account-tab/AccountHistory'
export default {
    components: {
        Information,
        Password,
        History
    },
    data () {
        return {
            userStatusUpdate: false
        }
    },
    watch: {
        logged () {
            return !!this.$store.getters['auth/user']
        }
    },
    computed: {
        user () {
            return this.$store.getters['auth/user']
        },
        togglePass () {
            this.$router.push( '/users/change-password' )
        },
        toggleLogged () {
            this.$store.commit('loggedUser/open')
            this.$store.commit('password/close')
            this.$store.commit('history/close')
            this.$store.commit('information/close')
        },
        loggout () {
            this.$store.dispatch('auth/loggout')
            this.$store.commit('menuIcon/open')
            this.$store.commit('accountIcon/close')
        }
    }
}
</script>

<template>
<div>


<div @click="toggleLogged" class="name-wrapper flex pointer JF-spaceBE">
    <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/account-logged-in-icon.svg">
    <span class="username flex AL-center"> {{ user.name }} </span>
    <img @click="loggout" src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/logout.svg">
</div>
<div v-if="logged" class="logged-root flex-col">
    <span class="option-span">ACCOUNT INFORMATION</span>
    <div @click="toggleInfo" class="option-btn flex center pointer">
        VIEW DETAILS
    </div>
    <hr class="hr">
    <span class="option-span">ACCOUNT HISTORY</span>
    <div @click="toggleHistory" class="option-btn flex center pointer">
        SHOW ORDERS
    </div>
    <hr class="hr">
    <span class="option-span">ACCOUNT PASSWORD</span>
    <div @click="togglePass" class="option-btn flex center pointer">
        CHANGE PASSWORD
    </div>

</div>
<information v-if="info"></information>
<password v-if="pass"></password>
<history v-if="history"></history>
</div>
</template>

<style lang="scss" scoped>

.logged-root {
  // background-color: white;
  width: 33rem;
  margin-top: 1.6rem;
  background-color: white;
  min-height: calc(100vh - 12.8rem);
  max-height: 100%;
  overflow-x: hidden;
  // height: 100%;
  position: absolute;
  z-index: 5;
  left: 0;
}
.name-wrapper {
    width: calc(100% - 2rem);
    margin-left: 1rem;
    padding-top: 1rem;
}
.username {
    font-size: 1.3rem;
    font-family: 'Pixelpalm-category-font';
    text-rendering: geometricPrecision;
    font-smooth: never;
	-webkit-font-smoothing: none;
}
.option {
    &-span {
        font-family: 'Pixelpalm-category-font';
        text-rendering: geometricPrecision;
        font-smooth: never;
        -webkit-font-smoothing: none;
        color: black;
        width: 27rem;
        margin-left: 1rem;
        padding-top: 4rem;
        font-size: 1rem;
        
    }
    &-btn {
        font-family: 'Pixelpalm-category-font';
        text-rendering: geometricPrecision;
        font-smooth: never;
        -webkit-font-smoothing: none;
        color: white;
        background-color: black;
        font-size: 1.5rem;
        width: calc(100% - 2rem);
        height: 4rem;
        margin-left: 1rem;
        margin-bottom: 3rem;
        margin-top: 1rem
    }
}
.hr {
    widows: 100%;
    border-bottom: 0.1rem solid black;
}
@media only screen and (max-width: 1200px) {

.logged-root {
  // background-color: white;
  width: 100vw;
  margin-top: 0;
  background-color: white;
  min-height: calc(100vh - 12.8rem);
  max-height: 100%;
  overflow-x: hidden;
  // height: 100%;
  position: absolute;
  left: 0;
}
.name-wrapper {
    width: calc(100% - 2rem);
    margin-left: 1rem;
    padding-top: 1rem;
}
.username {
    font-size: 1.3rem;
    font-family: 'Pixelpalm-category-font';
    text-rendering: geometricPrecision;
    font-smooth: never;
	-webkit-font-smoothing: none;
}
.option {
    &-span {
        font-family: 'Pixelpalm-category-font';
        text-rendering: geometricPrecision;
        font-smooth: never;
        -webkit-font-smoothing: none;
        color: black;
        width: calc(100% - 2rem);
        margin-left: 1rem;
        padding-top: 4rem;
        font-size: 1rem;
        
    }
    &-btn {
        font-family: 'Pixelpalm-category-font';
        text-rendering: geometricPrecision;
        font-smooth: never;
        -webkit-font-smoothing: none;
        color: white;
        background-color: black;
        font-size: 1.5rem;
        width: calc(100% - 2rem);
        height: 4rem;
        margin-left: 1rem;
        margin-bottom: 3rem;
        margin-top: 1rem
    }
}
.hr {
    widows: 100%;
    border-bottom: 0.1rem solid black;
}
}
</style>