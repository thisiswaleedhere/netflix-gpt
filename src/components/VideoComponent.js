import React from 'react'
import { useSelector } from 'react-redux';

const VideoComponent = () => {
    const youtubeId = useSelector((store) => store.movies.movieTrailer);
    return (
        <div className="w-screen min-w-[340px] max-w-[1800px] 2xl:mx-auto overflow-x-hidden">
            {youtubeId && <iframe className="absolute min-w-[340px]  max-w-[1800px] overflow-x-clip w-full aspect-[10/6] -mt-8 xs:-mt-12 lg:-mt-40"
                src={"https://www.youtube.com/embed/" + youtubeId.trailerid + "?autoplay=1&mute=1&loop=1&controls=0&rel=0&iv_load_policy=3&end=60&playlist=" + youtubeId.trailerid}
                title="Movie Trailer Video Player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                allowFullScreen>
            </iframe>}
        </div>
    )
}

export default VideoComponent