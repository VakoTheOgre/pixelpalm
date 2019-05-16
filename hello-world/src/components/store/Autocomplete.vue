<style lang="scss" scoped>
.dropdown {
  max-height: 100px;
  max-width: 27rem;
}
.dropdown-inputs {
  width: 27rem !important;
  border: 0.2rem solid black;
  height: 4rem;
  font-size: 2rem;
  color: black;
  opacity: 1;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
  ::placeholder {
    font-size: 2rem;
    color: gray;
    opacity: 1;
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
  }
  &:enabled {
    padding-left: 1rem;
  }
}
.root-dropdowns {
  width: 27rem !important;
}
</style>

<template>
  <div class="root-dropdowns">
    <input v-model="userInput" :placeholder="type.toUpperCase() + '*'" type="text" class="dropdown-inputs">
    <div class="dropdown">
      <div @click="selected(item)" v-for="(item, index) in filteredItems" :key="index">
        <img :src="item.flag">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },

    country: {
      type: String,
      required: false
    },

    state: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      items: [],
      filteredItems: [],
      userInput: ""
    };
  },

  methods: {
    selected(item) {
      this.$emit("selectedCountry", item.alpha2Code);
    }
  },

  watch: {
    userInput(v) {
      if (!v) {
        this.filteredItems = [];
        return;
      }
      this.filteredItems = this.items.filter(item => {
        return item.name.includes(v);
      });
    }
  },

  async mounted() {
    if (this.type === "country") {
      let res = await this.$axios.get(
        "https://restcountries.eu/rest/v2/all?fields=name;alpha2Code;flag;"
      );
      console.log(res);
      this.items = res.data;
    }
    if (this.country) {
      this.userInput = this.country
    }
  }
};
</script>
