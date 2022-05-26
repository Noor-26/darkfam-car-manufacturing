import { setUserId } from 'firebase/analytics';
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import './MyProfile.css'
import UpdateProfile from './UpdateProfile';

function Myprofile() {
  const [user] = useAuthState(auth)
  const {displayName,email,photoURL} = user
  const [profileUser, setProfileUser] = useState([])
  
  useEffect(() => {
    console.log(user)
    fetch(`http://localhost:5000/user?email=${email}`,{
      method: 'GET',
        headers:{
            'content-type':'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        
        },
    })
    .then(res => res.json())
    .then(data => setProfileUser(data))
  console.log(user)
  }, [user])
  
  
  return (
    <div className='flex flex-col justify-center mx-auto'>
     <p className='text-3xl'>My Profile</p>
     
  <div className='mx-auto mt-5'>
  <div class="profile_card w-96">
  <div class="profile_card-details ">
  <div class="avatar">
  <div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mx-auto">
    <img src={photoURL ? photoURL : "https://i.ibb.co/GT8y63Q/demo-icon.webp"} alt="profile photo"/>
  </div>
</div>
    <p class="profile_text-title">{displayName}</p>
    <div className='text-left'>

    <p class="profile_text-body">Education: {profileUser.education ? profileUser.education :'Update your education'  }</p>
    <p class="profile_text-body">Phone : {profileUser.number ? profileUser.number : '########'}</p>
    <p class="profile_text-body">Location : {profileUser.location ? profileUser.location : 'Update your location'} </p>
    </div>
    <p class="profile_text-body "><a href={profileUser.linkdin ? profileUser.linkdin : 'update your linkdin'} target="_blank" className="text-primary">Visit Linkdin</a></p>
  </div>
  <button class="profile_card-button"><Link to='/dashboard/updateprofile'>Update Your profile</Link></button>
</div> 
  </div>
   


    </div>
  )
}

export default Myprofile;