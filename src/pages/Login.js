import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/Auth'

function Login() {
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
  const [error, seterror] = useState('')
  const {user,login} = UserAuth()
  const navigate = useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault()
    seterror('')
    try{
      await login(email,password)
      navigate('/')
    }catch(error){
      console.log(error)
    seterror('')  
    }
  }
  return (
    <div className='w-full h-screen'>
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://www.whats-on-netflix.com/wp-content/uploads/2021/08/netflix-library-photo-scaled.jpg" alt="sign in background image" />
        <div className='bg-black/60 fixed top0 w-full h-screen'></div>
        
        <div className='fixed w-full px-4 py-24 z-50'>
             <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                <div className='max-w-[320px] mx-auto py-16'>
                    <h1 className='text-3xl font-bold'>Sign In</h1>
                    {error ? <p className='p-3 bg-red-500 my-2'>{error}</p>: null}
                    <form onSubmit={handleSubmit} action="">
                        <input onChange={(e) => setemail(e.target.value)} className='w-full p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email'/>
                        <input onChange={(e) => setpassword(e.target.value)} className='w-full p-3 my-2 bg-gray-700 rounded' type="password" placeholder='Password' autoComplete='current-password'/>
                                
                        <button className='w-full bg-red-600 py-3 my-6 rounded font-bold'>Sign In</button>
                        <div className='flex justify-between items-center text-sm text-gray-600'>
                            <p><input type="checkbox" />Remember me</p>
                            <p>Need Help?</p>
                        </div>
                        <p className='py-4'>
                        <span className='text-gray-600 ' >New to Netflix?
                        </span>{' '}
                        <Link to ='/signup'>Sign Up </Link>
                        </p>
                    </form>
                </div>
             </div>
        </div>
    </div>
  )
}

export default Login