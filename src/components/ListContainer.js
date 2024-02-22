import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const ListContainer = () => {
    const movies = useSelector((store) => store.movies);

    return (
        movies.newReleases &&
        (<div className='bg-gradient-to-b from-black to-gray-950 mt-16 md:mt-36 2xl:mt-56 '>
            <div className='relative'>
                {/* relative -mt-[450px] md:-mt-60 */}
                <MovieList title={'New Releases'} movies={movies.newReleases} />
                <MovieList title={'Top Rated'} movies={movies.topRated} />
                <MovieList title={'Trending Now'} movies={movies.trendingNow} />
                <MovieList title={'Upcoming'} movies={movies.upcoming} />
                <MovieList title={'Top Rated'} movies={movies.topRated} />
                <MovieList title={'New Releases'} movies={movies.newReleases} />
            </div>
        </div>)
    )
}

export default ListContainer