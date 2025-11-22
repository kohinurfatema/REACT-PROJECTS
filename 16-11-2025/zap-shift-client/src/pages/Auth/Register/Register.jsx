import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router';
import SocialLogin from '../SocialLogin/SocialLogin';
import { GoogleAuthProvider } from 'firebase/auth';
import axios from 'axios';



const Register = () => {

   const {register, handleSubmit, formState: {errors}} = useForm();

   const {registerUser,updateUserProfile} = useAuth();
   const location = useLocation()
   const navigate = useNavigate()

   const handleRegistration =(data) =>{
    console.log('after registration', data.photo[0]);

    const profileImg = data.photo[0];

    registerUser(data.email,data.password)
    .then(result =>{
        console.log(result.user);
        const formData = new FormData();
        formData.append('image',profileImg);
        //sent the photo to store and get the UI
        const image_API_URL =`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`

        axios.post(image_API_URL,formData)
        .then(res =>{
           console.log('after image upload',res.data.data.url)

          //update user profile to firebase
          const userProfile ={
            displayName:data.name,
            photoURL:res.data.data.url
          }
          updateUserProfile(userProfile)
          .then(() => {
            console.log('user profile updated done')
            navigate(location?.state || '/')
          })
          .catch(error => {
            console.log(error);
          })

        })
    })
    .catch(error =>{
        console.log(error);
    })

   }

    return (
        <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl">
            <h2 className='text-3xl text-center'>Create an account</h2>
            <p className='text-center'>Please Register</p>
            <form className="card-body" onSubmit={handleSubmit(handleRegistration)}>
                <fieldset className="fieldset">
                    
                    <label className="label">Name</label>
                    <input type="text" {...register('name',{required: true})} className="input" placeholder="Your Name" />
                    {
                        errors.name?.type==='required'&& <p className='text-red-500'>Name is required</p>
                    }

                    <label className="label">Photo</label>
                    <input type="file" {...register('photo',{required: true})} className="file-input" placeholder="Your photo" />
                    {
                        errors.name?.type==='required'&& <p className='text-red-500'>Photo is required</p>
                    }

                    <label className="label">Email</label>
                    <input type="email" {...register('email',{required: true})} className="input" placeholder="Email" />
                    {
                        errors.email?.type==='required'&& <p className='text-red-500'>Email is required</p>
                    }
                   
                    {/* password */}
                    <label className="label">Password</label>
                    <input type="password" {...register('password',{required: true, minLength: 6,  pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/})} className="input" placeholder="Password" />
                    {
                        errors.password?.type==='required'&& <p className='text-red-500'>Password is required</p>
                    }
                    {
                        errors.password?.type==='minLength'&& <p className='text-red-500'>Password should be 6 characters or more</p>
                    }
                    {
                        errors.password?.type === 'pattern' && <p className='text-red-500'>Password must have at least one uppercase, at least one lowercase, at least one number, and at least one special characters</p>
                    }
                    

                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Register</button>
                </fieldset>
                <p>Already have an account.</p><Link 
                 state={location.state}
                 className='text-blue-700 underline' to='/login'>Login</Link>
                
            </form>
            <SocialLogin></SocialLogin>
            
        </div>
    );
};

export default Register;