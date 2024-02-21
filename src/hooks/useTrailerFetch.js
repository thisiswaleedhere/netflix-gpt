import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addMovieTrailer } from "../redux/movieSlice";

const useTrailerFetch = (id) => {

    const dispatch = useDispatch();
    const trailerid = useSelector((store) => store.movies.movieTrailer);

    const getTrailer = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos', TMDB_API_OPTIONS);
        const json = await data.json();

        const movieid = json.id;
        const trailerid = json.results.filter((each) => each.type === "Trailer")[0].key;

        dispatch(addMovieTrailer({ movieid: movieid, trailerid: trailerid }));
    }

    useEffect(() => {
        if (!trailerid.find((each) => each.movieid === id)) {
            getTrailer();
        }
    }, [])
}

export default useTrailerFetch;