import { CarouselCardProps } from 'components/carousel/carousel';
import { PopularMoviesQuery, PopularShowsQuery } from 'graphql/gql/graphql';

const formatMoviesData = (
  movies: PopularMoviesQuery['popularMovies'],
): CarouselCardProps[] => {
  return (
    movies?.map((movie) => ({
      id: `${movie?.id}` || '',
      poster_path: movie?.poster_path || '',
      title: movie?.title || '',
    })) || []
  );
};

const formatShowsData = (
  shows: PopularShowsQuery['popularShows'],
): CarouselCardProps[] => {
  return (
    shows?.map((show) => ({
      id: `${show?.id}` || '',
      poster_path: show?.poster_path || '',
      title: show?.name || '',
    })) || []
  );
};

export { formatMoviesData, formatShowsData };
