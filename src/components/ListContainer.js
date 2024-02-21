import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const ListContainer = () => {
    const movies = useSelector((store) => store.movies);

    return (
        movies.newReleases &&
        (<div className='bg-black'>
            <div className='relative -mt-6 md:-mt-10'>
                <MovieList title={'New Releases'} movies={movies.newReleases} />
                <MovieList title={'Top Rated'} movies={movies.topRated} />
                <MovieList title={'Trending Now'} movies={movies.trendingNow} />
                <MovieList title={'Upcoming'} movies={movies.upcoming} />



            </div>
        </div>)
    )
}

export default ListContainer