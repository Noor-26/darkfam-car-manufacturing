import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import auth from '../../firebase.init'
import { useAuthState } from 'react-firebase-hooks/auth';
import OrderCard from './OrderCard';
import Loading from '../Shared/Loading/Loading';

function Myorder() {
  const [user] = useAuthState(auth)
  const {email} = user
  const [removeOrder,setRemoveOrder] = useState(null)
  const [orders,setorder] = useState([])
 
  useEffect(() => {
    fetch(`http://localhost:5000/order?email=${user.email}`)
    .then(res => res.json()).then(data => setorder(data))
  }, [])
  
  return (
    <div>
   
    <div>
        <p className='text-2xl my-3'> Manage doctors  </p>

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
         orders.map((order,index) => <OrderCard order={order} index={index} key={order._id} />)
     }
     
    
    </tbody>
  </table>
</div>

    </div>
    </div>
  )
}

export default Myorder