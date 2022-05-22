import React from 'react'
import './Banner.css'
import bgImg from '../../../images/banner.png'
function Banner() {
    
  return (
<div className='banner flex'>
    <div>
        <img src={bgImg} alt="a black car" className='absolute banner-img' />
    </div>
    <div>
    <div class="hero min-h-screen bg-base-100 text-white">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-4xl font-bold">Best Car Tools For You</h1>
      <p class="py-6">Keeping your car in good condition does more than just prevent some issues, it also helps keep your vehicle running smoothly and extend its lifespan. </p>
      <button class="btn btn-primary font-bold text-white">Get Started</button>
    </div>
  </div>
</div>
    </div>
</div>
  
  )
}

export default Banner