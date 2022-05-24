import React from 'react'

function OrderCard({order,index,setOpen,setOrderId}) {
    const {name,email,orderPrice,order_quantity,item_name,_id} = order
    const sendId = () => {
      setOpen(true)
      setOrderId(_id)
    }
  return (
    <tr>
    <th>{index+1}</th>
    <td>{item_name}</td>
    <td>${orderPrice}</td>
    <td>{order_quantity}</td>
    <td><label for="manage_order" class="btn  btn-xs btn-primary modal-button" onClick={sendId}>Remove</label></td>
  </tr>
  )
}

export default OrderCard