import React from 'react'
import useMovieFetch from '../hooks/useMovieFetch';
import { useSelector } from 'react-redux';

const VideoDetails = ({ id }) => {

    useMovieFetch(id);
    const movieDetails = useSelector((store) => store.movies.movieInfo);


    return (<>
        {movieDetails &&
            <div className='w-[98vw] aspect-[16/8] lg:aspect-[16/5] bg-gradient-to-r from-black text-white'>

                <div className='pl-5 relative top-16 md:top-40'>

                    <div className='md:pb-2 w-1/2 text-xs md:text-lg text-gray-300'>{movieDetails.tagline}</div>

                    <div className='text-2xl md:text-6xl font-semibold '> {movieDetails.title} </div>

                    <div className='hidden md:block pt-6 w-1/2'>{movieDetails.overview}</div>

                    <button className='text-gray-300 bg-gray-100/30 transition-all hover:bg-gray-100 hover:text-black cursor-pointer mt-2 md:mt-5 rounded-md text-xs md:text-xl px-6 py-1.5 md:px-12 md:py-2'>
                        Play</button>


                </div>

            </div>}</>
    )
}

export default VideoDetails