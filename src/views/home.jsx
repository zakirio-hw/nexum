import React from 'react'
import Button from '../components/button'

const Home = () => {
  return (
    <>
    <div className='pt-36'>
      <div className='group cursor-default text-center text-8xl flex justify-center relative'>
        <div className='text-green-400 text-neon-green absolute inline-block min-w-min transform mr-64 mt-2 z-20 
        transition-transform duration-1000 group-hover:scale-125'>
          「 」
        </div>
        <div className='absolute shadow-lg inline-block min-w-min transform justify-center'>
          <span className='text-red-400 text-neon-red'>n</span>
          <span className='text-blue-400 text-neon-blue'>&nbsp;exum</span>
        </div>
      </div>
      <div className='text-center text-4xl mt-36' style={{marginRight:"25px"}}>
        <span className='text-red-400 text-neon-red'>Connect </span>
        <span className='text-gray-500'> and </span>
        <span className='text-blue-400 text-neon-blue'> Chat</span>
      </div>
      <div className='text-center text-3xl mt-24' style={{marginRight:"52px"}}>
        <Button><div className='p-3'><a href='../main'>Open Nexum</a></div></Button>
      </div>
    </div>
    </>
  )
}

export default Home