import { graphql } from './gql/gql';

export const getPopularMoviesQuery = graphql(`
  query popularMovies {
    popularMovies {
      id
      poster_path
    }
  }
`);

export const getNowPlayingMoviesQuery = graphql(`
  query nowPlayingMovies {
    nowPlayingMovies {
      id
      poster_path
    }
  }
`);

export const getPopularShowsQuery = graphql(`
  query popularShows {
    popularShows {
      id
      poster_path
    }
  }
`);

export const getAiringTodayShowsQuery = graphql(`
  query airingTodayShows {
    airingTodayShows {
      id
      poster_path
    }
  }
`);
