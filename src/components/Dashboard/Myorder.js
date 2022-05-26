import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import OrderCard from './OrderCard';
import Loading from '../Shared/Loading/Loading';
import RemoveOrder from './RemoveOrder';
import { useNavigate } from 'react-router-dom';

function Myorder() {
  const [user] = useAuthState(auth)
  const {email} = user
  const [orderId,setOrderId] = useState('')
  const navigate = useNavigate()
  const [orders,setorder] = useState([])
 
  const [open, setOpen] = useState(false)
   useEffect(() => {
    fetch(`http://localhost:5000/order?email=${email}`,{
    method: 'GET',
    headers:{
        'content-type':'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    
    },
}).then(res =>  res.json() ).then(data=>setorder(data))
   }, [])
   

  const removeOrder = () => {
    fetch(`http://localhost:5000/order/${orderId}`,
          {
              method:'DELETE',
              headers:{
                  'content-type':'application/json',
                  'authorization': `Bearer ${localStorage.getItem('accessToken')}`
              },
          })
          .then(res => res.json())
          .then(data => {
           
          })
  setOpen(false)
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
        <th>Payment</th>
        <th>Action</th>
        <th>TransictionId</th>
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