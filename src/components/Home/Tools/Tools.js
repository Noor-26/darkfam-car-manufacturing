import React, { useEffect, useState } from 'react'
import Toolscard from './Toolscard/Toolscard'

function Tools() {
    const [tools, setTools] = useState([])
    useEffect(() => {
      fetch('https://fast-springs-91080.herokuapp.com/item').then(res => res.json())
      .then(data => setTools(data))
    }, [tools])
    
  return (
    <div>
        <p className='text-5xl text-primary mb-5 mt-8' id='tools'>Tools</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-10'>
        {
            tools.map(tool => <Toolscard tool={tool}/>)
        }
        </div>
        
         </div>


  )
}

export default Tools