import ContentSection from 'components/content-section';
import { getAiringTodayShows, getPopularShows } from 'graphql/api';
import { formatShowsData } from 'utils/formatData';

async function TVSows() {
  const popularShows = await getPopularShows();
  const airingTodayShows = await getAiringTodayShows();

  return (
    <div>
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

export default TVSows;
