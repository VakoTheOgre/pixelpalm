<style lang="scss" scoped>
.dropdown {
  max-height: 30rem;
  width: calc(100% - 2rem);
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  background-color: white;
}
.dropdown-inputs {
  width: calc(100% - 2rem);
  border: 0.2rem solid black;
  height: 4rem;
  font-size: 2rem;
  color: black;
  opacity: 0.5;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
  ::placeholder {
    font-size: 2rem;
    color: gray;
    opacity: 0.5;
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
  width: 100%;
}
.item {
  width: 27rem;
  font-size: 2rem;
  color: black;
  opacity: 0.5;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
  padding-right: 5rem;
}
.flag {
  height: 3rem;
  width: 6rem;
}
</style>

<template>
  <div class="root-dropdowns">
    <input v-if="!selectedSomething" v-model="userInput" :placeholder="type + '*'" type="text" class="dropdown-inputs">
    <input v-else @input="tryAgain" v-model="userInput2" :placeholder="type + '*'" type="text" class="dropdown-inputs">
    <div v-if="filteredItems.length" class="dropdown">
      <div @click="selected(item)" v-for="(item, index) in filteredItems" :key="index" class="item flex JF-spaceBE">
        <img :src="item.flag" class="flag">
        {{ item.alpha2Code }}
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
      selectedSomething: false,
      userInput: "",
      userInput2: ""
    };
  },

  methods: {
    selected(item) {
      this.selectedSomething = true
      this.userInput2 = item.name
      this.$emit("selectedCountry", item.alpha2Code);
      this.filteredItems = []
    },

    tryAgain () {
      this.selectedSomething = false
      this.userInput = this.userInput2
    }
  },

  watch: {
    userInput(v) {
      if (!v) {
        this.filteredItems = [];
        return;
      }
      this.filteredItems = this.items.filter(item => {
        return item.name.toLowerCase().includes(v.toLowerCase());
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
