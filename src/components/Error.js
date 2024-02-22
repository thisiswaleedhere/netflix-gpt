import React, { useState } from 'react'
import Header from './Header'
import { NETFLIX_BG_URL } from '../utils/constants'
import { useNavigate, useRouteError } from 'react-router-dom'

const Error = () => {

    const err = useRouteError();
    const [showError, setShowError] = useState(false);
    const navigate = useNavigate();

    return (
        <div>
            <Header />

            {/* Background and Overlay Element */}
            <img className='w-full h-screen object-cover' alt='Netflix movie app background' src={NETFLIX_BG_URL} />
            <div className='absolute z-10 bg-black top-0 left-0 w-full h-full opacity-55'></div>


            <div className='absolute w-2/3 md:w-1/2 z-20 rounded-md text-gray-300 bg-black/60 px-4 md:px-8 py-4 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
                <h1 className='text-xl md:text-3xl font-semibold'>Uh Oh!</h1>
                <h1 className='text-base md:text-lg py-2'>The page you are trying to access does not exist or has moved to a new address.</h1>
                <h2 onClick={() => navigate('/browse')} className='hover:underline cursor-pointer text-white pt-4'>Click here to go back to the Movie Browse section.</h2>
                {!showError && <p onClick={() => setShowError(true)} className='hover:underline cursor-pointer pt-2'>Click here for more info</p>}
                {showError && <div>
                    <h1 className='text-sm text-gray-400 pt-6'>Error Information</h1>
                    <h1>{err.status}: {err.statusText}</h1>
                    <h2>{err.data}</h2>
                </div>}
            </div>
        </div>
    )
}

export default Error