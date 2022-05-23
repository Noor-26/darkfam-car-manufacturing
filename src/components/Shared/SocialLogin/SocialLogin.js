import React from 'react'
import Loading from '../Loading/Loading';
import {  useSignInWithGoogle } from 'react-firebase-hooks/auth';
import {  useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css'

function SocialLogin() {
    const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);

    const navigate = useNavigate()
    let signError;
    if (googleError ) {
        signError = <p className='text-red-500 mt-2'>{googleError.message}</p>
    }
    if(googleUser){
        navigate('/')
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
                {signError}
    </div>
  )
}

export default SocialLogin;