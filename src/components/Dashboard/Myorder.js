import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import OrderCard from './OrderCard';
import Loading from '../Shared/Loading/Loading';
import RemoveOrder from './RemoveOrder';

function Myorder() {
  const [user] = useAuthState(auth)
  const {email} = user
  const [orderId,setOrderId] = useState('')
  // const [orders,setorder] = useState([])
 
  const [open, setOpen] = useState(false)
   
  const {data:orders,isLoading,refetch} = useQuery('order_data',() => fetch(`http://localhost:5000/order?email=${email}`,{
    method: 'GET',
    headers:{
        'content-type':'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    
    },
}).then(res => res.json()))

  const removeOrder = () => {
    fetch(`http://localhost:5000/order/${orderId}`,
          {
              method:'DELETE',
          })
          .then(res => res.json())
          .then(data => {
              refetch()
          })
  setOpen(false)
   }
   if(isLoading){
     return <Loading/>
   }
  return (
    <div>
   
    <div>
        <p className='text-2xl my-3'> Manage Orders  </p>

        <div class="overflow-x-auto">
  <table class="table w-full">
    
    <thead>
      <tr>
        <th></th>
        <th>Order name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
         orders.map((order,index) => <OrderCard order={order} index={index} key={order._id}  setOpen={setOpen}  setOrderId={setOrderId} />)
     }
     
    
    </tbody>
  </table>
</div>
{open && <RemoveOrder removeOrder={removeOrder}/> }

    </div> 
    </div>
  )
}

export default Myorder