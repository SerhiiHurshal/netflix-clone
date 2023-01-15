import ContentSection from 'components/content-section';
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
      <ContentSection
        title='Popular movies'
        items={formatMoviesData(popularMovies?.popularMovies)}
      />
      <ContentSection
        title='Now playing'
        items={formatMoviesData(nowPlayingMovies?.nowPlayingMovies)}
      />
      <ContentSection
        title='Popular TV shows'
        items={formatShowsData(popularShows?.popularShows)}
      />
      <ContentSection
        title='Airing today'
        items={formatShowsData(airingTodayShows?.airingTodayShows)}
      />
    </div>
  );
}

export default Browse;

