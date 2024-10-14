import React from 'react'
import { LOGO } from '../utils/constants'

const Header = () => {
  return (
    <div className='absolute w-44 px-8 py-2 bg-gradient-to-b from-black z-30'>
     <img src={LOGO}/>
    </div>
  )
}

export default Header
