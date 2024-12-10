import React from 'react'
import { useSelector } from 'react-redux'
import lang from '../utils/languageConstant'

const GptSearchBar = () => {

    const langKey=useSelector(store=>store.config.lang)
  return (
    <div className='pt-[20%] flex justify-center'>
      <form className=' bg-black w-1/2 grid grid-cols-12 rounded-md'>
        <input type="text" className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className=' m-4 py-2 px-5 bg-red-500 text-white rounded-md col-span-3'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default GptSearchBar
