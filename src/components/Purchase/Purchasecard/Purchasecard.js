import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import { toast} from 'react-toastify';

function Purchasecard({purchaseItem}) {
    const {minimum_quantity,avaliable_quantity,price} = purchaseItem
    const [user] = useAuthState(auth)
    const { register, handleSubmit } = useForm();
    const [purchase,setpurchase] = useState(true)
    const [orderValue,setOrders] = useState(minimum_quantity)
  
useEffect(() => {
 if(orderValue < avaliable_quantity || orderValue > minimum_quantity){
  setpurchase(true)
 }
}, [orderValue])

  const onSubmit = (data) => {
    const order = data.order_quantity
    console.log(data)

    if(order < minimum_quantity  ){
       toast(`you can'order below ${minimum_quantity}`)
       setpurchase(false)
    }
    else if(order > avaliable_quantity){
      toast(`you can't order higher than ${avaliable_quantity}`)
      setpurchase(false)
    }
    
  };
  
  return (
    <div>
           <form onSubmit={handleSubmit(onSubmit)} className="text-center">
    
      <input type="text"  className="input input-bordered w-full max-w-xs mt-5" {...register("name")} value={user.displayName} disabled />
      <input type="email" className="input input-bordered w-full max-w-xs mt-5" {...register("email")} value={user.email} disabled />
      <input type="text" placeholder="Enter your Address" className="input input-bordered w-full max-w-xs mt-5" {...register("address")} />
      <input type="number" placeholder="Enter phone number" className="input input-bordered w-full max-w-xs mt-5"{...register("phone")}/>
      <input type="number" placeholder="Order" className="input input-bordered w-full max-w-xs mt-5"{...register("order_quantity")} value={orderValue}  onChange={(e) => setOrders(e.target.value)}/>
      <br/>
      <input type="submit" value="Purchase" disabled={!purchase}  className='btn btn-primary text-white  max-w-xs my-5 ' />
    </form>

    </div>
  )
}

export default Purchasecard