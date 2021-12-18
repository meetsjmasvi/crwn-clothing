import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51K7y2sLqNsu1X0s1cxDv8VU9CWmi74eyAtpAPb1asSS6LYiZdoNBgEnm8Zn6IXfTEgJE16FUZgddNkZjKBGjWF9500bmVOB6CK';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  }

  return <StripeCheckout
    label='Pay Now'
    name='CRWN Clothing Ltd.'
    bilingAddress
    shippingAddreass
    image='https://svgshare.com/i/CUz.svg'
    description={`Your total is $${price}`}
    amount={priceForStripe}
    panelLabel='Pay Now'
    token={onToken}
    stripeKey={publishableKey}
  />
}

export default StripeCheckoutButton;