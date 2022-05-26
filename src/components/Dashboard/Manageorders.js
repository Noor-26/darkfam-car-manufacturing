import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading/Loading'

function Manageorders() {
  const {data,isLoading,refetch} = useQuery('order_data',() => fetch('http://localhost:5000/orders',{
    method: 'GET',
        headers:{
            'content-type':'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        
        },
  }).then(res => res.json()))
 if(isLoading){
return <Loading/>
 }

 const statusChange = (itemId) => {
  if(itemId){
   fetch(`http://localhost:5000/order/${itemId}`,{
    method:'PATCH',
    headers:{
      'content-type':'application/json',
      'authorization': `Bearer ${localStorage.getItem('accessToken')}`
  
  },
   }).then(res=>res.json()).then(data => refetch() )
  }
 }

  return (
    <div>
      <p className='text-3xl my-5'>manage orders</p>
      <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Product</th>
        <th>Product name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
     {
         data?.map((product,index) => <tr>
         <th>{index+1}</th>
         <td>{product.item_name}</td>
  <td>{product.name}</td>
  <td>${product.orderPrice}</td>
  <td>{product.order_quantity}</td>
         <td>{!product.paid ? <p>unpaid</p>:<button class="btn btn-xs btn-primary" onClick={() => statusChange(product._id)}>{product.status}</button>}</td>
       </tr>)
     }
     {/* <button class="btn btn-xs btn-primary "> unpaid</button> */}
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Manageorders