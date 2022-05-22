import React from 'react'

function Toolscard({tool}) {
    const {name,img,description,minimum_quantity,avaliable_quantity,price} = tool 
  return (
    <div class="card min-w-md bg-base-100 shadow-xl">
  <figure><img src={img}alt="Shoes" /></figure>
  <div class="card-body text-left">
    <h2 class="card-title">{name}</h2>
    <p>Minimum : {minimum_quantity}</p>
    <p>Avaliable : {avaliable_quantity}</p>
    <p>Price : ${price}</p>
    <p>{description}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary text-white">Purchase</button>
    </div>
  </div>
</div>
  )
}

export default Toolscard