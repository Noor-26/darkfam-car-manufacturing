import React from 'react'
import { toast } from 'react-toastify';

function MakeAdminCard({person,index,refetch}) {
    const {name,email,role} = person
    const makeAdmin = () => {
        fetch(`https://fast-springs-91080.herokuapp.com/user/admin/${email}`,
        {
            method:'PUT',
            headers:{
                'content-type':'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            
            },
        })
        .then(res => {
            if(res.status === 403){
                toast.error("Failed to make user admin  (-_-)")
            }
            res.json()
          })
        .then(data => {
            refetch()
        })
      }
  return (
    <tr>
         <th>{index+1}</th>
  <td>{name}</td>
  <td>{email}</td>
         <td>{role !== 'admin' && <button class="btn btn-xs btn-primary" onClick={makeAdmin}>Make admin</button>}</td>
       </tr>
  )
}

export default MakeAdminCard