import Carousel from 'components/carousel/carousel';
import {
  getPopularMovies,
  getNowPlayingMovies,
  getPopularShows,
  getAiringTodayShows,
} from 'graphql/api';
import { formatMoviesData, formatShowsData } from 'utils/formatData';

async function Browse() {
  const popularMovies = await getPopularMovies();
  const nowPlayingMovies = await getNowPlayingMovies();
  const popularShows = await getPopularShows();
  const airingTodayShows = await getAiringTodayShows();

  return (
    <div>
      <h2>Popular movies</h2>
      <Carousel items={formatMoviesData(popularMovies?.popularMovies)} />
      <h2>Now playing</h2>
      <Carousel items={formatMoviesData(nowPlayingMovies?.nowPlayingMovies)} />
      <h2>Popular TV shows</h2>
      <Carousel items={formatShowsData(popularShows?.popularShows)} />
      <h2>Airing today</h2>
      <Carousel items={formatShowsData(airingTodayShows?.airingTodayShows)} />
    </div>
  );
}

export default Browse;

