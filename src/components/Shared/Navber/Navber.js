import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init'

function Navber() {
  const [user] = useAuthState(auth)

  return (
    <div class="navbar bg-white z-10 ">
  <div class="navbar-start ">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
    
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blogs</Link></li>
      <li><Link to='/portfolio'>My Portfolio</Link></li>
     {user ? <>
      <li><Link to='/dashboard'>Dashboard</Link></li> 
      <button className='btn btn-ghost font-bold' onClick={() => signOut(auth)}>{user?.displayName}</button>
      <button className='btn btn-ghost font-bold' onClick={() => signOut(auth)}>Signout</button>
     </>  :  
     <li><Link to='/login'>Login</Link></li> 
     }
      </ul>
    </div>
    <Link to="/" class="btn btn-ghost normal-case text-xl navber-text">Darkfam-car-manufacturer</Link>
  </div> 
  <div class="navbar-end">
  <div class="navbar-center hidden lg:flex font-bold">
    <ul class="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blog'>Blogs</Link></li>
      <li><Link to='/portfolio'>My Portfolio</Link></li>
     {user ? <>
      <li><Link to='/dashboard'>Dashboard</Link></li> 
      <button className='btn btn-ghost font-bold' onClick={() => signOut(auth)}>{user?.displayName}</button>
      <button className='btn btn-ghost font-bold' onClick={() => signOut(auth)}>Signout</button>
     </>  :  
     <li><Link to='/login'>Login</Link></li> 
     }
    </ul>
  </div>
  </div>
  <div className="ml-auto">
  <label tabIndex="1" for="dashboard_drawer" className="btn btn-ghost bg-base-100 lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
  </div>
</div>
  )
}

export default Navber