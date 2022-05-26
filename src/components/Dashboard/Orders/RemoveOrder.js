import React from 'react'

function RemoveOrder({removeOrder}) {
  return (
    <div> 
       
    <input type="checkbox" id="manage_order" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label for="manage_order" class="btn btn-sm btn-circle absolute right-2 top-2 btn-primary">✕</label>
        <h3 class="text-lg font-bold">Want to delete the product?</h3>
        <p class="py-4">Note: the deleted order will be removed from your orders</p>
        <button onClick={removeOrder} className="btn btn-primary">Delete Order</button>
      </div>
    </div>
        </div>
  )
}

export default RemoveOrder