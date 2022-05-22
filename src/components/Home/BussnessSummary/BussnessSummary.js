import React from 'react'
import { IoIosPeople } from 'react-icons/io';
import { FaMoneyCheckAlt,FaTools } from 'react-icons/fa';
import { MdRateReview } from 'react-icons/md';

function BussnessSummary() {
  return (
    <div className='min-h-[100vh] lg:h-[70vh] flex items-center my-6 lg:my-1 justify-center'>
  <div class="stats stats-vertical lg:stats-horizontal shadow ">
      
 
  <div class="stat">
    <div class="stat-title text-8xl -mt-1 mx-auto"><IoIosPeople/></div>
    <div class="stat-value text-6xl ">100+</div>
    <div class="stat-desc text-2xl">Customers Served</div>
  </div>
  
  <div class="stat">
    <div class="stat-title text-7xl my-3 mx-auto"><FaMoneyCheckAlt/></div>
    <div class="stat-value text-6xl">120M+</div>
    <div class="stat-desc text-2xl">Annual revenue</div>
  </div>
  
  <div class="stat">
    <div class="stat-title text-7xl my-3 mx-auto"><MdRateReview/></div>
    <div class="stat-value text-6xl"> 33K+ </div>
    <div class="stat-desc text-2xl">Reviews</div>
  </div>
  <div class="stat">
    <div class="stat-title text-7xl my-3 mx-auto"><FaTools/></div>
    <div class="stat-value text-6xl"> 50+</div>
    <div class="stat-desc text-2xl">Tools</div>
  </div>
  </div>
</div>
  )
}

export default BussnessSummary