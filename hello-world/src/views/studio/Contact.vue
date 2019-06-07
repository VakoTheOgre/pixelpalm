<script>
export default {
	data() {
    return {
      firstName: '',
      lastName: '',
			nameErr: '',
			message: '',

      email: '',
      emailErr: '',

      error: ''
    }
  },
  watch: {
    firstName(newValue) {
      if(newValue.split("").length <= 1) {
        this.nameErr = 'Name too small'
      } else {
        this.nameErr = ''
      }
    },
    lastName(newValue) {
      if(newValue.split("").length <= 1) {
        this.nameErr = 'Name too small'
      } else {
        this.nameErr = ''
      }
    },
    email(newValue) {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      if(!re.test(newValue)) {
        this.emailErr = 'Please provide a correct email address'
      } else {
        this.emailErr = ''
      }
    }
  }
}
</script>

<template>
	<div class="form flex-col center">
		<span v-if="this.device == 'desktop'" class="heading">CONTACT</span>
		<div class="names-wrapper flex-row JF-spaceBE">
				<input autocomplete="username" v-model="firstName" type="text" placeholder="First Name*" class="names input">
			<!-- <span v-model="nameErr" class="error"> {{ nameErr }} </span> -->
			
			<input v-model="lastName" type="text" placeholder="Last Name*" class="names input">
			<!-- <span v-model="nameErr" class="error"> {{ nameErr }} </span> -->
		</div>

		<input v-model="email" type="email" placeholder="Email*" class="mail input">
		<!-- <span v-model="emailErr" class="error"> {{ emailErr }} </span> -->

		<input v-model="message" type="text" placeholder="Subject*" class="subject input">

		<textarea rows="10"  placeholder="Message*" class="text-box"></textarea>
		<div class="submit flex center">
			SUBMIT
		</div>
	</div>
</template>

<style lang="scss" scoped>
.form {
	min-width: calc(100vw - 33rem);
	min-height: 100vh;
	position: static;
}
.heading {
	font-size: 2rem;
  position: absolute;
  width: 27rem;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
  text-align: center;
  top: 8.6rem;
  left: 50%;
	margin-left: 16.5rem;
  transform: translateX(-50%);
  border-bottom: 0.2rem solid black;
  padding: 1rem;
  line-height: 1;
}
.names-wrapper {
	width: 86rem;
}
.input {
	border: 0.2rem solid black;
	height: 4rem;
	margin-bottom: 2rem;
	font-size: 2rem;
	color: black;
	opacity: 1;
	font-family: 'Pixelpalm Pro-Input';
	text-rendering: geometricPrecision;
	font-smooth: never;
	-webkit-font-smoothing: none;
	&::placeholder {
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
.names {
	width: 42rem;
	font-size: 2rem;
    color: black;
    opacity: 1;
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
    &::placeholder {
        font-size: 2rem;
        color: gray;
        opacity: 1;
        font-family: 'Pixelpalm Pro-Input';
        text-rendering: geometricPrecision;
        font-smooth: never;
        -webkit-font-smoothing: none;
      }
}
.mail {
	width: 86rem;
}
.subject {
	width: 86rem;
}
.text-box {
	width: 86rem;
	height: 20rem; 
	border: 0.2rem solid black;
	font-size: 2rem;
    color: black;
    opacity: 1;
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
		line-height: 1;
    &::placeholder {
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
		padding-top: 1rem;
		padding-right: 0.4rem;
  }
	resize: none;
}
.submit {
	width: 86rem;
	background-color: black;
	height: 4rem;
	color: white;
	margin-top: 2rem;
	font-size: 2rem;
	font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
@media only screen and (max-width: 1200px) {
.form {
	width: 100vw;
	justify-content: flex-start !important;
  background-color: white;
	min-height: auto;
	margin-top: 13.2rem;
	padding-bottom: 13rem;
}
.names-wrapper {
	width: calc(100vw - 2rem);
	flex-direction: column !important;
	margin-left: 0;
}
.input {
	border: 0.2rem solid black;
	height: 4rem;
	margin-bottom: 2rem;
	font-size: 2rem;
    color: black;
    opacity: 1;
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
    &::placeholder {
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
.names {
	width: calc(100vw - 2rem);
}
.mail {
	width: calc(100vw - 2rem); 
}
.subject {
	width: calc(100vw - 2rem);
}
.text-box {
	width: calc(100vw - 2rem);
	height: 20rem; 
	border: 0.2rem solid black;
	font-size: 2rem;
    color: black;
    opacity: 1;
    font-family: 'Pixelpalm Pro-Input';
    text-rendering: geometricPrecision;
    font-smooth: never;
    -webkit-font-smoothing: none;
    &::placeholder {
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
		padding-top: 1.6rem;
		padding-right: 0.4rem;
  }
	resize: none;
}
.submit {
	width: calc(100vw - 2rem);
	background-color: black;
	height: 4rem;
	color: white;
	margin-top: 2rem;
	font-size: 1.5rem;
}
}
</style>
