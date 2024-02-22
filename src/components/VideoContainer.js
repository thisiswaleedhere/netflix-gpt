import useTrailerFetch from "../hooks/useTrailerFetch";
import VideoComponent from "./VideoComponent";
import VideoDetails from './VideoDetails';

const VideoContainer = ({ movieId }) => {

    useTrailerFetch(movieId);

    return (
        <div >
            <VideoComponent />
            <VideoDetails id={movieId} />
        </div>
    )
}

export default VideoContainer;