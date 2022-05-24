import { signOut } from 'firebase/auth'
import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom'
import auth from '../../../firebase.init'

function Navber() {
  const [user] = useAuthState(auth)
  // fixed top-0
  return (
    <div class="navbar bg-white z-10 ">
  <div class="navbar-start ">
    <div class="dropdown">
      <label tabindex="0" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
    
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/login'>Login</Link></li>
      <li><Link to='/blogs'>Blogs</Link></li>
      <li><Link to='/portfolio'>My Portfollio</Link></li>
      </ul>
    </div>
    <a class="btn btn-ghost normal-case text-xl">Darkfam-car-manufacturer</a>
  </div>
  <div class="navbar-end">
  <div class="navbar-center hidden lg:flex font-bold">
    <ul class="menu menu-horizontal p-0">
      <li><Link to='/'>Home</Link></li>
      <li><Link to='/blogs'>Blogs</Link></li>
      <li><Link to='/portfolio'>My Portfollio</Link></li>
     {user ? <>
      <li><Link to='/dashboard'>Dashboard</Link></li> 
      <button className='btn btn-ghost btn-primary font-bold' onClick={() => signOut(auth)}>{user.displayName}</button>
      <button className='btn btn-ghost btn-primary font-bold' onClick={() => signOut(auth)}>Signout</button>
     </>  :  
     <li><Link to='/login'>Login</Link></li> 
     }
    </ul>
  </div>
  </div>
</div>
  )
}

export default Navber