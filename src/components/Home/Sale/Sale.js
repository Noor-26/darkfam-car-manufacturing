import React from 'react'
import Salecard from './Salecard/Salecard'

function Sale() {
    const sales = [
        {
            id:1,
            name:"HEADLIGHTS",
            img:"https://i.ibb.co/tzDB4QS/headlight.webp",
            part:"PARTS",
            discount:25
        },
        {
            id:2,
            name:"BIG SALE",
            img:"https://i.ibb.co/4Mpt2ZN/sale.webp",
            part:"BODY PARTS",
            discount:15
        },
        {
            id:3,
            name:"CUSTOM ",
            img:"https://i.ibb.co/j6vZbPs/wheel.webp",
            part:"WHEELS",
            discount:25
        }
    ]
  return (
    <div >
        <div className='grid md:grid-cols-1  lg:grid-cols-3 gap-5 justify-items-center  mb-5'>

            {sales.map(sale => <Salecard sale={sale}/>)}
        </div>
    </div>
  )
}

export default Sale