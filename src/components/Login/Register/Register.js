import React, { useEffect } from 'react'
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../../Shared/SocialLogin/SocialLogin';
import useToken from '../../Shared/useToken/useToken';
import { toast } from 'react-toastify';


function Register() {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const location = useLocation()
  const navigate = useNavigate()
  const [token] = useToken(user)
  let from = location.state?.from?.pathname || '/'

  useEffect(() => {
    if(error){
        toast.error(error.message)
    }
}, [error])

  if(token){
      navigate(from,{replace:true})
  }
  let signError;
  if (error || updateError) {
    signError = <p className='text-red-500 mt-2'>{error.message}</p>
}

const onSubmit = async data => {
  await createUserWithEmailAndPassword(data.email, data.password)
  await updateProfile({ displayName: data.name })
};
if ( loading || updating ) {
  return <Loading />
}
  return (
    <div className='flex h-auto justify-center items-center border pt-16'>
    <div className='card w-96 bg-base-100 shadow-xl p-4 my-10 '>
        <div className='card body p-4'>
            <p className='text-center font bold text-2xl'>Sign Up</p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="text" placeholder="Enter your name" className="input input-bordered w-full max-w-xs" {...register("name", {
                        required: {
                            value: true,
                            message: "name is required!"
                        },
            
                    })} />

                    {errors.name?.type === 'required' && <span className='label-text-alt text-red-500 ' >{errors.name.message}</span>}

                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="Enter your email" className="input input-bordered w-full max-w-xs" {...register("email", {
                        required: {
                            value: true,
                            message: "Email is required!"
                        },
                        pattern: {
                            value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                            message: "The email is not valid"
                        }

                    })} />

                    {errors.email?.type === 'required' && <span className='label-text-alt text-red-500 ' >{errors.email.message}</span>}

                    {errors.email?.type === 'pattern' && <span className='label-text-alt text-red-500 ' >{errors.email.message}</span>}
                </div>
                <div className="form-control w-full max-w-xs">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="Enter your Password" className="input input-bordered w-full max-w-xs " {...register("password", {
                        required: {
                            value: true,
                            message: "Password not found!"
                        },
                        minLength: {
                            value: 6,
                            message: "The password must be 6 characters long"
                        }

                    })} />

                    {errors.password?.type === 'required' && <span className='label-text-alt text-red-500 ' >{errors.password?.message}</span>}

                    {errors.password?.type === 'minLength' && <span className='label-text-alt text-red-500 ' >{errors.password?.message}</span>}
                </div>

                {signError}
                <input type="submit" value="Sign up" className='btn btn-primary text-white w-full max-w-xs my-5' />
            </form>
                    <p className='font-bold'>Already a user?<Link to="/login" className='text-primary font-medium'> Login here</Link> </p>
            
           
        </div>
       <SocialLogin/>
    </div>
    </div>
  )
}

export default Register