import React, { useEffect } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './MyProfile.css'

function Myprofile() {
  const [user] = useAuthState(auth)
  
  const {data,isLoading,refetch} = useQuery('Profile_data',() => fetch(`http://localhost:5000/user?email=${user.email}`).then(res => res.json()))
  


  if(isLoading){ 
    return <Loading/>
  }
  
  return (
    <div className='flex flex-col justify-center mx-auto'>
     <p className='text-3xl'>My Profile</p>
     
  <div className='mx-auto mt-5'>
  <div class="profile_card w-96">
  <div class="profile_card-details ">
  <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
    <img src={data?.img ? data.img : "https://i.ibb.co/GT8y63Q/demo-icon.webp"} />
  </div>
</div>
    <p class="profile_text-title">{data?.name}</p>
    <div className='text-left'>

    <p class="profile_text-body">Education: {data.education ?data.education :'Update your education'  }</p>
    <p class="profile_text-body">Phone : {data.number ? data.number : '########'}</p>
    <p class="profile_text-body">Location : {data.location ? data.location : 'Update your location'} </p>
    </div>
    <p class="profile_text-body "><a href={data.linkdin ? data.linkdin : 'update your linkdin'} target="_blank" className="text-primary">Visit Linkdin</a></p>
  </div>
  <button class="profile_card-button"><Link to='/dashboard/updateprofile'>Update Your profile</Link></button>
</div> 
  </div>
   
    

    </div>
  )
}

export default Myprofile;