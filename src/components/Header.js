import { onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../redux/userSlice';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { NETFLIX_LOGO_URL, NETFLIX_USER_ICON } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);
  const location = useLocation();

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

        if (location.pathname === "/") { navigate("/browse"); }

      } else {
        dispatch(removeUser());
        navigate("/");
      }

    });

    return () => unsubscribe();
  }, []);

  const handleSignOut = () => { signOut(auth).then(() => { }).catch((error) => { }); }

  return (
    <div>
      {/* Netflix Logo and Background Gradient */}
      <div className='absolute min-w-[340px] max-w-[1800px] 2xl:mx-auto left-0 right-0 z-20 bg-gradient-to-b from-black flex justify-between'>
        <Link to={'/browse'} > <img className='w-16 xs:w-20 sm:w-24 mt-4 ml-4 sm:mt-6 sm:ml-6 md:pt-0 md:w-36 ' alt="Netflix Logo" src={NETFLIX_LOGO_URL} /></Link>

        {user &&
          <div className='flex mt-4 mr-4 xs:mt-6 xs:mr-6'>

            <img className='h-4 w-4 xs:h-6 xs:w-6 md:h-10 md:w-10 cursor-pointer' alt="User Icon" onClick={() => setIsSignOutVisible(!isSignOutVisible)} src={NETFLIX_USER_ICON} />

            {isSignOutVisible &&
              <div onClick={handleSignOut} className='animate-enter-scene px-1 md:px-3 pt-[1px] md:pt-1 text-[8px] xs:text-[12px] md:text-base border-y-[1px] border-r-[1px] xs:border-y-2 xs:border-r-2 border-red-700 font-semibold text-red-100 cursor-pointer'>
                Sign Out
              </div>}
          </div>
        }

      </div>
    </div>
  )
}

export default Header;