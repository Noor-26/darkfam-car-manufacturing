import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function CheckoutForm({payItem}) {
    const [clientSecret, setClientSecret] = useState("");
    const {orderPrice,email,name,_id} = payItem
  useEffect(() => {

   if(orderPrice){

     fetch("https://darkfam-car-manufacturing-server.onrender.com/create-payment-intent", {
       method: "POST",
       headers: { 
           "content-Type": "application/json",
           'authorization': `Bearer ${localStorage.getItem('accessToken')}`
          },
 
       body: JSON.stringify({orderPrice}),
     })
       .then((res) => res.json())
       .then((data) => setClientSecret(data.clientSecret));
   }

  }, [orderPrice]);

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
      const {error} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
  
      if (error) {
        toast.error(error?.message)
      }

      // confirming card payment
      const {paymentIntent, error:paymentError} = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: card,
            billing_details: {
              name: name,
              email:email
            },
          },
        },
      );
      if(paymentError){
        toast.error(paymentError.message)
      }
      else{

        const payment = {
          order:_id,
          transactionId:paymentIntent.id
        }


        fetch(`https://darkfam-car-manufacturing-server.onrender.com/payment/${_id}`,{
          method:'PATCH',
          headers:{
            'content-type':'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            
          },
          body:JSON.stringify(payment)
        }).then(res=>res.json()).then(data => toast.success('payment successfull')
        )
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