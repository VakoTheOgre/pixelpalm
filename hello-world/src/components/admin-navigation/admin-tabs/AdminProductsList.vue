<script>
import Cookie from 'js-cookie'
export default {
    
    methods: {
        changeComponent(product) {
            this.$store.commit("admin/component",'admin-product-template')
            this.$store.commit("admin/currentProduct",product)
        },
        async deleteProduct(product) {
            try {
                await this.$axios.delete(`admin/products/${product._id}`, {headers: { 'Authorization': `Bearer ${Cookie.get('token')}` } })
                this.$store.dispatch('admin/getProducts')
            } catch(e) {
                console.log(e)
            }
        }
    },
    computed: {
        products () {
            return this.$store.getters['admin/products']
        }
    }

}
</script>

<template>
    <div class="root flex-col center">
        <div  :key="index" v-for="(product, index) in products" class="root-product flex JF-spaceBE AL-center pointer">
            <img :src="product.images[0]" class="thumbnail">
            <span class="title">{{ product.name }}</span>
            <button @click="changeComponent(product)" class="edit-btn pointer">
                EDIT
            </button>
            <button  @click="deleteProduct(product)" class="delete-btn pointer">
                DELETE
            </button>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.root {
    min-width: 100vw;
    min-height: 100vh;
    width: 100%;
    height: 100%;
}
.root-product {
    border: 0.2rem solid black;
    min-width: 80rem;
    margin-bottom: 1rem;
    font-size: 2.4rem;
    text-align: left;
    height: 6rem;
}
.thumbnail {
    width: 6rem;
    height: 6rem;
    border: none;
}
.title {
    text-align: left;
    min-width: 40rem;
}
.delete-btn {
    height: 2.5rem;
    background-color: red;
    font-size: 1.6rem;
    border: none;
    color: white;
    padding: 0.5rem;
    font-weight: bold;
    margin-right: 1rem;
}
.edit-btn {
    font-weight: bold;
    font-size: 1.8rem;
    height: 2.5rem;
    background-color: black;
    color: white;
    border: none;
    padding: 0.5rem;
}
</style>
