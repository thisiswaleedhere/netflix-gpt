import { useEffect } from "react";
import { TMDB_API_OPTIONS, TMDB_MOVIEINFO_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addMovieInfo } from "../redux/movieSlice";

const useMovieFetch = (id) => {

    const dispatch = useDispatch();

    const getMovie = async () => {
        const data = await fetch(TMDB_MOVIEINFO_API + id, TMDB_API_OPTIONS);
        const json = await data.json();
        dispatch(addMovieInfo(json));
    }

    useEffect(() => {
        getMovie();
    }, [])
}
export default useMovieFetch;