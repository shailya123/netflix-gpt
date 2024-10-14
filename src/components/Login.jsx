import React, { useState } from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constants'

const Login = () => {

  const [isSignInForm, setIsSignForm] = useState(true);

  const toggleForm = () => {
    setIsSignForm(!isSignInForm);
  }
  return (
    <div>
      <Header />
      <div className='absolute'>
        <img src={BG_URL} alt='login' />
      </div>
      <form className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && (<input type="text" placeholder='Full Name' className='p-2 my-2 w-full bg-gray-700 rounded-lg' />)}
        <input type="text" placeholder='Email address' className='p-2 my-2 w-full bg-gray-700 rounded-lg' />
        <input type="password" placeholder='Password' className='p-2 my-2 w-full bg-gray-700 rounded-lg' />
        <button className='p-4 my-4 bg-red-500 font-bold w-full rounded-lg cursor-pointer'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4 cursor-pointer' onClick={toggleForm}>
          {isSignInForm ? 'New to NetFlix? Sign Up Now' : 'Already regirested? Sign in now'}
        </p>
      </form>
    </div>
  )
}

export default Login
