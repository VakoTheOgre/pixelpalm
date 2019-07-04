<style lang="scss" scoped>
.dropdown {
  max-height: 30rem;
  max-width: 27rem;
  overflow-y: scroll;
  overflow-x: hidden;
  position: absolute;
  background-color: white;
  border: 0.2rem solid black;
  border-top: none !important;
  z-index: 2;
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
  &:disabled {
    padding-left: 1rem;
    background-color: white;
    // opacity: 0.3;
    border-color: rgba(0, 0, 0, 0.3)
  }
}
.root-dropdowns {
  width: 27rem !important;
}
.item {
  width: 27rem;
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
    &:disabled {
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
    <input v-if="!selectedSomething" :disabled="disabled" v-model="userInput" placeholder="State*" type="text" class="dropdown-inputs mobile-input1">
    <input v-else @input="tryAgain(false)" :disabled="disabled" v-model="userInput2" placeholder="State*" type="text" class="dropdown-inputs mobile-input1">
    <div v-if="filteredItems.length" class="dropdown">
      <div @click="selected(item)" v-for="(item, index) in filteredItems" :key="index" class="item flex pointer AL-center JF-spaceBE">
        {{ item.name }}
        {{ item.abbreviation }}
      </div>
    </div>
  </div>
</template>
<script>
import USSTATES from '../../helpers/states_us.json'
import AUSTATES from '../../helpers/states_ca.json'
import CASTATES from '../../helpers/states_au.json'
export default {
  props: {
    selectedCountry: {
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
      userInput2: "",
      needed: ['US', 'CA', 'AU']
    };
  },

  computed: {
    disabled () {
      if (!this.needed.find(el => el == this.selectedCountry)) {
        return true
      } else {
        return false
      }
    },
    us () {
      return USSTATES
    },

    ca () {
      return CASTATES
    },

    au () {
      return AUSTATES
    }
  },

  methods: {
    selected(item) {
      this.selectedSomething = true
      this.userInput2 = item.name
      this.$emit("selectedState", item.abbreviation);
      this.filteredItems = []
    },
    tryAgain (erase) {
      this.selectedSomething = false
      if(erase) {
        this.userInput = ''
      } else {
        this.userInput = this.userInput2
      }
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
    },

    selectedCountry(v, oldV) {
      console.log(v)
      this.tryAgain(true)
      switch(v) {
        case 'US':
          this.items = this.us
          break;
        case 'AU':
          this.items = this.au
          break;
        case 'CA':
          this.items = this.ca
          break;
      }
    }
  },

  async mounted() {
    
  }
};
</script>

