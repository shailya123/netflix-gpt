import React, { useState, useRef } from 'react'
import Header from './Header'
import { BG_URL } from '../utils/constants'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
const navigate=useNavigate()
  const [isSignInForm, setIsSignForm] = useState(true);
  const [errorMessages, setErrorMessages] = useState('');
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const dispatch=useDispatch();
  const toggleForm = () => {
    setIsSignForm(!isSignInForm);
  }

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessages(message);
    if (!message) {
      if (!isSignInForm) {
        createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value, photoURL: ""
          }).then(() => {
            const { uid, email, displayName } = auth.currentUser;
            dispatch(addUser({ uid, email, displayName }))
          }).catch((error) => {
            const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessages(errorMessage);
          });
          
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessages(errorMessage);
        });
      }
      else {
        signInWithEmailAndPassword(auth,  email.current.value, password.current.value)
          .then((userCredential) => {
            const user = userCredential.user;
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });

      }
        email.current.value = '';
        password.current.value = '';
      setErrorMessages('');
    } else {
      return;
    }
  }

  return (
    <div className='max-h-screen'>
      <Header />
      <div className='absolute'>
        <img src={BG_URL} alt='login' />
      </div>
      <form onSubmit={(e) => e.preventDefault()} className='p-12 bg-black absolute w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-80 rounded-lg'>
        <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>
        {!isSignInForm && (<input type="text" placeholder='Full Name'  ref={name}  className='py-2 my-4 w-full bg-gray-700 rounded-lg' />)}
        <input type="text" ref={email} placeholder='Email address' className='p-2 my-4 w-full bg-gray-700 rounded-lg' />
        <input type="password" ref={password} placeholder='Password' className='p-2 my-4 w-full bg-gray-700 rounded-lg' />
        {errorMessages && (<p className='text-red-500 font-semibold py-2'>{errorMessages}</p>)}
        <button className='p-4 my-4 bg-red-500 font-bold w-full rounded-lg cursor-pointer' onClick={handleButtonClick}>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>
        <p className='py-4 cursor-pointer' onClick={toggleForm}>
          {isSignInForm ? 'New to NetFlix? Sign Up Now' : 'Already regirested? Sign in now'}
        </p>
      </form>
    </div>
  )
}

export default Login
