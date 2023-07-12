import React, { useContext, useState } from 'react'
import Button from './button';
import { useLocation } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../scripts/AuthContext' 

const Navbar = () => {
    let Links =[
      {name:"SERVICE",link:"/"},
      {name:"ABOUT",link:"/"},
      {name:"CONTACT",link:"/"},
    ];
    let [open,setOpen]=useState(false);

    const location = useLocation();
    const { clearAuthData } = useContext(AuthContext)

    const ShowButton = () => {
      /*if (location.pathname === '/home') */ { <Button><a href='../main'>Open Nexum</a></Button> }
      /*if (location.pathname === '/main') */ { <Button><a onClick={handleSignOut}>Log Out</a></Button> }
    }

    const handleSignOut = () => {
      clearAuthData()
      signOut(auth)
        .then(() => {
          alert('You have been signed out.');
        })
        .catch((error) => {
          alert('An error occurred while signing out.');
          console.error(error);
        });
    };

  return (
    <div className='shadow-md w-full fixed top-0 left-0 font-cons'>
      <div className='md:flex items-center justify-between rounded-lg neon-green bg-green-500 py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center text-gray-800'>
          <div className='p-1.5 bg-black rounded-lg'>
            <a href='../'>
              <div className="mx-auto text-2xl">
                <span className='text-green-600 text-neon-s-green'>「</span>
                <span className='text-red-600 text-neon-s-red'>n</span>
                <span className='text-green-600 text-neon-s-green'>」</span>
              </div>
            </a>
          </div>
        </div>
        <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-green md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}>
        {
          Links.map((link)=>(
            <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
              <b><a href={link.link} className='text-white hover:text-neon-s-red hover:text-red-500 duration-500'>{link.name}</a></b>
            </li>
          ))
        }
        {location.pathname === '/home' && <Button><a href='../main'>Open Nexum</a></Button>}
        {location.pathname === '/main' && <Button><a onClick={handleSignOut}>Log Out</a></Button>}
      </ul>
      </div>
    </div>
  )
}

export default Navbar;