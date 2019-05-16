<script>
export default {
    data() {
        return {
            sizes: {
                s: {
                unchecked: "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/small.svg",
                checked: "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/small-chosen.svg"
                },
                m: {
                    unchecked: "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/medium.svg",
                    checked: "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/medium-chosen.svg"
                },
                l: {
                    unchecked: "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/large.svg",
                    checked: "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/large-chosen.svg"
                },
                xl: {
                    unchecked: "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/extra-large.svg",
                    checked: "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/extra-large-chosen.svg"
                },
                xxl: {
                    unchecked: "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/extra-extra-large.svg",
                    checked: "https://static-pixelpalm.sfo2.cdn.digitaloceanspaces.com/static/svgs/extra-extra-large-chosen.svg"
                }
            },
            checked: [false,false,false,false,false],
        }
    },

    computed: {
        
    },

    methods: {
      
        check (what) {
            (function(v) {
                v.checked.forEach((el, i) => {
                    v.checked[i] = false
                })
            })(this)
            this.checked[what] = true 
            this.$emit('sizeSelect', Object.keys(this.sizes)[what])
            this.ifCheck()
        },

        ifCheck () {
            let keys = Object.keys(this.sizes)
            this.checked.forEach((el, i) => {
                let key = keys[i]
                console.log(key)
                if (this.checked[i]) {
                    document.getElementById(`size-${i}`).src = this.sizes[key].checked
                } else {
                    document.getElementById(`size-${i}`).src = this.sizes[key].unchecked
                }
            })
        }
    },

    mounted () {
        this.ifCheck()
    }
}
</script>

<template>
    <div class="sizes flex JF-spaceBE AL-center">
        <img id="size-0" @click="check(0)"  alt="S" class="pointer">
        <img id="size-1" @click="check(1)"  alt="M" class="pointer">
        <img id="size-2" @click="check(2)"  alt="L" class="pointer">
        <img id="size-3" @click="check(3)"  alt="XL" class="pointer">
        <img id="size-4" @click="check(4)"  alt="XXL" class="pointer">
    </div>
</template>

<style lang="scss" scoped>
.sizes {
  width: 27rem;
//   border: 0.1rem solid black;
  margin-bottom: 2rem;
}
@media only screen and (max-width: 1200px) {
    .sizes {
        margin-left: 50%;
        transform: translateX(-50%);
        width: calc(70% - 2rem);
    }
}
</style>
