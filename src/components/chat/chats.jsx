import { doc, onSnapshot } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { db } from '../../firebase'
import { AuthContext } from '../../scripts/AuthContext'
import { ChatContext } from '../../scripts/ChatContext'

const Chats = () => {
  const { currentUser } = useContext(AuthContext)
  const { dispatch } = useContext(ChatContext)
  const [chats, setChats] = useState([])

  useEffect(() => {
    const getChats = () =>  {
      const unsub = onSnapshot(doc(db, "userChats", currentUser.uid), (doc) => {
        setChats(doc.data());
      });

      return () =>{
        unsub();
      };
    };

    currentUser.uid && getChats()
  }, [currentUser.uid])

  const handleSelect = (u) => {
    dispatch({type:"CHANGE_USER", payload: u})
  }

  return (
    <div className='h-fit border-2 overflow-y-scroll border-green-500' style={{maxHeight: 'calc(91%)'}}>
      {Object.entries(chats)?.sort((a, b) => b[1].date - a[1].date).map((chat) => (
        <div className='py-2 px-4 border-b-2 border-green-500 hover:bg-green-900 duration-200'
          key={chat[0]} onClick={() => handleSelect(chat[1].userInfo)}>
          <div className='text-2xl'><b>{chat[1].userInfo.displayName}</b></div>
          <div className='text-gray-500'>{chat[1].lastMessage?.text}</div>
        </div>
      ))}
    </div>
  )
}

export default Chats