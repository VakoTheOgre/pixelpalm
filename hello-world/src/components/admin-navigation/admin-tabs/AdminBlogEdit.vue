<script>
import Cookie from 'js-cookie'
export default {
  
  data () {
    return {
      images: [],
      oldImages: [],
      title: "",
      blog: null,
      text: ''
    }
  },

  beforeDestroy () {
    this.editor.destroy()
  },
  mounted () {
    this.blog = this.$store.getters['admin/currentBlog']
    this.text = this.blog.text
    this.title = this.blog.title.replace(/<\/?[^>]+(>|$)/g, "")
    this.oldImages = this.blog.images
  },
  methods: {
    async upload () {
      try {
        let formD = new FormData()
        this.images.forEach((img, i) => {
          formD.append(`preview`, img.file)
        })
        formD.append('text', this.text)
        formD.append('title', this.title)
        let res = await this.$axios.put(`/blog/${this.blog._id}`, formD, { headers: { 'Authorization': `Bearer ${Cookie.get('token')}` }})
        this.$store.commit('admin/component', 'admin-blogs')
      } catch (e) {
        console.log(e)
      }
    },

    addImg(e) {
      let img = {
        file: e.target.files[0],
        url: window.URL.createObjectURL(e.target.files[0])
      }
      this.images.push(img)
      event.target.value = null
    },

    async deleteImg (i) {
        try {
          await this.$axios.put(`/blog/delete/${this.blog._id}`, {
            imagePath: this.oldImages[i]
          }, {
            headers: {
              'Authorization': `Bearer ${Cookie.get('token')}`
            }
          }) 
        } catch (e) {
          return
          console.log(e)
        }
      this.oldImages.splice(i,1)
    }
  }
}
</script>

<template>
  <div class="editor flex AL-center">
    <div class="images flex-col AL-center JF-spaceBE">
      <input type="file" @change="addImg" accept="image/*">
      <div class="preview">
        <img @click="deleteImg(i)" v-for="(image, i) in oldImages" :key="`old-${i}`" :src="image" style="width: 150px;height: 150px;margin-left: 10px;">
        <img @click="images.splice(i,1)" v-for="(image, i) in images" :key="i" :src="image.url" style="width: 150px;height: 150px;margin-left: 10px;">
      </div>
    </div>
    
    <input placeholder="Title" type="text" v-model="title">
    <textarea v-model="text" rows="auto" cols="auto" style="min-height: 10rem !important;" class="editor__content" />
    <button @click="upload">UPLOAD</button>
  </div>
</template>


<style lang="scss" scoped>
.editor {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100vw - 19.8rem);
  margin-left: 9.9rem;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &__content {
    border: 2px solid black;
    word-wrap: break-word;
    width: 90%;
    padding: 1rem;
    margin-top: 5rem;
  }
}
.images {
  margin-top: 4rem;
}
</style>
