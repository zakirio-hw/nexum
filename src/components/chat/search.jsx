import React, { useContext, useState } from 'react'

// import 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js'
import { collection, getDoc, getDocs, query, serverTimestamp, setDoc, doc, updateDoc, where } from 'firebase/firestore'
import { db } from '../../firebase'
import { AuthContext } from '../../scripts/AuthContext'

const Search = () => {
  const [uname, setUname] = useState("")
  const [user, setUser] = useState("")
  const [err, setErr] = useState(false)
  const { currentUser } = useContext(AuthContext)

  const handleSearch = async () => {
    const q = query(collection(db, "users"),
    where("displayName", "==", uname)
    );

    try {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      });
    } catch (err) {
      setErr(true)
    }
  }

  const handleKey = (e) => {
    e.code === "Enter" && handleSearch();
  }

  const handleSelect = async () => {
    const combinedId =  
      currentUser.uid > user.uid
      ? currentUser.uid + user.uid
      : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, "chats", combinedId))

      if (!res.exists() ) {
        await setDoc(doc(db, "chats", combinedId), { messages: [] });

        await updateDoc(doc(db, "userChats", currentUser.uid), {
          [combinedId + ".userInfo"]: {
            uid: user.uid,
            displayName: user.displayName,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });

        await updateDoc(doc(db, "userChats", user.uid), {
          [combinedId + ".userInfo"]: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photoURL: currentUser.photoURL,
          },
          [combinedId + ".date"]: serverTimestamp(),
        });
      }
      setUser(null)
    } catch (err) {
      setUser(null)
      setUname("")
    }
  }

  return (
    <div className='border-b-4 border-green-600 h-30'>
        <div className='flex m-3 space-x-2'>
          <span className='text-green-500 text-neon-s-green text-lg'><ion-icon name="search-outline"></ion-icon></span>
          <input className='text-white bg-transparent outline-none placeholder:text-gray-500 placeholder:italic w-full px-1.5 mb-1.5' 
          placeholder="Search 'username#tag'" onKeyDown={handleKey} value={uname} onChange={e => setUname(e.target.value)}/>
        </div>
        {err && <span>Can't find user with specified username and tag</span>}
        {user && <div className='py-2 px-4 border-t-2 border-green-500 hover:bg-green-900 duration-200' onClick={handleSelect}>
            <div className='text-2xl'><b>{user.displayName}</b></div>
            <div className='text-gray-500'><i>Start chatting with this user</i></div>
        </div>}
    </div>
  )
}

export default Search