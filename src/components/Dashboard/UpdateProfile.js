import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
function UpdateProfile() {
    const [user] = useAuthState(auth)
    const [profileUser, setProfileUser] = useState([])
    const {education,location,number,linkdin} = profileUser
  const { register, handleSubmit } = useForm();
  const [educateValue, seteducateValue] = useState(education||"")
  const [locationValue, setlocationValue] = useState("")
  const [numberValue, setnumberValue] = useState("")
  const [linkdinValue, setlinkdinValue] = useState("")
  
  useEffect(() => {
    if(education){
     seteducateValue(education)
    }
    if(location){
     setlocationValue(location)
    }
    if(number){
     setnumberValue(number)
    }
    if(linkdin){
     setlinkdinValue(linkdin)
    }
   }, [education,location,number,linkdin])
  
   useEffect(() => {
     console.log(user)
     fetch(`http://localhost:5000/user?email=${user.email}`,{
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
  const onSubmit = (data) => {

    const Updateuser = {
      name:user.displayName,
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
          'authorization': `Bearer ${localStorage.getItem('accessToken')}`

      },
      body: JSON.stringify(Updateuser)
  }).then(res => res.json()).then(data => toast.success('Updating your profile done!'))

  }
  return (
    <div className='flex flex-col justify-center mx-auto'>
    <p className='text-3xl'>Update profile</p>
    <form onSubmit={handleSubmit(onSubmit)} className="text-center flex flex-col  mx-auto">

  <input type="text"  className="input input-bordered w-80 mt-5" {...register("name")} value={user.displayName} disabled />
  <input type="email" className="input input-bordered w-80 mt-5" {...register("email")} value={user.email} disabled />
  <input type="text" className="input input-bordered w-80 mt-5" {...register("edu")} placeholder="Enter your education" value={educateValue}  onChange={(e) => seteducateValue(e.target.value)}  />
  <input type="text" className="input input-bordered w-80 mt-5" {...register("locate")} placeholder="Enter your location" value={locationValue}  onChange={(e) => setlocationValue(e.target.value)}  />
  <input type="number" className="input input-bordered w-80 mt-5" {...register("number")}  placeholder="Enter your phone number" value={numberValue} onChange={(e) => setnumberValue(e.target.value)} />
  <input type="text" className="input input-bordered w-80 mt-5" {...register("link_profile")}  placeholder="Enter your linkdin profile link" value={linkdinValue} onChange={(e) => setlinkdinValue(e.target.value)}  />
  <br/>
  <input type="submit" value="update"   className='btn btn-primary text-white  max-w-xs my-5 ' />
</form>
  </div>
  ) 
}
export default UpdateProfile