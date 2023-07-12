import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-blue-600 text-white py-2 px-6 rounded md:ml-8 hover:bg-blue-500 hover:neon-s-blue
    duration-500'>
      {props.children}
    </button>
  )
}

export default Button;