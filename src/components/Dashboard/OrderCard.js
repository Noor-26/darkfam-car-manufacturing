import React from 'react'
import { Link } from 'react-router-dom'

function OrderCard({order,index,setOpen,setOrderId}) {
    const {name,email,orderPrice,order_quantity,item_name,_id,paid,transactionId} = order
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
    <td>{!paid ? <Link to={`/dashboard/payment/${_id}`} className="btn btn-primary btn-xs">pay</Link>: <p>paid</p>}</td>
    <td><label for="manage_order" class="btn  btn-xs btn-primary modal-button" onClick={sendId}>Cancel</label></td>
    <td>{transactionId ? transactionId : "Not paid yet"}</td>

  </tr>
  )
}

export default OrderCard