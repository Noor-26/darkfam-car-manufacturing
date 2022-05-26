import  { useState } from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import RemoveProduct from './RemoveProduct';
import ManageallProductCard from './ManageallProductCard';

function Manageallproducts() {
  const [open, setOpen] = useState(false)
  const [productId, setProductId] = useState("")
  const {data,isLoading,refetch} = useQuery('product_data',() => fetch('https://fast-springs-91080.herokuapp.com/items',{
      method:'GET',
headers:{
    'content-type':'application/json',
    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
},
  }).then(res => res.json()))

  if(isLoading){ 
    return <Loading/>   
  }

  const removeProduct = () => {
    fetch(`https://fast-springs-91080.herokuapp.com/items/${productId}`,
          {
              method:'DELETE',
        headers:{
            'content-type':'application/json',
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        },
          })
          .then(res => res.json())
          .then(data => {
            refetch()
            toast.success('removing the product done')
          })
  setOpen(false)
   }
  return (
    <div>
      <p className="text-3xl my-5">Manage all products</p>
<div class="overflow-x-auto">
  <table class="table w-full">
  
    <thead>
      <tr>
        <th></th>
        <th>Product</th>
        <th>Product name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
     {
         data?.map((product,index) => <ManageallProductCard product={product} index={index} setOpen={setOpen}  setProductId={setProductId}/>)
     }
     
    </tbody>
  </table>
</div>
{open && <RemoveProduct removeProduct={removeProduct}/> }
    </div>
  )
}

export default Manageallproducts