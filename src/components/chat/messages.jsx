import React from 'react'
import '../../styles/message.scss'
import Message from './message'

const Messages = () => {
  return (
    <div className='px-3 space-y-3 overflow-y-scroll' style={{height: 'calc(100% - 128px)'}}>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
        <Message/>
    </div>
  )
}

export default Messages