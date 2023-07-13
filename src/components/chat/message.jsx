import React, { useContext, useEffect, useRef } from 'react'
import '../../styles/message.scss'
import { AuthContext } from '../../scripts/AuthContext'

const Message = ({message}) => {
  const { currentUser } = useContext(AuthContext)

  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({behavior:"smooth"})
  }, [message])
  
  
  return (
    <div ref={ref} className={`msg ${message.senderId === currentUser.uid && "sent"}`}>
      <div className='msg-info text-gray-500'>
        <span className='icon text-5xl'><ion-icon name="code-working-outline"/></span>
        <span>Just now</span>
      </div>
      <div className='msg-content'>
        <p>{message.text}</p>
        {message.img && <img src={message.img} alt="Loading / failed to load content"/>}
      </div>
    </div>
  )
}

export default Message