import React, { useEffect } from 'react'
import { LOGO, USER_AVATAR } from '../utils/constants'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store => store.user))

  const handleSignout = () => {
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => { })
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }))
        navigate("/browse");
      } else {
        navigate("/");
        dispatch(removeUser());
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className='w-screen absolute flex justify-between px-8 py-2 bg-gradient-to-b from-black z-30'>
      <img className="w-44" src={LOGO} />
      {user &&
        <div className='flex p-2'>
          <img className="w-12 h-12" alt="userIcon" src={USER_AVATAR} />
          <button onClick={handleSignout} className='font-bold text-white'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header
