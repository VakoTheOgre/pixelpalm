<script>
import StoreTemplate from '@/components/store/StoreTemplate'
import ppla from '@/components/navigation/PolicesLetters'
export default {
    components: {
        StoreTemplate,
        ppla
    }
}
</script>

<template>
<div class="category-root flex">
    <store-template />
    <ppla v-if="device == 'desktop'"></ppla>
</div>
</template>

<style lang="scss" scoped>
.category-root {
  padding-top: 0.3rem;
}
</style>
