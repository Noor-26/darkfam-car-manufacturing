import React from 'react'
import './Salecard.css'
function Salecard({sale}) {
    const {img,name,part,discount} = sale
  return (
    <div class="card max-w-lg bg-base-100 shadow-xl image-full">
  <figure><img src={img}alt="Shoes" className='w-96' /></figure>
  <div class="card-body text-left text-white">
    <h2 class="card-title text-3xl text-white">{name}</h2>
    <p className='text-2xl text-white'>{part}</p>
    <p className='text-2xl text-white'>{discount}% off</p>
    <div class="card-actions justify-start">
      <button class="btn sale-btn text-white "><a href="#tools">Shop now</a></button>
    </div>
  </div>
</div>
  )
}

export default Salecard