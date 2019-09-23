<script>
export default {


}
</script>


<template>
<div  class="text-root flex root center">
  <span v-if="this.device == 'desktop'" class="heading">RETURNS</span>
  
  <p class="text-block">
  RETURNS POLICY 
<br><br>
Our goal is for you to be 100% satisfied with your purchase from WWW.PIXELPALM.CO. If for any reason you are not satisfied we would be happy to assist you. We strongly advise you to contact us before returning any products.
<br><br>
Please note: We do not accept returns for Stussy product not purchased from WWW.PIXELPALM.CO.
<br><br>
Any claims for misprinted/damaged/defective items must be submitted within 48 hours after the product has been received, with attached photos and a written explanation of the problem. For packages lost in transit, all claims must be submitted no later than 2 weeks after the estimated delivery date. Claims deemed an error on our part are covered at our expense. 
<br><br>
The cost of return shipping is at the customer’s expense and is non-refundable. Item(s) purchased from pixelpalm.co must be returned in as-new, unused condition with original tags still attached, Item(s) must be returned to back to us within 14 days of receiving the shipment, in order to receive a refund. Item(s) must be in their original packaging, in as-new condition with printed receipts. In as-new condition is defined as unworn, unwashed, undamaged (beyond what is noted if exchanging due to factory defect), and unused with all original tags attached. All packaging must accompany the product and must also be in new condition. We reserve the right to refuse an exchange if the merchandise does not meet this criterion. Limited edition items and items purchased on sale cannot be returned for a refund and not available for exchange. We recommend returning items through traceable mail, as any returned items that are not received by PIXELPALM will not be issued a refund. We also recommend that customers ask for proof of postage at the time of posting returned items. Refunds are not available for any product returned to us after the 14 day window. Please allow 3-5 business days for refunds to process once we receive the exchange back at our warehouse. You will receive an email when we have issued a refund to your account. A refund will be issued in the original form of payment. Please note that we can not refund the original shipping charge with the exception of faulty or incorrectly shipped items. To return an item(s) for a refund just send it to the address below with a copy of the receipt and a written explanation of why the item(s) is being returned. 
<br><br>
Returns should be shipped via insured traceable mail in a secure package to the following address: 
<br><br>
11025 Westlake Drive, Charlotte, NC 28273. 
<br><br>
When we receive a returned shipment, an automated email notification will be sent to you. Unclaimed returns get donated to charity after 4 weeks. 
<br><br>
Reasons for Returns
<br><br>
Wrong Address - If you provide an address that is considered insufficient by the courier, the shipment will be returned to our facility. You will be liable for reshipment costs once we have confirmed an updated address with you. 
<br><br>
Unclaimed - Shipments that go unclaimed are returned to our facility and you will be liable for the cost of a reshipment to yourself. 
<br><br>
We do not refund orders for buyer's remorse and mistaken size. 
<br><br>
Notification for EU consumers: According to Article 16(c) of the Directive 2011/83/EU of the European Parliament and of the Council of 25 October 2011 on consumer rights, the right of withdrawal may not be provided for the supply of goods made to the consumer's specifications or clearly personalized, therefore Pixelpalm reserves rights to refuse returns at its sole discretion.
  </p>
</div>
</template>


<style lang="scss" scoped>
.heading {
	font-size: 2rem;
  position: absolute;
  width: auto;
  margin-left: 16.5rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-family: 'Pixelpalm-category-font';
  text-rendering: geometricPrecision;
  white-space: nowrap;
	-webkit-font-smoothing: none;
  text-align: center;
  top: 8.7rem;
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