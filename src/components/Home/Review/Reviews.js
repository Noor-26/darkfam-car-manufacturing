import React, { useEffect } from 'react'
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import Reviewcard from './Reviewcard/Reviewcard';

function Reviews() {
  const {data:reviews,isLoading,refetch} = useQuery('review',() => fetch('https://darkfam-car-manufacturing-server.onrender.com/review').then(res => res.json()))

    if(isLoading){
      return <Loading/>
    }

  return (
    <div>
      <p className='text-3xl mt-10'>Reviews</p>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mx-auto justify-items-center mt-5'>
      {
        reviews?.map(review => <Reviewcard reviews={review} key={review._id} />)
      }
      </div>
        </div>
  )
}

export default Reviews