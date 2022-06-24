import React from 'react'
import { Link } from 'react-router-dom'

function Toolscard({tool}) {
    const {name,img,description,minimum_quantity,avaliable_quantity,price,_id} = tool 
let descriptionText;
if(description.length > 150){
  descriptionText =  <p>{description.slice(0,150)}...</p>
}
else{
  descriptionText =  <p>{description}</p>
}
  return (
    <div class="card min-w-md bg-base-100 shadow-xl">
  <figure><img src={img}alt="Shoes" className='w-full' /></figure>
  <div class="card-body text-left">
    <h2 class="card-title">{name}</h2>
    <p>Minimum : {minimum_quantity}</p>
    <p>Avaliable : {avaliable_quantity}</p>
    <p>Price : ${price}</p>
    <p>{descriptionText}</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary text-white"> <Link to={`/purchase/${_id}`}>Purchase</Link> </button>
    </div>
  </div>
</div>
  )
}

export default Toolscard