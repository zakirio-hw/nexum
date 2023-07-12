import React from 'react'

const Home = () => {
  return (
    <div className='pt-48'>
      <div className='group cursor-default text-center text-8xl flex justify-center relative'>
        <div className='text-green-400 text-neon-green absolute inline-block min-w-min transform mr-64 mt-2 z-20 
        transition-transform duration-1000 group-hover:scale-125'>
          「 」
        </div>
        <div className='absolute shadow-lg inline-block min-w-min transform mr0 justify-center'>
          <span className='text-red-400 text-neon-red'>n</span>
          <span className='text-blue-400 text-neon-blue'>&nbsp;exum</span>
        </div>
      </div>
    </div>
  )
}

export default Home