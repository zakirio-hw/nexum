import React, { useContext, useEffect, useState } from 'react'
import '../../styles/message.scss'
import Message from './message'
import { ChatContext } from '../../scripts/ChatContext'
import { doc, onSnapshot } from 'firebase/firestore'
import { db } from '../../firebase'

const Messages = () => {
  const [messages, setMessages] = useState([])
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages)
    })

    return () => {
      unSub()
    }
  }, [data.chatId])

  

  return (
    <div className='px-3 py-2 space-y-3 overflow-y-scroll' style={{height: 'calc(100% - 128px)'}}>
      {messages.map(m => (
        <Message message={m} key={m.id}/>
      ))}
    </div>
  )
}

export default Messages