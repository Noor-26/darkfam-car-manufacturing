import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom'
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_51L26U9AgMm9RRJ7pUcXRrqvzh1l97MSE67ouqD91yeStOldtECYDRodWCnsFPvzd95yoDu0m2LW5ybpFB8FFoWFL00pnLC2Pvv');
function Payment() {
    const{_id} = useParams()
    const [payItem, setpayItem] = useState([])
    useEffect(() => {
        fetch(`https://fast-springs-91080.herokuapp.com/payment/${_id}`,{
            method: 'GET',
            headers:{
                'content-type':'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            
            },
    }).then(res=>res.json()).then(data => setpayItem(data))
    }, [])
    
   
  return (
    <div>
        <p className='text-3xl'>Place your payment here</p>
        <div class="hero h-auto mt-10 ">
  <div class="hero-content flex-col ">
    <div class="text-center lg:text-left w-80">
      <h1 class="text-3xl font-bold text-primary">Pay for {payItem.item_name}</h1>
      <p class="py-6">You have to pay ${payItem.orderPrice}</p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body w-50">
      <Elements stripe={stripePromise}>
      <CheckoutForm payItem={payItem}/>
    </Elements>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Payment