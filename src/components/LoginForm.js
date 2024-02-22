import React, { useRef, useState } from 'react'
import { NETFLIX_BG_URL, NETFLIX_USER_ICON } from '../utils/constants';
import { checkCredentials } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser } from '../redux/userSlice';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fullName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);


  const toggleForm = () => { setIsSignInForm(!isSignInForm) };

  const handleSubmit = () => {

    const result = checkCredentials(email.current?.value, password.current?.value);
    if (result) {
      setErrorMessage(result);
      return
    }
    // else setErrorMessage(null);


    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          // Updating the profile with name and photo
          updateProfile(user, {
            displayName: fullName.current.value,
            photoURL: NETFLIX_USER_ICON,
          }).then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            dispatch(addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            }));
            navigate("/browse");

          }).catch((error) => {
            setErrorMessage(error.message);
          });
        })
        // ...

        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }

    else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + ": " + errorMessage);
        });
    }

  }

  return (
    <div>

      <Header />


      <img className='w-full h-screen object-cover' alt='Netflix movie app background' src={NETFLIX_BG_URL} />
      <div className='absolute min-w-[340px] z-10 bg-black top-0 left-0 w-full h-full opacity-55'></div>


      {!auth.currentUser && <form onSubmit={(e) => e.preventDefault()} className='absolute z-30 left-0 right-0 text-white w-10/12 2xl:w-4/12 max-w-[450px] mx-auto top-[20%] p-6 md:px-20 rounded bg-black/60'>

        <h1 className='text-left text-3xl font-bold mb-6 md:mb-8'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

        {!isSignInForm && <input ref={fullName} placeholder='Full Name' className='w-full mb-6 p-3 rounded-md bg-transparent border border-white'></input>}
        <input type='email' ref={email} placeholder='Email' className='w-full mb-6 p-3 rounded-md bg-transparent border border-white'></input>
        <input type='password' ref={password} placeholder='Password' className='w-full mb-6 p-3 rounded-md bg-transparent border border-white'></input>

        {errorMessage && <div className='border-2 border-orange-700 bg-orange-300 text-orange-900 rounded-md p-2 text-sm mb-4'>{errorMessage}</div>}

        <button onClick={handleSubmit} className='w-full mb-6 p-2 rounded-md bg-red-700 text-lg opacity-100 fill-red-700'>{isSignInForm ? 'Sign In' : 'Sign Up'}</button>

        {isSignInForm ?
          <p className='text-sm md:text-base'>New to Netflix? <span onClick={toggleForm} className='font-bold hover:cursor-pointer hover:underline'>Sign Up Now.</span></p>
          : <p className='text-sm md:text-base'>Already a user? <span onClick={toggleForm} className='font-bold hover:cursor-pointer hover:underline'>Sign In Now.</span></p>}
      </form>}


    </div>
  )
}

export default LoginForm;