import React from 'react'
import useMovieFetch from '../hooks/useMovieFetch';
import { useSelector } from 'react-redux';

const VideoDetails = ({ id }) => {

    useMovieFetch(id);
    const movieDetails = useSelector((store) => store.movies.movieInfo);


    return (<>
        {movieDetails && <div>
            <div className='absolute min-w-[340px] max-w-[1800px] 2xl:mx-auto w-full aspect-[10/6] -mt-4 bg-gradient-to-r from-black'>
            </div>
            <div className='text-white'>

                <div className='pl-4 sm:pl-6 md:pl-8 relative top-16 md:top-32 2xl:top-40'>

                    <div className='md:pb-2 w-1/2 text-[10px] xs:text-sm md:text-base xl:text-lg 2xl:text-2xl text-gray-300'>{movieDetails.tagline}</div>

                    <div className='text-xl xs:text-2xl md:text-4xl xl:text-6xl 2xl:text-8xl font-semibold '> {movieDetails.title} </div>

                    <div className='hidden sm:block sm:text-sm xl:text-base 2xl:text-xl pt-3 md:pt-4 w-1/2'>{movieDetails.overview}</div>

                    <button className='text-gray-300 bg-gray-100/30 transition-all hover:bg-gray-100 hover:text-black cursor-pointer mt-2 md:mt-5 rounded-md text-xs md:text-lg 2xl:text-3xl px-4 xs:px-6 py-1 xs:py-1.5 md:px-8 md:py-2 2xl:py-3'>
                        Play
                    </button>

                </div>


            </div>
        </div>
        }</>
    )
}

export default VideoDetails