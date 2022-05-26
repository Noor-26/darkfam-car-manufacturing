import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

function Addreview() {
  const { register, handleSubmit } = useForm();
  const [user] = useAuthState(auth)

  const onSubmit = (data) => {
    console.log(data)
    const review = {
      name:user.displayName,
      email:user.email,
      review:data.review,
      ratings: data.ratings
    }
     fetch('http://localhost:5000/review',{
      method: 'POST',
      headers:{
          'content-type':'application/json', 
          method: 'GET',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
      },
      body: JSON.stringify(review)
  }).then(res => res.json()).then(data => toast.success('Thnx for the review'))
 
  }

  return (
    <div className='flex flex-col justify-center mx-auto'>
      <h2 className='text-4xl'>Add a review</h2>
           <form onSubmit={handleSubmit(onSubmit)} className="text-center flex flex-col  mx-auto">
    
      <input type="text"  className="input input-bordered w-80 mt-5" {...register("name")} value={user.displayName} disabled />
      <input type="email" className="input input-bordered w-80 mt-5" {...register("email")} value={user.email} disabled />
      
      <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text-alt">Ratings</span>
  </label>
  <select class="select select-bordered" {...register("ratings")}>
    <option disabled selected>Rate here</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
  
</div>
      <textarea type="text" placeholder="Enter your review" cols="30" rows="10" className="input input-bordered w-80 mt-5 h-24" {...register("review")} />
   
      <br/>
      <input type="submit" value="Purchase"   className='btn btn-primary text-white  max-w-xs my-5 ' />
    </form>

    </div>
  )
}

export default Addreview