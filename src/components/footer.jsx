import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-green-500 neon-green text-white'>
        <div className='md:flex md:justify-between md:items-center sm:px-12 px-4 py-7'>
            <div><h1 className='text-5xl'>©</h1></div>
            <div style={{marginRight:'84%'}}>
                <p>
                    Adimas Farhan Putranto
                    <br></br>
                    Zakirio Hugoraazaq Wasis
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer