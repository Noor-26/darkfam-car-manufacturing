import React from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading/Loading';

function Manageallproducts() {
  
  const {data,isLoading} = useQuery('product_data',() => fetch('http://localhost:5000/items').then(res => res.json()))

  if(isLoading){ 
    return <Loading/>
  }
 
  return (
    <div>
      <p className="text-3xl my-5">Manage all products</p>
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
         data.map((product,index) => <tr>
         <th>{index+1}</th>
         <td><div class="w-16 rounded">
    <img src={product.img}alt="Tailwind-CSS-Avatar-component" />
  </div></td>
  <td>{product.name}</td>
  <td>${product.price}</td>
  <td>{product.avaliable_quantity}</td>
         <td><button class="btn btn-xs btn-accent ">remove user</button></td>
       </tr>)
     }
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Manageallproducts