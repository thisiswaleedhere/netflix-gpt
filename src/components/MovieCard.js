import React from 'react'
import { TMDB_CDN_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className="w-36 md:w-60 xl:w-[300px] pr-2 hover:scale-110 cursor-pointer transition-all">
            <img alt="Movie Card" src={TMDB_CDN_URL + posterPath} />
        </div>
    );
};

export default MovieCard