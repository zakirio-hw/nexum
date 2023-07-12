import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth'
import { auth, db } from '../firebase'

import Validation from '../scripts/LoginValidation';

const LogIn = () => {
  const [values, setValues] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const [err, setErr] = useState(false)
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    const email = event.target[0].value;
    const password = event.target[1].value;

    if (errors.email === "" && errors.password === "") {
      try {
        const re_auth = getAuth()
        signInWithEmailAndPassword(re_auth, email, password)
          .then(() => {
            console.log("Success")
            navigate('/main')
          })
          .catch((err) => {
            console.log(err.code);
            console.log(err.message);
            setErr(true)
          })
      } catch (err) {
        setErr(true)
      }
    }
  }

  return (
    <>
      
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-red-400 text-neon-red">
            <span className='text-blue-400 text-neon-blue'>Log In</span><span> to your account</span>
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm rounded border-4 border-green-600 neon-green">
          <div className='group text-center text-4xl flex justify-center relative pt-8'>
            <div className='text-green-400 shadow-lg text-green-neon absolute inline-block min-w-min transform mt-1 z-20 
            transition-transform duration-1000 group-hover:scale-125' style={{marginRight: '6.5rem'}}>
              「 」
            </div>
            <div className='absolute shadow-lg inline-block min-w-min transform justify-center'>
              <span className='text-red-400 text-neon-red'>n</span>
              <span className='text-blue-400 text-blue-neon'>&nbsp;exum</span>
            </div>
          </div>
          <form className="space-y-6 p-6 pt-24" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-blue-500 text-blue-neon">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  onChange={handleInput}
                  autoComplete="email"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-400 bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-900 focus:neon-gray sm:text-sm sm:leading-6"
                />
                {errors.email && <span className='text-red-500 text-neon-red my-2'> {errors.email}</span>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-blue-500 text-blue-neon">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  onChange={handleInput}
                  autoComplete="current-password"
                  className="block w-full rounded-md border-0 p-1.5 text-gray-400 bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-900 focus:neon-gray sm:text-sm sm:leading-6"
                />
                {errors.password && <span className='text-red-500 text-neon-red my-2'> {errors.password}</span>}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-bold leading-6 
                text-black neon-s-green hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
                focus-visible:outline-green-600"
              >
                Sign in
              </button>
              <p className='mt-4'>{err && <span className='text-red-500 text-neon-red'>Invalid login details.</span>}</p>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500 pb-2">
            Don't have an account?{' '}
            <a href="../register" className="font-semibold leading-6 text-green-600 hover:text-green-500">
              Register now
            </a>
          </p>
        </div>
      </div>
    </>
  )
}

export default LogIn;