import React from 'react'

const Button = (props) => {
  return (
    <button className='bg-blue-600 text-white py-3 px-6 rounded md:ml-8 hover:bg-blue-500 hover:neon-s-blue
    duration-500' style={{textShadow: '0 0 8px #ffffff, 0 0 16px #ffffff, 0 0 24px #ffffff, 0 0 32px #00c3ff, 0 0 48px #00c3ff, 0 0 64px #00c3ff, 0 0 80px #00c3ff'}}>
      {props.children}
    </button>
  )
}

export default Button;