<template>
  <div class="editor">
    <div class="images">
      <input type="file" @change="addImg" accept="image/*">
      <div class="preview">
        <img @click="images.splice(i,1)" v-for="(image, i) in images" :key="i" :src="image.url" style="width: 150px;height: 150px;margin-left: 10px;">
      </div>
    </div>
    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
      <div class="menubar">

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bold() }"
          @click="commands.bold"
        >
          <strong>B</strong>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.italic() }"
          @click="commands.italic"
        >
          <em>I</em>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.strike() }"
          @click="commands.strike"
        >
          <s>S</s>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.underline() }"
          @click="commands.underline"
        >
          <u>U</u>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.code() }"
          @click="commands.code"
        >
          <code>CODE</code>
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.paragraph() }"
          @click="commands.paragraph"
        >
          P
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 1 }) }"
          @click="commands.heading({ level: 1 })"
        >
          H1
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 2 }) }"
          @click="commands.heading({ level: 2 })"
        >
          H2
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.heading({ level: 3 }) }"
          @click="commands.heading({ level: 3 })"
        >
          H3
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.bullet_list() }"
          @click="commands.bullet_list"
        >
          UList
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.ordered_list() }"
          @click="commands.ordered_list"
        >
          OList
        </button>

        <button
          class="menubar__button"
          :class="{ 'is-active': isActive.blockquote() }"
          @click="commands.blockquote"
        >
          "Q"
        </button>

        <button
          class="menubar__button"
          @click="commands.horizontal_rule"
        >
          HR
        </button>

        <button
          class="menubar__button"
          @click="commands.undo"
        >
          &lt;-
        </button>

        <button
          class="menubar__button"
          @click="commands.redo"
        >
          -&gt;
        </button>

      </div>
    </editor-menu-bar>
    <input placeholder="Title" type="text" v-model="title">
    <editor-content class="editor__content" :editor="editor" />
    <button @click="upload">UPLOAD</button>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {

  data() {
    return {
      images: [],
      title: "",
      text: ''
    }
  },

  beforeDestroy () {
    this.editor.destroy()
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
        let res = await this.$axios.post('/blog', formD, { headers: { 'Authorization': `Bearer ${Cookie.get('token')}` }})
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
    }
  }
}
</script>

<style lang="scss" scoped>

.menubar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80rem;
  &__button {
    width: 5rem;
  }
}


.editor {
  position: absolute;
  top: 0;
  right: 50%;
  transform: translateX(50%);
  width: 70rem;
  margin: 0 auto 5rem auto;
  height: 50rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  &__content {
    border: 2px solid black;
    word-wrap: break-word;
    width: 100%;
    margin-top: 5rem;
    * {
      caret-color: currentColor;
    }

    pre {
      padding: 0.7rem 1rem;
      border-radius: 5px;
      background: black;
      color: white;
      font-size: 0.8rem;
      overflow-x: auto;

      code {
        display: block;
      }
    }

    p code {
      display: inline-block;
      padding: 0 0.4rem;
      border-radius: 5px;
      font-size: 0.8rem;
      font-weight: bold;
      background: rgba(black, 0.1);
      color: rgba(black, 0.8);
    }

    ul,
    ol {
      padding-left: 1rem;
    }

    li > p,
    li > ol,
    li > ul {
      margin: 0;
    }

    a {
      color: inherit;
    }

    blockquote {
      border-left: 3px solid rgba(black, 0.1);
      color: rgba(black, 0.8);
      padding-left: 0.8rem;
      font-style: italic;

      p {
        margin: 0;
      }
    }

    img {
      max-width: 100%;
      border-radius: 3px;
    }

    table {
      border-collapse: collapse;
      table-layout: fixed;
      width: 100%;
      margin: 0;
      overflow: hidden;

      td, th {
        min-width: 1em;
        border: 2px solid gray;
        padding: 3px 5px;
        vertical-align: top;
        box-sizing: border-box;
        position: relative;
        > * {
          margin-bottom: 0;
        }
      }

      th {
        font-weight: bold;
        text-align: left;
      }

      .selectedCell:after {
        z-index: 2;
        position: absolute;
        content: "";
        left: 0; right: 0; top: 0; bottom: 0;
        background: rgba(200, 200, 255, 0.4);
        pointer-events: none;
      }

      .column-resize-handle {
        position: absolute;
        right: -2px; top: 0; bottom: 0;
        width: 4px;
        z-index: 20;
        background-color: #adf;
        pointer-events: none;
      }
    }

    .tableWrapper {
      margin: 1em 0;
      overflow-x: auto;
    }

    .resize-cursor {
      cursor: ew-resize;
      cursor: col-resize;
    }

  }
}
</style>
