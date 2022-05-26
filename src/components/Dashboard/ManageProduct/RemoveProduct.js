import React from 'react'

function RemoveProduct({removeProduct}) {
  return (
    <div> 
       
<input type="checkbox" id="manage_items" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="manage_items" class="btn btn-sm btn-circle absolute right-2 top-2 btn-primary">✕</label>
    <h3 class="text-lg font-bold">Want to remove the product?</h3>
    <p class="py-4">Note: the removed product will be deleted from everywhere</p>
    <button onClick={removeProduct} className="btn btn-primary">Delete product</button>
  </div>
</div>
    </div>
  )
}

export default RemoveProduct