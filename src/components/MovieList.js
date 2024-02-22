import React, { useRef, useState } from 'react'
import MovieCard from './MovieCard';
import { SCROLL_ARROW_ICON } from '../utils/constants';
import { Link } from 'react-router-dom';

const MovieList = ({ title, movies }) => {

    const containerRef = useRef();
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (scrollAmount) => {
        const newScrollPosition = scrollPosition + scrollAmount;
        setScrollPosition(newScrollPosition);
        containerRef.current.scrollLeft = newScrollPosition;
    }

    return (
        <div className="md:h-48 xl:h-56 px-6 md:pb-4">
            <h1 className="text-sm md:text-xl xl:text-[22px] md:font-semibold pt-4 md:pb-1 text-gray-200">{title}</h1>
            <div ref={containerRef} className="flex overflow-x-scroll no-scrollbar scroll-smooth">
                <div className="flex py-1">
                    {movies?.map((movie) => (
                        <Link to={'/watch/' + movie.id} key={movie.id}  >
                            <MovieCard posterPath={movie.backdrop_path} />
                        </Link>
                    ))}
                </div>
            </div>

            <div className='hidden md:flex justify-between -mt-20 mb-10'>
                {scrollPosition &&
                    <button onClick={() => handleScroll(-400)} className=' z-20 p-2 rounded-full bg-gradient-to-l from-gray-300 hover:from-gray-200 hover:scale-125 transition-all'>
                        <img className="w-6 rotate-180" src={SCROLL_ARROW_ICON} alt="Left Scroll Button" />
                    </button>
                }
                {(scrollPosition < 3560) &&
                    <button onClick={() => handleScroll(400)} className='md:absolute z-20 right-4 p-2 rounded-full bg-gradient-to-r from-gray-300 hover:from-gray-200 hover:scale-125 transition-all'>
                        <img className="w-6" src={SCROLL_ARROW_ICON} alt="Right Scroll Button" />
                    </button>
                }
            </div>

        </div>
    );
};
export default MovieList