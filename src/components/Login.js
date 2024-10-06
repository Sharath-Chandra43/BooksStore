import React, { useRef, useState } from 'react';
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
 
  const navigate=useNavigate();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleSignIN = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Ensure email reference is not null before accessing value
    console.log('email.current:', email.current);
    if (email.current) {
      const message = checkValidData(email.current?.value, password.current?.value, name.current?.value);
      setErrorMessage(message);
  
      if (message) return;
  
      if (!isSignInForm) {
        // Sign Up
        createUserWithEmailAndPassword(auth, email.current?.value, password.current.value)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            navigate('/')
            console.log(user);
            

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
            // ...
          });
      } else {
        // Sign In Login
      signInWithEmailAndPassword(auth, email.current?.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
        const user = userCredential.user;
        navigate('/')
        console.log(user);
          // ...
      })
        .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    }
  }
      
  };

  return (
    <div className=' '>
      <div className='absolute w-screen'>
        <img src="https://static.vecteezy.com/system/resources/thumbnails/039/830/455/small_2x/ai-generated-an-open-book-photo.jpg" alt='background' className=' w-full' />
      </div>
      <form onSubmit={(e) => e.preventDefault()}className=' w-3/6 p-24   rounded-lg absolute mx-auto right-0 left-0 my-32 '>
        <h1 className='text-3xl font-bold text-black mb-4'>{isSignInForm ? "Sign In" : "Sign Up" }</h1>
        {!isSignInForm && (<input type="text" placeholder="Full Name" className="p-2 m-2 rounded-lg" ref={name} />)}
        <input type="text" placeholder="Email Address" className="p-2 m-2 rounded-lg  text-black " ref={email} />
        <input type="password" placeholder="Password" className="p-2 m-2 rounded-lg" ref={password} />
        <p className='font-bold text-red-600 p-4 mt-0'>{errorMessage}</p>
        <button className='px-4 py-2 rounded-md bg-red-500 text-white font-semibold hover:bg-black transition-all ' onClick={handleButtonClick}> {isSignInForm ? "Sign In" : "Sign Up" }</button>
        <p className='mt-6 ml-4 font-bold font-mono cursor-pointer' onClick={toggleSignIN}>{isSignInForm ? "Click Here to Sign Up" : "Already a User login" } </p>
      </form>
    </div>
  );
};

export default Login;