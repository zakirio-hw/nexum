import { useContext } from 'react'
import { AuthContext } from '../scripts/AuthContext'
import Chat from '../components/chat/chat'
import Sidebar from '../components/chat/sidebar'

const Main = () => {
  const {currentUser} = useContext(AuthContext)
  let uname = '', discr = ''
  
  if (currentUser && currentUser.displayName) {
    const disp_name = currentUser.displayName
    uname = disp_name.slice(0, -5)
    discr = disp_name.slice(-5)
  }

  return (
    <div className='w-full h-5/6'>
      <div className='self-center text-center text-6xl pt-16'>
        <span className='text-blue-400 text-neon-blue'>Welcome, </span>
        <span className='text-red-400 text-neon-red'>{uname}</span>
        <span className='text-red-400 text-neon-red text-3xl'>{discr}</span>
      </div>
      <div className="mt-10 w-5/6 h-5/6 ml-32 rounded border-4 border-green-600 neon-green flex">
        <Sidebar />
        <Chat />
      </div>
    </div>
  )
}

export default Main