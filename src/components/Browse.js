import Header from './Header'
import { useDispatch } from "react-redux";
import { addNewReleases, addTopRated, addTrendingNow, addUpcoming } from "../redux/movieSlice";
import useMovieListFetch from '../hooks/useMovieListFetch';
import { TMDB_NEWRELEASES_API, TMDB_TOPRATED_API, TMDB_TRENDINGNOW_API, TMDB_UPCOMING_API } from '../utils/constants';
import ListContainer from './ListContainer';
import HeroContainer from './HeroContainer';

const Browse = () => {

  const dispatch = useDispatch();

  dispatch(addNewReleases(useMovieListFetch(TMDB_NEWRELEASES_API)));
  dispatch(addTrendingNow(useMovieListFetch(TMDB_TRENDINGNOW_API)));
  dispatch(addTopRated(useMovieListFetch(TMDB_TOPRATED_API)));
  dispatch(addUpcoming(useMovieListFetch(TMDB_UPCOMING_API)));

  return (
    <div>
      <Header />
      <HeroContainer />
      <ListContainer />
    </div>
  )
}

export default Browse;