import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Purchasecard from './Purchasecard/Purchasecard'

function Purchase() {
    const {id} = useParams()
    const [purchaseItem, setpurchaseItem] = useState([])
    const {name,img,description,minimum_quantity,price,avaliable_quantity} = purchaseItem
    useEffect(() => {
      fetch(`https://fast-springs-91080.herokuapp.com/item/${id}`,{
        method: 'GET',
        headers:{
            'content-type':'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        
        },
      })
      .then(res => res.json())
      .then(data => setpurchaseItem(data))
    }, [])
    
  return (
    <div>
    <p className='text-4xl mt-20'>Purchase Your Tools</p>

    <div class="hero min-h-screen ">
  <div class="hero-content flex-col gap-5 lg:flex-row">
    <img src={img} class="max-w-lg rounded-lg " />
    <div className='text-left pl-14 h-auto mt-10'>
      <h1 class="text-3xl lg:text-5xl font-bold">{name}</h1>
      <p className='pt-2'>Minimum Quantity : {minimum_quantity}</p>
      <p className='pt-2'>Price : {price}</p>
      <p className='pt-2'>Avaliable Quantity : {avaliable_quantity}</p>

      <p class="py-6">{description}</p>
      <p className='text-center text-3xl'>Confirm your purchase</p>

   <Purchasecard purchaseItem={purchaseItem}/>


    </div>
  </div>
</div>
    </div>
  )
}

export default Purchase