import React from 'react'
import RemoveProduct from './Deletes/RemoveProduct'

function ManageallProductCard({product,index,setOpen,setProductId}) {
    const {_id} = product
  const sendId = () => {
    setOpen(true)
    setProductId(_id)
  }
  return (
    <tr>
         <th>{index+1}</th>
         <td><div class="w-16 rounded">
    <img src={product.img}alt="Tailwind-CSS-Avatar-component" />
  </div></td>
  <td>{product.name}</td>
  <td>${product.price}</td>
  <td>{product.avaliable_quantity}</td>
         <td><label for="manage_items" class="btn  btn-xs btn-primary modal-button" onClick={sendId}>Remove</label></td>


       </tr>
       
  )
}

export default ManageallProductCard