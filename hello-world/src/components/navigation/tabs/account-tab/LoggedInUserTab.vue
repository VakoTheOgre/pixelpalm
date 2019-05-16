<script>
export default {
  computed: {
     user () {
         return this.$store.getters['auth/user']
      } 
    },
    methods: {
        info () {

        },
        orders () {

        },
        pass () {

        }
    }
}
</script>

<template>
<div class="logged-root flex-col">
    <div class="name-wrapper flex pointer">
        <img src="https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/account-logged-in-icon.svg">
        <span class="username flex AL-center"> {{ user.name }} </span>
    </div>
    <span class="option-span">ACCOUNT INFORMATION</span>
    <div @click="info" class="option-btn flex center pointer">
        VIEW DETAILS
    </div>
    <hr class="hr">
    <span class="option-span">ACCOUNT HISTORY</span>
    <div @click="orders" class="option-btn flex center pointer">
        SHOW ORDERS
    </div>
    <hr class="hr">
    <span class="option-span">ACCOUNT PASSWORD</span>
    <div @click="pass" class="option-btn flex center pointer">
        CHANGE PASSWORD
    </div>

</div>
</template>

<style lang="scss" scoped>

.logged-root {
  // background-color: white;
  width: 33rem;
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
    padding-left: 1rem;
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
</style>