import React, { useState } from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import VideoComponent from './VideoComponent'
import useTrailerFetch from '../hooks/useTrailerFetch'
import VideoDescription from './VideoDescription'

const Watch = () => {
    const { watchId } = useParams();
    useTrailerFetch(watchId);

    const [showTrailer, setShowTrailer] = useState(false);

    return (
        <div className='bg-black h-full'>
            <Header />
            {showTrailer && <VideoComponent />}
            <VideoDescription watchId={watchId} showTrailer={showTrailer} setShowTrailer={setShowTrailer} />
        </div>
    )
}

export default Watch