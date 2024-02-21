import { useEffect, useState } from "react"
import { TMDB_API_OPTIONS } from "../utils/constants";


const useMovieListFetch = (api) => {

    const [fetchList, setFetchList] = useState(null);

    const fetchmovies = async () => {
        const data = await fetch(api, TMDB_API_OPTIONS);
        const json = await data.json();
        setFetchList(json.results);
    }

    useEffect(() => {
        fetchmovies();
    }, [])

    if (fetchList) return fetchList;
}

export default useMovieListFetch