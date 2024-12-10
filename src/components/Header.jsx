import React, { useEffect } from 'react'
import { LOGO, SUPPORTED_LANGUAGES, USER_AVATAR } from '../utils/constants'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { auth } from '../utils/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, removeUser } from '../utils/userSlice'
import { toggleGptSearchView } from '../utils/gptSlice'
import { changeLanguage } from '../utils/configSlice'
const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store => store.user))
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch)

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

  const handleGptSearchClick=()=>{
    dispatch(toggleGptSearchView())
  }

  const handleLanguageChange=(e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='w-screen absolute flex justify-between px-8 py-2 bg-gradient-to-b from-black z-30'>
      <img className="w-44" src={LOGO} />
      {user &&
        <div className='flex p-2 justify-between'>
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button className='py-1 px-4 text-white rounded-md mx-4 bg-red-500' onClick={handleGptSearchClick}>{showGptSearch?'Home Page':'GPT Search'}</button>
          <img className="w-12 h-12" alt="userIcon" src={USER_AVATAR} />
          <button onClick={handleSignout} className='font-bold text-white'>Sign Out</button>
        </div>}
    </div>
  )
}

export default Header
