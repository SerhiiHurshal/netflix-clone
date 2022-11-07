import { graphql } from './gql/gql';

export const getPopularMoviesQuery = graphql(`
  query popularMovies {
    popularMovies {
      movies {
        id
        original_title
        poster_path
        release_date
      }
    }
  }
`);

export const getNowPlayingMoviesQuery = graphql(`
  query nowPlayingMovies {
    nowPlayingMovies {
      movies {
        id
        original_title
        poster_path
        release_date
      }
    }
  }
`);

export const getPopularShowsQuery = graphql(`
  query popularShows {
    popularShows {
      shows {
        id
        original_name
        poster_path
        first_air_date
      }
    }
  }
`);

export const getAiringTodayShowsQuery = graphql(`
  query airingTodayShows {
    airingTodayShows {
      shows {
        id
        original_name
        poster_path
        first_air_date
      }
    }
  }
`);
