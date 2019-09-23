<script>
import Cookie from 'js-cookie'
import categories from '@/helpers/navigation.json'
export default {
  data() {
    return {
      subCategory: undefined,
      imagesToSend: [],
      editedImages: [],
      categories: categories,
      options: ['T-SHIRTS','TANKTOPS','HOODIES','SWEATERS','HATS&CAPS','BEANIES'],
      selectedOption: "T-SHIRTS",
      price: "",
      name: "",
      description: ""
    }
  },

  computed: {
    product () {
      return this.$store.getters['admin/currentProduct']
    }
  },

  mounted () {
   this.setProperties()
  },

  watch: {
    price(v) {
      v = `${v}.00`
    }
  },

  methods: {
    setProperties () {
      if (this.product.subcategory) {
        this.selectedOption = this.product.subcategory
      }
      this.description = this.product.description

    },

    async send() {
      try{
        let body = {subcategory: this.selectedOption}
        if (this.price) {
          body.price = this.price + '.00'
        }
        if (this.name) {
          body.name = this.name
        }
        if (this.description) {
          body.description = this.description
        }
        await this.$axios.put(`/admin/products/edit/${this.product._id}`, body, {headers: { 'Authorization': `Bearer ${Cookie.get('token')}` } })
        this.price = ""
        this.name = ""
        this.description = ""
      } catch(e) {
        console.log(e)
      }
      this.refresh()
    },

    async refresh () {
      try {
        await this.$store.dispatch('admin/getProducts')
        this.$store.dispatch('admin/refreshCurrentProduct', this.product._id)
        this.setProperties()
      } catch (e) {
        console.log(e)
      }
    },

    addImgInput() {
      this.imagesToSend.push({image: null, preview: null})
    },

    removeImgInput() {
      this.imagesToSend.pop()
    },

    addImage (e, i) {
      console.log(e)
      this.imagesToSend[i].image = e.target.files[0]
      this.imagesToSend[i].preview = window.URL.createObjectURL(this.imagesToSend[i].image)
    },

    async sendImages() {
      let imageForm = new FormData()
      this.imagesToSend.forEach((file, index) => {
        imageForm.append('preview', file.image)
      })
      try{
        let res = await this.$axios.put(`/admin/products/uploadImage/${this.product._id}`, imageForm, {headers: { 'Authorization': `Bearer ${Cookie.get('token')}` } })
        this.refresh()
        this.imagesToSend = []
      } catch(e) {
      }
    },
    async deleteImg(imagePath) {
      try {
        await this.$axios.put(`admin/products/delete/${this.product._id}`, {imagePath}, {headers: { 'Authorization': `Bearer ${Cookie.get('token')}` } })
        this.refresh()
      } catch(e) {
        console.log(e)
      }
    }
  },

  async created() {
    let adminRes = await this.$axios.post('/admin/me', {}, {headers: { 'Authorization': `Bearer ${Cookie.get('token')}` } } )
    if(!adminRes.data.isAdmin) {
      this.$router.push("/404")
    }
  }
}
</script>


<template>
  <div class="root flex center" v-if="product">

    <div id="image-control" class="images-control flex center">
      <span class="placeholder">IMAGES</span>  
      <span @click="addImgInput" class="plus pointer">ADD</span> 
      <span @click="removeImgInput" class="minus pointer">DELETE</span>
      <div id="imageInputs">
        <div :key="index" v-for="(image, index) in product.images" class="image-input-div-new flex AL-center JF-spaceBE">
          <img class="imgPreview oldPreview" :src="image">
          {{ image.split('Z-')[1] }}
          <button @click="deleteImg(image)" class="X pointer">
            X
          </button>
        </div>
        <div :key="`new=${index}`" v-for="(image, index) in imagesToSend" class="image-input-div-new flex AL-center JF-spaceAR">
          <img class="imgPreview" :src="image.preview">
          <input class="img-input" @change="function (e) { addImage(e, index) }" type="file" accept="image/*">
        </div>
      </div>
      <button @click="sendImages" class="send-img-btn btn pointer">Update Images</button>
    </div>
    <div class="details flex-col">
      <div class="row flex-col">
        <span class="labels flex center">Current Name: {{ product.name }} </span>
        <input class="inputs flex center" placeholder="New Name" v-model="name" type="text">
      </div>
      <div class="row flex-col">
        <span class="labels flex center">Current Price: {{ product.variants[0].price }} </span>
        <input class="inputs flex center" placeholder="New Price" v-model="price" type="text">
      </div>
      
      <!-- <span :key="index" v-for="(variant, index) in product.variants">{{ variant.size }}</span> -->
      <span class="categories">Set Category :</span>
      <select id="options" v-model="selectedOption">
        <option v-for="(option, index) in options" :key="`option-${index}`" :value="option"> {{ option }} </option>
      </select>
      <textarea rows="10" v-model="description" class="disc" placeholder="Set Description" type="text"></textarea>
      <button @click="send" class="send-details-btn btn pointer">SEND</button>
    </div>
    


  </div>
  <span v-else>Loading...</span>
 
</template>

<style lang="scss" scoped>
.root {
    min-width: 100vw;
    min-height: 100vh;
    width: 100%;
    height: 100%;
}
#imageInputs {
  margin-top: 5rem;
  overflow-y: scroll;
  max-height: 30rem;
}
#options{
  height: 4rem;
}
.images-control {
  min-height: 40rem;
  min-width: 40rem;
  border: 0.2rem solid black;
  position: relative !important;
  
}
.imgPreview {
  width: 5rem;
  height: 5rem;
}
.X {
  width: 2.5rem;
  height: 2.5rem;
  background-color: red;
  border: none;
  color: white;
  font-size: 1.6rem;
  font-weight: bolder;
}
.placeholder {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  white-space: nowrap;
  opacity: 0.3;
  pointer-events: none;
  z-index: -3;
}
.plus {
  background-color: limegreen;
  position: absolute;
  top: 1rem;
  left: 1rem;
  font-size: 1.6rem;
  color: white;
  font-weight: bold;
  padding: 0.6rem;
}
.minus {
  background-color: orangered;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.6rem;
  color: white;
  font-weight: bold;
  padding: 0.6rem;
}
.details {
  height: 40rem;
  margin-left: 1rem;
  position: relative;
}
.send-img-btn {
  position: absolute;
  left: 50%;
  bottom: -7rem;
  transform: translate(-50%,-50%);
}
.send-details-btn {
  position: absolute;
  left: 50%;
  bottom: -6.8rem;
  transform: translate(-50%,-50%);
}
.image-input-div-new {
  width: 30rem;
}
.row {
  border: 0.2rem solid black;
  margin-bottom: 1rem;
  padding-right: 1rem;
  padding-left: 1rem;
}
.labels {
  height: 3rem;
  width: 100%;
  font-size: 1.5rem;
  font-weight: bold;
}
.inputs {
  height: 3rem;
  font-size: 1.4rem;
  border: none;
  border-top: 0.1rem solid black;
  &:enabled {
    text-align: center;
  }
  &:focus {
    outline-width: 0;
    outline-color: transparent;
  }
}
.categories {
  width: 100%;
  text-align: center;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 1rem;
}
.disc {
  height: 19rem;
  border: 0.2rem solid black;
  margin-top: 1rem;
  &:focus {
    outline-width: 0;
    outline-color: transparent;
  }
  &:enabled {
    padding-left: 1rem;
    padding-top: 1rem;
    font-size: 1.5rem;
  }
}
.btn {
  height: 4rem;
  width: 12rem;
}
</style>

