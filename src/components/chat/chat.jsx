import React, { useContext } from 'react'
import Messages from './messages'
import Input from './input'
import { ChatContext } from '../../scripts/ChatContext'

const Chat = () => {
  const { data } = useContext(ChatContext);

  return (

    <div className='flex-1'>
      <div className='h-16 bg-green-600 flex align-middle space-x-5 p-4 text-2xl justify-between'>
        <span>{data.user.displayName}</span>
        <div className='space-x-4 text-3xl'>
          <span className='hover:cursor-pointer'><ion-icon name="person-add"></ion-icon></span>
          <span className='hover:cursor-pointer'><ion-icon name="videocam"></ion-icon></span>
          <span className='hover:cursor-pointer'><ion-icon name="ellipsis-vertical"></ion-icon></span>
        </div>
      </div>
      <Messages/>
      <Input/>
    </div>
  )
}

export default Chat