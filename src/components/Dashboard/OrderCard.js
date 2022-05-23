import React from 'react'

function OrderCard({order,index}) {
    const {name,email,orderPrice,order_quantity,item_name} = order
  return (
    <tr>
    <th>{index+1}</th>
    <td>{item_name}</td>
    <td>${orderPrice}</td>
    <td>{order_quantity}</td>
    <td><button class="btn btn-xs btn-accent ">remove user</button></td>
  </tr>
  )
}

export default OrderCard