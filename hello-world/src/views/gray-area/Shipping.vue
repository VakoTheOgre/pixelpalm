<script>
export default {


}
</script>


    
<template>
<div class="text-root flex root center">
  <span class="heading">SHIPPING</span>
  <p class="text-block">
    SHIPPING INFORMATION
    <br><br>
    Shipping methods do not include processing time. You will receive an email from info@pixelpalm.co when your order has been confirmed. Purchased items will be shipped within 5 business days of the order, although most will be shipped within 3 business days. Please allow up to 3 weeks for your delivery to arrive. If you still have not received your purchase after 3 weeks, please notify info@pixelpalm.co.
    <br><br>
    Orders placed on Pixelpalm.co are processed Monday-Friday (excluding major holidays) and are shipped within 5 business days from when the order is placed, pending payment authorization and verification. Pixelpalm.co ships worldwide. At this time we are unable to ship orders to General Delivery, P.O. Boxes, Poste restante. Orders made to any of these addresses will be cancelled.
    <br><br>
    STANDARD shipping and handling is FREE and delivery time is: 5-10 business days
    <br><br>
    <b>******************************************</b>
    *Please be aware of customs and duty fees the customer will be liable to pay in any destination outside of the USA. We are not responsible for any parcels returned for unpaid customs fees and will not issue refunds under these circumstances. Please also note that our physical stores and offices will not be able to help with any orders placed online. If you have any other delivery questions please contact us at info@pixelpalm.co
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
  line-height: 1;
}
.text-root {
  min-width: calc(100vw - 33rem);
}
.text-block {
  padding-right:2rem;
  padding-left:2rem;
  padding-bottom:2rem;
  width: 86rem;
  text-align: justify;
  // margin-left: 33rem;
  font-size: 1rem;
  font-family: 'Pixelpalm-text';
  text-rendering: geometricPrecision;
  font-smooth: never;
	-webkit-font-smoothing: none;
}
@media only screen and (max-width: 1200px) {
  .text-root {
    width: calc(100vw - 2rem);
  }
  .text-block {
    padding: 0;
    width: calc(100vw - 2rem);
    margin-top: 8.4rem;
    margin-left: 1.6rem;
    margin-bottom:1rem;
  }

}
</style>