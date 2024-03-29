import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import {toast} from 'react-toastify'
function Addproduct() {
  const [user,loading] = useAuthState(auth)
  const { register, handleSubmit,reset  } = useForm();
  
  const onSubmit = (data) => {
     
    const product = {
       email:user.email,
       name:data.name,
       img:data.img,
       price : data.price,
      minimum_quantity : data.minimum,
      avaliable_quantity: data.avaliable,
      description:data.description
    }

     fetch('https://darkfam-car-manufacturing-server.onrender.com/items',{
      method: 'POST',
      headers:{
          'content-type':'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },

      body: JSON.stringify(product)
      
  }).then(res => res.json()).then(datas =>{
    toast.success("adding product done")
  })
  reset()
  }

  if(loading){
    return <Loading/>
  }

  return (
    <div>
        <p className='text-3xl'>Add product</p>
        <div className='flex flex-col justify-center mx-auto'>
    <form onSubmit={handleSubmit(onSubmit)} className="text-center flex flex-col  mx-auto">
  
  <input type="email" className="input input-bordered w-80 mt-5" {...register("email")} value={user.email} disabled />
  <input type="text"  className="input input-bordered w-80 mt-5" {...register("name")} placeholder="Enter product name" />
  <input type="number" className="input input-bordered w-80 mt-5" {...register("price")} placeholder="Enter product price"  />
  <input type="number" className="input input-bordered w-80 mt-5" {...register("minimum")} placeholder="Enter minimum quantity" />
  <input type="number" className="input input-bordered w-80 mt-5" {...register("avaliable")}  placeholder="Enter product quantity"/>
  <input type="text" className="input input-bordered w-80 mt-5" {...register("img")}  placeholder="Enter Image URL"/>
  
  <textarea type="text" placeholder="Enter product description" cols="30" rows="10" className="input input-bordered w-80 mt-5 h-24" {...register("description")} />
                      
  <br/>
  <input type="submit" value="Add Product"   className='btn btn-primary text-white  max-w-xs my-5 ' />
</form>
  </div>

    </div>
  )
}

export default Addproduct