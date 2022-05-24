import React from 'react'
import { useQuery } from 'react-query'

function Manageorders() {
  const {data,isLoading} = useQuery('order_data',() => fetch('http://localhost:5000/orders').then(res => res.json()))
 
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
        <th>Action</th>
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
         <td><button class="btn btn-xs btn-primary "> unpaid</button></td>
       </tr>)
     }
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Manageorders