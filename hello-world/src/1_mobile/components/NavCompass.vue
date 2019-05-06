<script>
export default {
    props: {
        positions: {
            type: [String, Array]
        }
    }
}
</script>

<template>
    <div class="compass flex center">
        <span v-for="(position, index) in positions" :key="index" class="compass-text">  {{ position }} </span>
    </div>
</template>

<style lang="scss" scoped>
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
