import React from 'react'

function RemoveProduct({removeProduct}) {
  return (
    <div> 
       

<input type="checkbox" id="manage_items" class="modal-toggle" />
<div class="modal">
  <div class="modal-box relative">
    <label for="manage_items" class="btn btn-sm btn-circle absolute right-2 top-2 btn-primary">✕</label>
    <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <button onClick={removeProduct}>Delete product</button>
  </div>
</div>
    </div>
  )
}

export default RemoveProduct