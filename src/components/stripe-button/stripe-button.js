import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
   const priceForStripe= price *100;
   const publickey= 'pk_test_DtfQZ8hoEc3tMS1mfOwUIFjo00QpUt2Mpa';

   const onToken = token=>{
      console.log('token', token);
      alert('Payment Successful!');
   }
   return (
      <StripeCheckout
      label='Pay Now'
      name='e-commerce'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publickey}
      />
   )
}

export default StripeCheckoutButton;