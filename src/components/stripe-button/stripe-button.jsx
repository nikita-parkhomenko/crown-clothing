import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishebleKey = 'pk_test_Nz2SuYGK9p9dlexJUuodQgwT00EUADMiCG';

    const onToken = token => {
        console.log(token);
        alert('Payment is successful')
    }

    return(
        <StripeCheckout 
            label="Pay Now"
            name="CROWN CLOTHING Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishebleKey}
        />
    )
}


export default StripeCheckoutButton;
