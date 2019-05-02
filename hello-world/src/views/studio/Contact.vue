<script>
export default {

}
</script>

<template>
	<div class="form flex-col center">
		<h2 class="heading">DROP US A LINE</h2>
		<div class="names-wrapper flex-row JF-spaceBE">
				<input autocomplete="username" v-model="firstName" type="text" placeholder="FIRS TNAME*" class="names input">
			<span v-model="nameErr" class="error"> {{ nameErr }} </span>
			
			<input v-model="lastName" type="text" placeholder="LAST NAME*" class="names input">
			<span v-model="nameErr" class="error"> {{ nameErr }} </span>
		</div>

		<input v-model="email" type="email" placeholder="EMAIL*" class="mail input">
		<span v-model="emailErr" class="error"> {{ emailErr }} </span>

		<input v-model="message" type="text" placeholder="SUBJECT*" class="subject input">

		<textarea rows="10"  placeholder="MESSAGE*" class="text-box"></textarea>
		<div class="submit flex center">
			SUBMIT
		</div>
	</div>
</template>

<style lang="scss" scoped>
.form {
	width: 100%;
	height: 100vh;
}
.heading {
	font-size: 3.8rem;
	padding-bottom: 3rem;
}
.names-wrapper {
	width: 57rem;
	margin-left: 0.8rem;
}
.input {
	border: 0.2rem solid black;
	height: 4rem;
	margin-bottom: 2rem;
	&::placeholder {
    font-size: 1.4rem;
    color: black;
  }
  &:enabled {
    padding-left: 1rem;
  }

}
.names {
	width: 27rem;
}
.mail {
	width: 56rem;
}
.subject {
	width: 56rem;
}
.text-box {
	width: 56rem;
	height: 20rem; 
	border: 0.2rem solid black;
	&::placeholder {
    font-size: 1.4rem;
    color: black;
  }
  &:enabled {
    padding-left: 1rem;
		padding-top: 1.6rem;
		padding-right: 0.4rem;
  }
	resize: none;
}
.submit {
	width: 56rem;
	background-color: black;
	height: 4rem;
	color: white;
	margin-top: 2rem;
	font-size: 2rem;
}
@media only screen and (max-width: 1400px) {
.form {
	width: 100vw;
	justify-content: flex-start !important;
  background-color: white;
	height: auto;
	padding-bottom: 2rem;
}
.heading {
	font-size: 1.8rem;
	padding-top: 3rem;
	width: 100vw;
	text-align: left;
	padding-left: 1rem;
	padding-bottom: 1rem;
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
	&::placeholder {
    font-size: 1.4rem;
    color: black;
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
	&::placeholder {
    font-size: 1.4rem;
    color: black;
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
	font-size: 2rem;
}
}
</style>
