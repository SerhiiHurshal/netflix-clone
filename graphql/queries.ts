import { graphql } from './gql/gql';

export const getPopularMoviesQuery = graphql(`
  query popularMovies {
    popularMovies {
      id
      title
      poster_path
      release_date
    }
  }
`);

export const getNowPlayingMoviesQuery = graphql(`
  query nowPlayingMovies {
    nowPlayingMovies {
      id
      title
      poster_path
      release_date
    }
  }
`);

export const getPopularShowsQuery = graphql(`
  query popularShows {
    popularShows {
      id
      name
      poster_path
      first_air_date
    }
  }
`);

export const getAiringTodayShowsQuery = graphql(`
  query airingTodayShows {
    airingTodayShows {
      id
      name
      poster_path
      first_air_date
    }
  }
`);
