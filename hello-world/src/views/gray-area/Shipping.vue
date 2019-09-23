<script>
export default {


}
</script>


    
<template>
<div  class="text-root flex root center">
  <span v-if="this.device == 'desktop'" class="heading">SHIPPING</span>
  <p class="text-block">
    SHIPPING INFORMATION 
<br><br>
We partner with the most reliable global carriers like FedEx, DHL, USPS, APC, DPD and more. 
<br><br>
STANDARD shipping and handling is FREE and delivery time is: 5-10 business days. 
<br><br>
Shipping methods do not include processing time. You will receive an email from info@pixelpalm.co when your order has been confirmed. You will also receive an additional email from info@pixelpalm.co including a tracking number when your order has been sent out. Purchased items will be shipped within 3 business days of the order. Please allow up to 2 weeks for your delivery to arrive. If you still have not received your purchase after 2 weeks, please notify info@pixelpalm.co. We are not liable under any legal theory for shipping delays or system downtime. 
<br><br>
Orders placed on WWW.PIXELPALM.CO are processed Monday-Friday (excluding major holidays) and are shipped within 3 business days from when the order is placed, pending payment authorization and verification. WWW.PIXELPALM.CO ships worldwide. At this time we are unable to ship orders to General Delivery, P.O. Boxes, Poste restante. Orders made to any of these addresses will be cancelled. 
 <br><br>
*Please be aware of customs and duty fees the customer will be liable to pay in any destination outside of the USA. We are not responsible for any parcels returned for unpaid customs fees and will not issue refunds under these circumstances. If you have any other delivery questions please contact us at info@pixelpalm.co
  </p>
</div>
</template>


<style lang="scss" scoped>
.heading {
	font-size: 2rem;
  position: absolute;
  width: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  white-space: nowrap;
	-webkit-font-smoothing: none;
  text-align: center;
  top: 8.7rem;
  margin-left: 16.5rem;
  left: 50%;
	// margin-left: 16.5rem;
  transform: translateX(-50%);
  border-bottom: 0.2rem solid black;
  line-height: 2 !important;
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