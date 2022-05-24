import React, { useEffect } from 'react'
import Loading from '../Loading/Loading';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {  useNavigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css'
import { toast } from 'react-toastify';
import useToken from '../useToken/useToken';

function SocialLogin() {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    const location = useLocation()
    const [token] = useToken(googleUser) 
    let from = location.state?.from?.pathname || '/'
   
    useEffect(() => {
        if( googleError){
            toast.error(googleError.message)
        }
    }, [googleError])
    if(token){
        navigate(from,{replace:true})
    }
    if(googleLoading){
        return <Loading/>
    }
  return (
    <div>
          <div className='divider'>OR</div>
                <button
                    className="btn social-btn"
                    onClick={() => signInWithGoogle()}
                >Continue with google</button>
    </div>
  )
}

export default SocialLogin;