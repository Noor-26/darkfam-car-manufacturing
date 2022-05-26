import React from 'react'
import { BsFillStarFill } from 'react-icons/bs';


function Reviewcard({reviews}) {
  const {name,review,ratings} = reviews
  return (
    <div class="card w-80 bg-base-100">
  <div class="card-body items-center text-center">
    <h2 class="card-title text-primary">{name}</h2>
    <p className='flex'> ratings : {ratings} <BsFillStarFill className='mt-1 ml-1'/> </p>
    <p>{review}</p>
    
  </div>
</div>
  )
}

export default Reviewcard