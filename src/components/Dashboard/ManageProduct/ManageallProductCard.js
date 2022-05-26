import React from 'react'

function ManageallProductCard({product,index,setOpen,setProductId}) {
    const {_id,img,name,price,avaliable_quantity} = product
    
  const sendId = () => {
    setOpen(true)
    setProductId(_id)
  }

  return (
    <tr>
         <th>{index+1}</th>
         <td><div class="w-16 rounded">
    <img src={img}alt="Tailwind-CSS-Avatar-component" />
  </div></td>
  <td>{name}</td>
  <td>${price}</td>
  <td>{avaliable_quantity}</td>
         <td><label for="manage_items" class="btn  btn-xs btn-primary modal-button" onClick={sendId} >Remove</label></td>


       </tr>
       
  )
}

export default ManageallProductCard