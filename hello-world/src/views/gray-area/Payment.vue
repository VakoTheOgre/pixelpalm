<script>
export default {


}
</script>


<template>
<div  class="text-root flex root center">
  <span v-if="this.device == 'desktop'" class="heading">PAYMENT</span>
  <p class="text-block">
    PAYMENT SECURITY
    <br><br>
    On PIXELPALM, Inc. every purchase is made with maximum security thanks to the use of Trustwave and Geotrust-certified secure servers 
    and the implementation of the most advanced encryption services (SSL). We only use protected connections, as demonstrated by the “https” URL prefix and the lock symbol that appears in the browser’s address bar.
    <br><br>
    To safeguard your credit card purchases, you will always be asked to enter your CVV code for every order. Our Payments department may carry out anti-fraud checks before approving the transaction and for greater protection, they may contact you for further details before confirming the order.
    <br><br>
    PAYMENT METHODS
    <br><br>
    PIXELPALM, Inc. accepts all major credit cards including Visa, MasterCard, American Express, Discover, Diners Club and JCB. In addition we also accept payment via PayPal. All Payments are made securely via PayPal. Shop easily online without having to enter your credit card details on the website.
    Your account will be charged once the order is completed.
    <br><br>
    FRAUD PREVENTION
    <br><br>
    PIXELPALM, Inc is committed to maintaining the highest levels of security and protection against fraud. As a cardholder, it is your responsibility to ensure your account is being used ethically and honestly. Please read our Terms of Service carefully before buying anything. Do not complete your purchase unless you agree to the policies stated in our Terms of Service and Terms of Use.
  </p>
</div>
</template>


<style lang="scss" scoped>
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
  line-height: 2.2 !important;
}
.text-root {
  min-width: calc(100vw - 33rem);
}
.text-block {
  padding-right:2rem;
  padding-left:2rem;
  padding-bottom:2rem;
  width: 86rem;
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  margin-left: 16.5rem;
  text-align: justify;
  // margin-left: 33rem;
  font-size: 2rem;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
@media only screen and (max-width: 1200px) {
  .text-root {
    width: calc(100vw - 2rem);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .text-block {
    padding-right: 0;
    padding-left: 2rem;
    padding-bottom: 2rem;
    font-size: 1rem;
    padding-top: 10rem;
    width: 100vw;
    position: static;
    text-align: justify;
    top: 0;
    left: 0;
    transform: translateX(0);
    overflow: hidden; 
    margin-left: 0;
  }

}
</style>