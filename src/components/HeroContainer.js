import React from 'react'
import { useSelector } from 'react-redux';
import VideoContainer from './VideoContainer';

const HeroContainer = () => {
    const movielist = useSelector((store) => store.movies.newReleases);
    const heroMovie = movielist?.[1];

    return (
        <div className='bg-black' >
            {movielist?.[1] && <VideoContainer movieId={heroMovie.id} />}
        </div>
    )
}

export default HeroContainer