import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Loading from '../Shared/Loading/Loading'
import MakeAdminCard from './MakeAdminCard';

function Makeadmin() {

   const {data:users,isLoading,refetch} = useQuery('Profile_data',() => fetch('http://localhost:5000/users',{
    method: 'GET',
    headers:{
        'content-type':'application/json',
        'authorization': `Bearer ${localStorage.getItem('accessToken')}`
    
    },
   }).then(res => res.json()))
  
   useEffect(() => {
     refetch()
   }, [users])
   
    if(isLoading){
      return <Loading/>
    }
  
  return (
    <div>
      <p className="text-3xl my-5">Make Admin</p>

      <div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>user name</th>
        <th>user email</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
         users?.map((person,index) => <MakeAdminCard key={person._id} person={person} index={index} refetch={refetch}/>)
     }
     
    </tbody>
  </table>
</div>
    </div>
  )
}

export default Makeadmin