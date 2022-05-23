import React, { useEffect, useState } from 'react'
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
function UpdateProfile() {
    const [user,loading] = useAuthState(auth)
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate()
  
  const onSubmit = (data) => {
      console.log(user)
    const Updateuser = {
        img:user?.photoURL,
        name:user?.displayName,
       email:user.email,
      education:data.edu,
      location : data.locate,
      number : data.number,
      linkdin: data.link_profile
    }

     fetch(`http://localhost:5000/user/${user.email}`,{
      method: 'PUT',
      headers:{
          'content-type':'application/json', 
      },
      body: JSON.stringify(Updateuser)
  }).then(res => res.json()).then(data => {navigate('/dashboard/myprofile')})
 
  }
  if(loading){
    return<Loading/>
}
  return (
    <div className='flex flex-col justify-center mx-auto'>
    <p className='text-3xl'>My profile</p>
    <form onSubmit={handleSubmit(onSubmit)} className="text-center flex flex-col  mx-auto">
  
  <input type="text"  className="input input-bordered w-80 mt-5" {...register("name")} value={user?.displayName} disabled />
  <input type="email" className="input input-bordered w-80 mt-5" {...register("email")} value={user.email} disabled />
  <input type="text" className="input input-bordered w-80 mt-5" {...register("edu")} placeholder="Enter your education"  />
  <input type="text" className="input input-bordered w-80 mt-5" {...register("locate")} placeholder="Enter your location" />
  <input type="number" className="input input-bordered w-80 mt-5" {...register("number")}  placeholder="Enter your phone number"/>
  <input type="text" className="input input-bordered w-80 mt-5" {...register("link_profile")}  placeholder="Enter your linkdin profile link"/>
                      
  <br/>
  <input type="submit" value="update"   className='btn btn-primary text-white  max-w-xs my-5 ' />
</form>
  </div>
  )
}

export default UpdateProfile