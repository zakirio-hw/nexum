import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, signOut, updateProfile } from 'firebase/auth'
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from '../firebase'
import { gen_uname } from '../scripts/functions';

import Validation from '../scripts/RegisterValidation';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  })

  const navigate = useNavigate();
  const [err, setErr] = useState(false)
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}));
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrors(Validation(values));
    const tempName = event.target[0].value;
    const displayName = gen_uname(tempName);
    const email = event.target[1].value;
    const password = event.target[2].value;

    if (errors.name === "" && errors.email === "" && errors.password === "") {
      try {
        const re_auth = getAuth()
        createUserWithEmailAndPassword(re_auth, email, password)
          .then((userCredential) => {
            const user = userCredential.user

            updateProfile(user, {
              displayName
            })

            setDoc(doc(db, "users", user.uid), {
              uid: user.uid,
              displayName,
              email,
              password,
            });

            setDoc(doc(db, "userChats", user.uid), {});
            
            signOut(auth)
              .then(() => {
                alert('Re-log into your account');
              })
              .catch((error) => {
                alert('An error occurred');
                console.error(error);
              });

            console.log("Success")
            navigate('/login')
          })
          .catch((err) => {
            console.log(err.code);
            console.log(err.message);
          })
      } catch (err) {
        setErr(true)
        console.log(err)
      }
    }
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-red-400 text-neon-red">
            <span className='text-blue-400 text-neon-blue'>Register</span><span> a new account</span>
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
              <span className='text-blue-400 text-neon-blue'>&nbsp;exum</span>
            </div>
          </div>
          <form className="space-y-6 p-6 pt-24" action="#" method="POST" autoComplete='false' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-blue-500 text-neon-blue">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete='false'
                  onChange={handleInput}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-400 bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-900 focus:neon-gray sm:text-sm sm:leading-6"
                />
                {errors.name && <span className='text-red-500 text-neon-red my-2'> {errors.name}</span>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-blue-500 text-neon-blue">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete='false'
                  onChange={handleInput}
                  className="block w-full rounded-md border-0 p-1.5 text-gray-400 bg-gray-800 shadow-sm ring-1 ring-inset ring-gray-900 focus:neon-gray sm:text-sm sm:leading-6"
                />
                {errors.email && <span className='text-red-500 text-neon-red my-2'> {errors.email}</span>}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-blue-500 text-neon-blue">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete='new-password'
                  onChange={handleInput}
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
                Register
              </button>
            </div>
            <p className='mt-4'>{err && <span className='text-red-500 text-neon-red'>Registration error. 	&#40;A record may have already existed&#41;</span>}</p>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500 pb-2">
            Already have an account?{' '}
            <a href="../login" className="font-semibold leading-6 text-green-600 hover:text-green-500">
              Log In
            </a>
          </p>
        </div>
      </div>

    </>
  )
}

export default Register;