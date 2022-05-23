import React from 'react'
import { useQuery } from 'react-query'

function Makeadmin() {
  const {data,isLoading,refetch} = useQuery('Profile_data',() => fetch('http://localhost:5000/users').then(res => res.json()))

  return (
    <div>
      
    </div>
  )
}

export default Makeadmin