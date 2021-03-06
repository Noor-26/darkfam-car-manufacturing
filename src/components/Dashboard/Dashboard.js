import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link, Outlet } from 'react-router-dom'
import auth from '../../firebase.init'
import Loading from '../Shared/Loading/Loading'
import useAdmin from '../Shared/useAdmin/useAdmin'

function Dashboard() {
  const [user] = useAuthState(auth)
  const [admin,adminLoading] = useAdmin(user)
  if(adminLoading){
    return <Loading/>
  }
  return (
    <div class="drawer drawer-mobile">
    <input id="dashboard_drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content ">
        <p className='text-4xl m-3'>Dashboard</p>
  <Outlet/>
      
    </div> 
    <div class="drawer-side ">
      <label for="dashboard_drawer" class=" drawer-overlay bg-white "></label> 
      <ul class="menu p-4 overflow-y-auto w-full bg-base-100 text-base-content">
  
        {user && !admin &&<><li><Link to='/dashboard/myorder'>My Order</Link></li>
        <li><Link to='/dashboard/addreview'>Add a review</Link></li>
        </>}
        <li><Link to='/dashboard'>My profile</Link></li>
        {admin && <><li><Link to='/dashboard/addproduct'>Add a product</Link></li>
        <li><Link to='/dashboard/manageallorder'>Manage all order</Link></li>
        <li><Link to='/dashboard/makeadmin'>Make admin</Link></li>
        <li><Link to='/dashboard/manageproduct'>Manage products</Link></li>
        </>}

        
      </ul>
    
    </div>
  </div>
  )
}

export default Dashboard