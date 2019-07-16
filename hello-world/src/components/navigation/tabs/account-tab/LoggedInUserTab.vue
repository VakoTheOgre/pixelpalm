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

    logged() {
       return this.$store.getters['loggedUser/loggedState']
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

        history () {
            return this.$store.getters['history/historyState']
        },
        
        loggedTab () {
          return this.$store.getters['loggedUser/loggedState']
        },
        
        pass () {
            return this.$store.getters['password/passState']
        },

        info () {
            return this.$store.getters['information/infoState']
        },

        logged () {
            return !!this.$store.getters['auth/user']
        },

        name() {
            let shortName = this.user.name.split(" ")
            return shortName
        }
    },
    methods: {
      togglePass () {
            this.$router.push( '/users/change-password' )
            this.$store.commit('accountIcon/close')
        },

        toggleInfo () {
            this.$store.commit('information/open')
            this.$store.commit('loggedUser/close')
        },
        
        toggleLogged () {
            this.$store.commit('loggedUser/open')
            this.$store.commit('password/close')
            this.$store.commit('history/close')
            this.$store.commit('information/close')
        },
        toggleHistory () {
            this.$store.commit('history/open')
            this.$store.commit('password/close')
            this.$store.commit('information/close')
            this.$store.commit('loggedUser/close')
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
<div v-if="logged">
  <div @click="toggleLogged" class="name-wrapper flex pointer JF-spaceBE">
      <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/account-logged-in-icon.svg">
      <span class="username flex AL-center"> {{ name[0] }} </span>
      <img @click="loggout" src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/logout.svg">
  </div>
  <div v-if="logged && loggedTab" class="logged-root flex-col">
      <span class="option-span">ACCOUNT INFORMATION</span>
      <div @click="toggleInfo" class="option-btn flex center pointer">
          VIEW DETAILS
      </div>
      <div class="hr"></div>
      <span class="option-span">ACCOUNT HISTORY</span>
      <div @click="toggleHistory" class="option-btn flex center pointer">
          SHOW ORDERS
      </div>
      <div class="hr"></div>
      <span class="option-span">ACCOUNT PASSWORD</span>
      <div @click="togglePass" class="option-btn flex center pointer">
          EDIT PASSWORD
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
    width: calc(100% - 3rem);
    padding-left: 3rem;
    padding-top: 2rem;
    position: relative;
}
.username {
    font-size: 2rem;
    font-family: 'Pixelpalm-text';
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
        width: 25rem;
        margin-left: 3rem;
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
        width: calc(100% - 6rem);
        height: 4rem;
        margin-left: 3rem;
        margin-bottom: 3rem;
        margin-top: 1rem
    }
}
.hr {
    width: 27rem;
    margin-left: 3rem;
    border-bottom: 0.2rem solid black;
}
@media only screen and (max-width: 1200px) {
.name-wrapper {
    width: 100%;
    padding-left: 0;
    padding-top: 2rem;
}

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
    font-size: 2rem;
    padding-top: 1.7rem;
    font-family: 'Pixelpalm-text';
    text-rendering: geometricPrecision;
    font-smooth: never;
	-webkit-font-smoothing: none;
    position: absolute;
    left: 4rem;
    top: 50%;
    transform: translateY(-50%);
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
    border-bottom: 0.2rem solid black;
}
}
</style>