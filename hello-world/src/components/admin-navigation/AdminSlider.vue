<script>
export default {
  props: {
    cat: {
      type: String,
      required: true
    }
  }
}
//@click="addImgInput"
//@click="removeImgInput"
//@click="sendImages"
</script>

<template>
  <div class="root flex center">
    <div id="image-control" class="images-control flex center">
      <span class="placeholder">{{ cat }}</span>  
      <span  class="plus pointer">ADD</span> 
      <span  class="minus pointer">DELETE</span>
      <div id="imageInputs">
        <!-- <div :key="index" v-for="(image, index) in images.images" class="image-input-div-new flex AL-center JF-spaceBE">
          <img class="imgPreview oldPreview" :src="image">
          {{ image.split('Z-')[1] }}
          <button @click="deleteImg(image)" class="X pointer">
            X
          </button>
        </div>
        <div :key="`new=${index}`" v-for="(image, index) in imagesToSend" class="image-input-div-new flex AL-center JF-spaceAR">
          <img class="imgPreview" :src="image.preview">
          <input class="img-input" @change="function (e) { addImage(e, index) }" type="file" accept="image/*">
        </div> -->
      </div>
      <button  class="send-img-btn btn pointer">Update Images</button>
    </div>
  </div>
</template>

<style lang='scss' scoped>
.root {
    min-width: 40rem;
    min-height: 40rem;
    max-height: 40rem;
    max-width: 40rem;
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