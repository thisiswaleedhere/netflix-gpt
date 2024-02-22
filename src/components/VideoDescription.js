import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import useMovieFetch from '../hooks/useMovieFetch';
import { TMDB_CDN_URL } from '../utils/constants';

const VideoDescription = ({ watchId, showTrailer, setShowTrailer }) => {

    useMovieFetch(watchId);
    const movieDetails = useSelector((store) => store.movies.movieInfo);

    useEffect(() => {
        if (!showTrailer) return;
        setTimeout(() => {
            setShowTrailer(false);
        }, 60000)
    }, [showTrailer])

    const handleShowTrailer = () => {
        setShowTrailer(!showTrailer);
    }

    return (
        movieDetails && (<div className='max-h-screen overflow-hidden'>

            {!showTrailer && <img className='w-full' src={TMDB_CDN_URL + movieDetails.backdrop_path} alt={movieDetails.title} />}
            {showTrailer && <div className='w-screen aspect-video bg-black' />}


            <div className='absolute min-w-[340px] max-w-[1800px] 2xl:mx-auto w-full py-6 px-5 md:bottom-0 bg-gradient-to-t from-black from-60% text-white'>
                <div className='flex gap-1 md:gap-4 pb-3 md:pb-6'>
                    <button className='text-gray-300 bg-gray-100/30 transition-all hover:bg-gray-100 hover:text-black cursor-pointer rounded-md text-base md:text-xl px-6 py-1.5 md:px-12 md:py-3'>
                        Play Movie</button>
                    {!showTrailer && <button onClick={handleShowTrailer} className='text-gray-300 bg-gray-100/30 transition-all hover:bg-gray-100 hover:text-black cursor-pointer rounded-md text-base md:text-xl px-6 py-1.5 md:px-12 md:py-3'>
                        Play Trailer</button>}
                </div>
                <h4 className='text-sm md:text-base'>{movieDetails.tagline}</h4>
                <div className='text-4xl md:text-6xl font-bold pt-2 pb-4 md:pb-5'>{movieDetails.title}</div>

                <div className='flex gap-3'>
                    <h3 className='bg-gray-200/50 w-12 ml-1 font-semibold text-center rounded-md'>
                        {movieDetails.release_date.slice(0, 4)}</h3>
                    <h4>{Math.floor(movieDetails.runtime / 60)} hr {movieDetails.runtime % 60} mins</h4>
                </div>

                <div className='flex flex-wrap gap-2 pt-4 pl-1 text-lg'>
                    {movieDetails.genres.map((each) => <h2 className='border border-gray-400 rounded px-2' key={each.id}>{each.name}</h2>)}
                </div>

                <p className='pl-1 pt-4 md:text-lg'>{movieDetails.overview}</p>

            </div>

            <div className='bg-black h-[100vh]'></div>

        </div>)
    )
}

export default VideoDescription