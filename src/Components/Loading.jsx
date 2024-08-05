// import React from 'react'
import Load from "../assets/Preview.gif"

const Loading = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <img 
      className="w-full h-full"
      src={Load} alt="Gif" />
    </div>
  )
}

export default Loading
