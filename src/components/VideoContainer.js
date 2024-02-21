import { useSelector } from "react-redux";
import useTrailerFetch from "../hooks/useTrailerFetch";
import VideoDetails from './VideoDetails';

const VideoContainer = ({ movieId }) => {

    useTrailerFetch(movieId);

    const trailerid = useSelector((store) => store.movies.movieTrailer);
    const youtubeid = trailerid.find(o => o.movieid === movieId);

    return (
        <div>
            <div>
                {youtubeid && <iframe className="absolute w-[98vw] aspect-video md:aspect-[12/6] -mt-4 lg:-mt-12"
                    src={"https://www.youtube.com/embed/" + youtubeid.trailerid + "?autoplay=1&mute=1&playlist=" + youtubeid.trailerid + "&loop=1&controls=0&rel=0&iv_load_policy=3&end=60"}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen>
                </iframe>}
            </div>
            <VideoDetails id={movieId} />
        </div>
    )
}

export default VideoContainer;