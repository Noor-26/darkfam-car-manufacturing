import React from 'react'

function RemoveOrder({removeOrder}) {
  return (
    <div> 
       
    <input type="checkbox" id="manage_order" class="modal-toggle" />
    <div class="modal">
      <div class="modal-box relative">
        <label for="manage_order" class="btn btn-sm btn-circle absolute right-2 top-2 btn-primary">✕</label>
        <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
        <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
        <button onClick={removeOrder}>Delete product</button>
      </div>
    </div>
        </div>
  )
}

export default RemoveOrder