import ContentSection from 'components/content-section';
import { getNowPlayingMovies, getPopularMovies } from 'graphql/api';
import { formatMoviesData } from 'utils/formatData';

async function Movies() {
  const popularMovies = await getPopularMovies();
  const nowPlayingMovies = await getNowPlayingMovies();

  return (
    <div>
      <ContentSection
        title='Popular movies'
        items={formatMoviesData(popularMovies?.popularMovies)}
      />
      <ContentSection
        title='Now playing'
        items={formatMoviesData(nowPlayingMovies?.nowPlayingMovies)}
      />
    </div>
  );
}

export default Movies;
