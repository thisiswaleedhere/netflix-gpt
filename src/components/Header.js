import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';
import { useNavigate } from 'react-router-dom';
import { NETFLIX_LOGO_URL, NETFLIX_USER_ICON } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  const [isSignOutVisible, setIsSignOutVisible] = useState(false);

  useEffect(() => {
    if (isSignOutVisible) {
      setTimeout(() => {
        setIsSignOutVisible(false);
      }, 5000);
    };
  }, [isSignOutVisible])

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

  const handleSignOut = () => { signOut(auth).then(() => { }).catch((error) => { }); }

  return (
    <>
      {/* Netflix Logo and Background Gradient */}
      <div className='absolute left-0 right-0 z-20 bg-gradient-to-b from-black flex justify-between'>
        <img className='w-24 mt-6 ml-6 md:pt-0 md:w-36 ' alt="Netflix Logo" src={NETFLIX_LOGO_URL} />

        {user &&
          <div className='flex mt-6 mr-6'>

            <img className='h-7 w-7 md:h-10 md:w-10 cursor-pointer' alt="User Icon" onClick={() => setIsSignOutVisible(!isSignOutVisible)} src={NETFLIX_USER_ICON} />

            {isSignOutVisible &&
              <div onClick={handleSignOut} className='transition-all px-1 md:px-3 md:pt-1 text-sm md:text-base bg-red-100 border-y-2 border-r-2 border-red-700 font-semibold text-red-700 cursor-pointer'>
                Sign Out
              </div>}
          </div>
        }

      </div>
    </>
  )
}

export default Header;