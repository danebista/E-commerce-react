import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price})=>{
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JEi6QHckREenrjkGhlUru69iVTrA4Qq2JgKzoghpVhwkXLWG7Ywsjapbq4xjqaZfaLoArwAURjmvJqWa5hBM2n5000ssJTZc5';
    const onToken = token => {
       alert('Payment Successful')  
    }
    return (
        <StripeCheckout 
        label = 'Pay Now'
        name = 'ShopThrift Pvt Ltd'
        billingAddress
        shippingAddress
        image = 'https://svgshare.com/i/ZKv.svg'
        description={`Your total is $${price}`}
        amount ={priceForStripe}
        panelLabel = 'Pay Now'
        token = {onToken}
        stripeKey = {publishableKey}
        />
    )
}

export default StripeCheckoutButton;
