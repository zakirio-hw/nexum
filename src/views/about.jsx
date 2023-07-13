import React from 'react'
import PX5 from '../img/Adimas.jpg'
import PX6 from '../img/Zakirio.jpg'

const About = () => {
  return (
    <div className='py-20'>
        <div className='group cursor-default text-center text-8xl flex justify-center relative'>
            <div className='text-green-400 text-neon-green absolute inline-block min-w-min transform mr-64 mt-2 z-20 
            transition-transform duration-1000 group-hover:scale-125'>
            「 」
            </div>
            <div className='absolute shadow-lg  justify-center'>
                <span className='text-red-400 text-neon-red'>n</span>
                <span className='text-blue-400 text-neon-blue'>&nbsp;exum</span>
                <p className="text-2xl pt-[50px] justify-center text-blue-400 text-neon-blue">Hi! Welcome to <span className='text-neon-red text-red-400'>nexum</span>, your reliable chatting website.<br/> Send messages, make video calls, and also share files with your friends, your beloved ones,<br/> 
                and of course... anyone in this world as long you know their username and tag!<br/></p>
                <p className="text-2xl pt-[50px] pb-8 text-green-400 text-neon-green">Also, meet our developers!</p>
                <span class="flex justify-center space-x-[200px] pt-5">
                    <a href='https://www.instagram.com/admsfrhn/'><span><img src={PX5} alt='Just click to get to his Instagram lol' className="pt-5 rounded w-[350px] transition duration-300 ease-in-out hover:opacity-50 border-4 border-green-600 neon-green"></img><p className='text-2xl text-neon-red pt-5 pb-20'>Adimas Farhan Putranto</p></span></a>
                    <a href='https://www.instagram.com/zakirio_wasis/'><span><img src={PX6} alt='Haha funny embed fail' className="pt-5 rounded w-[350px] transition duration-300 ease-in-out hover:opacity-50 border-4 border-green-600 neon-green"></img><p className='text-2xl text-neon-red pt-5 pb-20'>Zakirio Hugoraazaq Wasis</p></span></a>
                </span>
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default About