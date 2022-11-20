import { CarouselCardProps } from 'components/carousel/carousel';
import { PopularMoviesQuery, PopularShowsQuery } from 'graphql/gql/graphql';

const formatMoviesData = (
  movies: PopularMoviesQuery['popularMovies']['movies'],
): CarouselCardProps[] => {
  return (
    movies?.map((movie) => ({
      id: `${movie.id}` || '',
      poster_path: movie.poster_path || '',
      title: movie.original_title || '',
    })) || []
  );
};

const formatShowsData = (
  shows: PopularShowsQuery['popularShows']['shows'],
): CarouselCardProps[] => {
  return (
    shows?.map((show) => ({
      id: `${show.id}` || '',
      poster_path: show.poster_path || '',
      title: show.original_name || '',
    })) || []
  );
};

export { formatMoviesData, formatShowsData };
