import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { NETFLIX_LOGO_URL, NETFLIX_USER_ICON } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {

      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({
          uid: uid,
          email: email,
          displayName: displayName,
          photoURL: photoURL,
        }));
        navigate("/browse");

      } else {
        dispatch(removeUser());
        navigate("/");
      }

    });

    return () => unsubscribe();
  }, []);


  return (
    <>
      {/* Netflix Logo and Background Gradient */}
      <div className='absolute left-0 right-0 z-20 bg-gradient-to-b from-black flex flex-col md:flex-row md:justify-between'>
        <img className='w-32 mx-auto mt-6 md:mx-0 md:ml-6 ' alt="Netflix Logo" src={NETFLIX_LOGO_URL} />
        <div>
          <img className='w-8 md:mt-6 md:mr-6' alt="User Icon" src={NETFLIX_USER_ICON} />
        </div>
      </div>
    </>
  )
}

export default Header;