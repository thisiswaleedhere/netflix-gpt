import React, { useRef, useState } from 'react'
import MovieCard from './MovieCard';

const MovieList = ({ title, movies }) => {

    const containerRef = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount;
        setScrollPosition(newScrollPosition);
        containerRef.current.scrollLeft = newScrollPosition;
    }

    return (
        <div className="px-6 md:pb-8">
            <h1 className="text-sm md:text-2xl pt-4 md:pb-1 text-gray-200">{title}</h1>
            <div ref={containerRef} className="z-10 flex overflow-x-scroll no-scrollbar scroll-smooth">
                <div className="flex">
                    {movies?.map((movie) => (
                        <MovieCard key={movie.id} posterPath={movie.backdrop_path} />
                    ))}
                </div>
            </div>
            <div className='hidden md:flex justify-between -mt-20 mb-8'>
                {scrollPosition &&
                    <button onClick={() => handleScroll(-400)} className='z-20 p-2 rounded-full bg-gradient-to-l from-gray-300 hover:from-gray-200 hover:scale-125 transition-all'>
                        <img className="w-6 rotate-180" src="https://www.svgrepo.com/show/27797/right-arrow.svg" alt="right scroll button" />
                    </button>
                }
                {(scrollPosition < 3560) &&
                    <button onClick={() => handleScroll(400)} className='md:absolute z-20 right-4 p-2 rounded-full bg-gradient-to-r from-gray-300 hover:from-gray-200 hover:scale-125 transition-all'>
                        <img className="w-6" src="https://www.svgrepo.com/show/27797/right-arrow.svg" alt="right scroll button" />
                    </button>
                }
            </div>
        </div>
    );
};
export default MovieList