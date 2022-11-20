import Carousel from 'components/carousel/carousel';
import { getAiringTodayShows, getPopularShows } from 'graphql/api';
import { formatShowsData } from 'utils/formatData';

async function TVSows() {
  const popularShows = await getPopularShows();
  const airingTodayShows = await getAiringTodayShows();

  return (
    <div>
      <h2>Popular TV shows</h2>
      <Carousel items={formatShowsData(popularShows?.popularShows?.shows)} />
      <h2>Airing today</h2>
      <Carousel
        items={formatShowsData(airingTodayShows?.airingTodayShows?.shows)}
      />
    </div>
  );
}

export default TVSows;
