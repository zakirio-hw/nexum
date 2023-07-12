import React from 'react'
import Search from './search'
import Chats from './chats'

const Sidebar = () => {
  return (
    <div className='flex-initial w-1/3 border-2 border-green-600'>
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar