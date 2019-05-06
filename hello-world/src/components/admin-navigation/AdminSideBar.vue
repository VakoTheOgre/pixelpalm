<script>
export default {
    methods: {
        changeComponent() {
            this.$store.commit("admin/component",'admin-products-list')
        }
    }
}
</script>

<template>
    <div class="root flex-col AL-center">
        <span @click="changeComponent" class="link pointer">PRODUCTS</span>
        <span       class="link"></span>
        <span       class="link"></span>
    </div>    
</template>

<style lang="scss" scoped>
.root {
  width: 20rem;
  min-height: 100vh;
  border-right: 0.2rem solid black;
  position: fixed;
  top: 0;
  left: 0;
}
.link {
    padding: 1rem 0 1rem 0; 
    font-size: 1.8rem;
}
</style>
