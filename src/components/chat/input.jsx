import React, { useState } from 'react'

const Input = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <div className='h-16 border-t-4 border-b-2 border-green-500 p-3 flex'>
      <input type='file' style={{display:'none'}} id="file" />
      <label htmlFor='file' className='mr-3 text-4xl text-green-500 hover:cursor-pointer'
      onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {isHovered ? ( <ion-icon name="add-circle"/> ) : ( <ion-icon name="add-circle-outline"/> )}
      </label>
      <input type='text' className='placeholder:text-gray-600 placeholder:italic outline-none bg-transparent 
      border-2 border-green-500 w-full p-1 px-1 rounded-sm' placeholder='Send a message'/>
      <span className='ml-3 text-4xl text-green-500 hover:cursor-pointer'><ion-icon name="send-outline"/></span>
    </div>
  )
}

export default Input