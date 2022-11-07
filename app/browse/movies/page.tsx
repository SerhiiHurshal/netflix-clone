/* eslint-disable @next/next/no-img-element */
import Carousel from 'components/carousel';
import { getNowPlayingMovies, getPopularMovies } from 'graphql/api';
import { formatMoviesData } from 'utils/formatData';

async function Movies() {
  const popularMovies = await getPopularMovies();
  const nowPlayingMovies = await getNowPlayingMovies();

  return (
    <div>
      <h2>Popular movies</h2>
      <Carousel
        items={formatMoviesData(popularMovies?.popularMovies?.movies)}
      />
      <h2>Now playing</h2>
      <Carousel
        items={formatMoviesData(nowPlayingMovies?.nowPlayingMovies?.movies)}
      />
    </div>
  );
}

export default Movies;
