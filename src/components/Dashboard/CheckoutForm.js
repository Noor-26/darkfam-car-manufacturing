import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function CheckoutForm({payItem}) {
    const [clientSecret, setClientSecret] = useState("");
    const {orderPrice} = payItem
  // useEffect(() => {

  //   fetch("http://localhost:5000/create-payment-intent", {
  //     method: "POST",
  //     headers: { 
  //         "Content-Type": "application/json",
  //         'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  //        },

  //     body: JSON.stringify({orderPrice}),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => setClientSecret(data.clientSecret));

  // }, [orderPrice]);

    const stripe= useStripe()
    const elements = useElements()
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
          }
          const card = elements.getElement(CardElement);
          
    if (card == null) {
        return;
      }
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        toast.error(error?.message)
      } else {
       toast.success('Your payment is success')
      }
    }
  return (
    <form onSubmit={handleSubmit}>
    <CardElement
      options={{
        style: {
          base: {
            fontSize: '16px',
            color: '#424770',
            '::placeholder': {
              color: '#aab7c4',
            },
          },
          invalid: {
            color: '#9e2146',
          },
        },
      }}
    />
    <button type="submit" disabled={!stripe || !clientSecret} className="btn btn-primary btn-sm mt-4">
      Pay
    </button>
  </form>
  )
}

export default CheckoutForm