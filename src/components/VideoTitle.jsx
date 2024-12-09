import React from 'react'

const VideoTitle = ({title,description}) => {
  return (
    <div className='pt-[25%] px-24 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>
      <h1 className='font-bold text-6xl'>{title}</h1>
      <p className='py-6 text-lg font-semibold w-1/4'>{description}</p>
      <div className=''>
        <button className='bg-white text-black font-bold text-lg  py-4 px-12 rounded-md hover:bg-opacity-50'>Play</button>
        <button className='mx-2 bg-gray-700 text-black font-bold  py-4 px-12 rounded-md hover:bg-opacity-50'>More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
