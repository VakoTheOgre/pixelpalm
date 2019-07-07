<style lang="scss" scoped>
.dropdown {
  max-height: 30rem;
  width: 100%;
  max-width: 56rem;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  background-color: white;
  z-index: 3;
  border: 0.2rem solid black;
  border-top: none !important;
}
.dropdown-inputs {
  width: 27rem !important;
  border: 0.2rem solid black;
  height: 4rem;
  font-size: 2rem;
  color: black;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
  &::placeholder {
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
  width: 27rem !important;
}
.item {
  width: 100%;
  height: 4rem;
  font-size: 2rem;
  padding-left: 1rem;
  color: black;
  border-bottom: 0.1rem solid black;
  white-space: nowrap;
  font-family: 'Pixelpalm Pro-Input';
  text-rendering: geometricPrecision;
  font-smooth: never;
  -webkit-font-smoothing: none;
  padding-right: 5rem;
}
.flag {
  height: 3rem;
  border: 0.2rem solid black;
  width: 6rem;
}
@media only screen and (max-width: 1200px) {
  .root-dropdowns {
    width: calc(100vw - 2rem) !important;
  }
  .dropdown {
    max-height: 20rem;
    max-width: calc( 100vw - 2rem);
    width: calc( 100vw - 2rem);
    overflow-y: scroll;
    overflow-x: hidden;
    position: absolute;
    background-color: white;
    
  }
  .dropdown-inputs {
    max-width: auto;
    width: calc( 100vw - 2rem) !important;
    border: 0.2rem solid black;
    height: 4rem;
    font-size: 2rem;
    color: black;
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
    &::placeholder {
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
.mobile-input {
  &1 {
    margin-bottom: 2rem;
  }
}
}
</style>

<template>
  <div class="root-dropdowns">
    <input v-if="!selectedSomething" v-model="userInput" :placeholder="type + '*'" type="text" class="dropdown-inputs mobile-input1">
    <input v-else @input="tryAgain" v-model="userInput2" :placeholder="type + '*'" type="text" class="dropdown-inputs mobile-input2">
    <div v-if="filteredItems.length" class="dropdown">
      <div @click="selected(item)" v-for="(item, index) in filteredItems" :key="index" class="item flex pointer AL-center JF-spaceBE">
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
    if (this.type.toLowerCase() === "country") {
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
