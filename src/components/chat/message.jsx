import React from 'react'
import '../../styles/message.scss'
import sender from '../../svg/happy-outline.svg'

const Message = () => {
  return (
    <div className='msg sent'>
      <div className='msg-info text-gray-500'>
        <span className='icon text-5xl'><ion-icon name="code-working-outline"></ion-icon></span>
        <span>Just now</span>
      </div>
      <div className='msg-content'>
        <p>Hello</p>
        <img src='' />
      </div>
    </div>
  )
}

export default Message