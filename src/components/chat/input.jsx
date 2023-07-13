import React, { useContext, useState } from 'react'
import { AuthContext } from '../../scripts/AuthContext';
import { ChatContext } from '../../scripts/ChatContext';
import { v4 as uuid } from 'uuid';
import { Timestamp, arrayUnion, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

const Input = () => {
  const { currentUser } = useContext(AuthContext)
  const { data } = useContext(ChatContext)

  const [err, setErr] = useState(false)
  const [text, setText] = useState("")
  const [img, setImg] = useState(null)

  const [isFileInputHovered, setIsFileInputHovered] = useState(false);
  const [isSendButtonHovered, setIsSendButtonHovered] = useState(false);
  const handleFileInputMouseEnter = () => { setIsFileInputHovered(true); };
  const handleFileInputMouseLeave = () => { setIsFileInputHovered(false); };
  const handleSendButtonMouseEnter = () => { setIsSendButtonHovered(true); };
  const handleSendButtonMouseLeave = () => { setIsSendButtonHovered(false); };
  const handleMsgSend = async () => {
    if (img) {
      const storageRef = ref(storage, uuid());
      const uploadTask = uploadBytesResumable(storageRef, img)
      uploadTask.on(
        (error) => {
          setErr(true)
          console.log(err)
          console.log(error)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
            await updateDoc(doc(db, "chats", data.chatId), {
              messages: arrayUnion({
                id: uuid(),
                text,
                senderId: currentUser.uid,
                date: Timestamp.now(),
                img: downloadURL
              })
            })
          })
        }
      )
    } else {
      await updateDoc(doc(db, "chats", data.chatId), {
        messages: arrayUnion({
          id: uuid(),
          text,
          senderId: currentUser.uid,
          date: Timestamp.now(),
        }),
      });
    }

    await updateDoc(doc(db, "userChats", currentUser.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    await updateDoc(doc(db, "userChats", data.user.uid), {
      [data.chatId + ".lastMessage"]: {
        text,
      },
      [data.chatId + ".date"]: serverTimestamp(),
    });

    setText("")
    setImg(null)
  } 

  return (
    <div className='h-16 border-t-4 border-b-2 border-green-500 p-3 flex'>
      <input type='file' style={{display:'none'}} id="file" onChange={e => setImg(e.target.files[0])}/>
      <label htmlFor='file' className='mr-3 text-4xl text-green-500 hover:cursor-pointer'
      onMouseEnter={handleFileInputMouseEnter} onMouseLeave={handleFileInputMouseLeave}>
        {isFileInputHovered ? ( <ion-icon name="add-circle"/> ) : ( <ion-icon name="add-circle-outline"/> )}
      </label>
      <input type='text' className='placeholder:text-gray-600 placeholder:italic outline-none bg-transparent 
      border-2 border-green-500 w-full p-1 px-1 rounded-sm' placeholder='Send a message' 
      onChange={e => setText(e.target.value)} value={text}/>
      <input type='button' style={{display:'none'}} id='send' onClick={handleMsgSend}/>
      <label htmlFor='send' className='ml-3 text-4xl text-green-500 hover:cursor-pointer'
      onMouseEnter={handleSendButtonMouseEnter} onMouseLeave={handleSendButtonMouseLeave}>
        {isSendButtonHovered ? ( <ion-icon name="send"/> ) : ( <ion-icon name="send-outline"/> )}
      </label>
    </div>
  )
}

export default Input