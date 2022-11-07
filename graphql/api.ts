import graphQLClient from 'graphql/graphql-client';
import {
  getPopularMoviesQuery,
  getNowPlayingMoviesQuery,
  getPopularShowsQuery,
  getAiringTodayShowsQuery,
} from 'graphql/queries';

export const getPopularMovies = async () => {
  const data = await graphQLClient.request(getPopularMoviesQuery);

  return data;
};

export const getNowPlayingMovies = async () => {
  const data = await graphQLClient.request(getNowPlayingMoviesQuery);

  return data;
};

export const getPopularShows = async () => {
  const data = await graphQLClient.request(getPopularShowsQuery);

  return data;
};

export const getAiringTodayShows = async () => {
  const data = await graphQLClient.request(getAiringTodayShowsQuery);

  return data;
};
