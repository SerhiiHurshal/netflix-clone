/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Cast = {
  __typename?: 'Cast';
  adult?: Maybe<Scalars['Boolean']>;
  backdrop_path?: Maybe<Scalars['String']>;
  character?: Maybe<Scalars['String']>;
  credit_id?: Maybe<Scalars['String']>;
  genre_ids: Array<Scalars['Int']>;
  id: Scalars['Int'];
  original_language?: Maybe<Scalars['String']>;
  original_title?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  poster_path?: Maybe<Scalars['String']>;
  release_date?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['Boolean']>;
  vote_average?: Maybe<Scalars['Int']>;
  vote_count?: Maybe<Scalars['Int']>;
};

export type Company = {
  __typename?: 'Company';
  id: Scalars['Int'];
  logo_path?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  origin_country?: Maybe<Scalars['String']>;
};

export type Country = {
  __typename?: 'Country';
  iso_3166_1: Scalars['String'];
  name: Scalars['String'];
};

export type Creator = {
  __typename?: 'Creator';
  credir_id?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  profile_path?: Maybe<Scalars['String']>;
};

export type Credits = {
  __typename?: 'Credits';
  cast: Array<Cast>;
  crew: Array<Crew>;
  id: Scalars['Int'];
};

export type Crew = {
  __typename?: 'Crew';
  adult?: Maybe<Scalars['Boolean']>;
  backdrop_path?: Maybe<Scalars['String']>;
  credit_id?: Maybe<Scalars['String']>;
  department?: Maybe<Scalars['String']>;
  genre_ids: Array<Scalars['Int']>;
  id: Scalars['Int'];
  job?: Maybe<Scalars['String']>;
  original_language?: Maybe<Scalars['String']>;
  original_title?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  poster_path?: Maybe<Scalars['String']>;
  release_date?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  video?: Maybe<Scalars['Boolean']>;
  vote_average?: Maybe<Scalars['Int']>;
  vote_count?: Maybe<Scalars['Int']>;
};

export type Episode = {
  __typename?: 'Episode';
  air_date?: Maybe<Scalars['String']>;
  crew: Array<Crew>;
  episode_number?: Maybe<Scalars['Int']>;
  guest_stars: Array<GuestStar>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  production_code?: Maybe<Scalars['String']>;
  season_number?: Maybe<Scalars['Int']>;
  still_path?: Maybe<Scalars['String']>;
  vote_average?: Maybe<Scalars['Int']>;
  vote_count?: Maybe<Scalars['Int']>;
};

export type EpisodeOutput = {
  __typename?: 'EpisodeOutput';
  episode?: Maybe<Episode>;
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type GuestStar = {
  __typename?: 'GuestStar';
  character?: Maybe<Scalars['String']>;
  credit_id?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
  profile_path?: Maybe<Scalars['String']>;
};

export type Language = {
  __typename?: 'Language';
  iso_639_1: Scalars['String'];
  name: Scalars['String'];
};

export type LastEpisode = {
  __typename?: 'LastEpisode';
  air_date?: Maybe<Scalars['String']>;
  episode_number?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  production_code?: Maybe<Scalars['String']>;
  season_number?: Maybe<Scalars['Int']>;
  still_path?: Maybe<Scalars['String']>;
  vote_average?: Maybe<Scalars['Int']>;
  vote_count?: Maybe<Scalars['Int']>;
};

export type Movie = {
  __typename?: 'Movie';
  adult?: Maybe<Scalars['Boolean']>;
  backdrop_path?: Maybe<Scalars['String']>;
  budget?: Maybe<Scalars['Int']>;
  credits: Credits;
  genres: Array<Genre>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imdb_id?: Maybe<Scalars['String']>;
  original_language?: Maybe<Scalars['String']>;
  original_title?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  poster_path?: Maybe<Scalars['String']>;
  production_companies: Array<Company>;
  production_countries: Array<Country>;
  release_date?: Maybe<Scalars['String']>;
  revenue?: Maybe<Scalars['Int']>;
  runtime?: Maybe<Scalars['Int']>;
  spoken_languages: Array<Language>;
  status?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  videos: VideoResults;
  vote_average?: Maybe<Scalars['Float']>;
  vote_count?: Maybe<Scalars['Int']>;
};

export type MovieOutput = {
  __typename?: 'MovieOutput';
  error?: Maybe<Scalars['String']>;
  movie?: Maybe<Movie>;
  ok: Scalars['Boolean'];
};

export type MoviesOutput = {
  __typename?: 'MoviesOutput';
  error?: Maybe<Scalars['String']>;
  movies?: Maybe<Array<Movie>>;
  ok: Scalars['Boolean'];
};

export type Network = {
  __typename?: 'Network';
  headquarters?: Maybe<Scalars['String']>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  logo_path?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  origin_country?: Maybe<Scalars['String']>;
};

export type PeopleOutput = {
  __typename?: 'PeopleOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  people?: Maybe<Array<Person>>;
};

export type Person = {
  __typename?: 'Person';
  adult?: Maybe<Scalars['Boolean']>;
  also_knwon_as?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  birthday?: Maybe<Scalars['String']>;
  deathday?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['Int']>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  imdb_id?: Maybe<Scalars['String']>;
  known_for_department?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  place_of_birth?: Maybe<Scalars['String']>;
  profile_path?: Maybe<Scalars['String']>;
};

export type PersonOutput = {
  __typename?: 'PersonOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  person?: Maybe<Person>;
};

export type Query = {
  __typename?: 'Query';
  airingTodayShows: ShowsOutput;
  episodeDetail: EpisodeOutput;
  movieDetail: MovieOutput;
  nowPlayingMovies: MoviesOutput;
  personDetail: PersonOutput;
  popularMovies: MoviesOutput;
  popularShows: ShowsOutput;
  searchMovie: MoviesOutput;
  searchPeople: PeopleOutput;
  searchShow: ShowsOutput;
  seasonDetail: SeasonOutput;
  showDetail: ShowOutput;
  similarMovies: MoviesOutput;
  similarShows: ShowsOutput;
  topRatedShows: ShowsOutput;
  upcomingMovies: MoviesOutput;
};


export type QueryEpisodeDetailArgs = {
  episodeNumber: Scalars['Int'];
  seasonNumber: Scalars['Int'];
  showId: Scalars['Int'];
};


export type QueryMovieDetailArgs = {
  id: Scalars['Int'];
};


export type QueryPersonDetailArgs = {
  id: Scalars['Int'];
};


export type QuerySearchMovieArgs = {
  query: Scalars['String'];
};


export type QuerySearchPeopleArgs = {
  query: Scalars['String'];
};


export type QuerySearchShowArgs = {
  query: Scalars['String'];
};


export type QuerySeasonDetailArgs = {
  seasonNumber: Scalars['Int'];
  showId: Scalars['Int'];
};


export type QueryShowDetailArgs = {
  id: Scalars['Int'];
};


export type QuerySimilarMoviesArgs = {
  id: Scalars['Int'];
};


export type QuerySimilarShowsArgs = {
  id: Scalars['Int'];
};

export type Season = {
  __typename?: 'Season';
  air_date?: Maybe<Scalars['String']>;
  episodes: Array<Episode>;
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  poster_path?: Maybe<Scalars['String']>;
  season_number?: Maybe<Scalars['Int']>;
};

export type SeasonOutput = {
  __typename?: 'SeasonOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  season?: Maybe<Season>;
};

export type Show = {
  __typename?: 'Show';
  backdrop_path?: Maybe<Scalars['String']>;
  created_by: Array<Creator>;
  episode_run_time: Array<Scalars['Int']>;
  first_air_date?: Maybe<Scalars['String']>;
  genres: Array<Genre>;
  homepage?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  in_production?: Maybe<Scalars['Boolean']>;
  languages: Array<Language>;
  last_air_date?: Maybe<Scalars['String']>;
  last_episode_to_air?: Maybe<LastEpisode>;
  name?: Maybe<Scalars['String']>;
  networks: Array<Network>;
  number_of_episodes?: Maybe<Scalars['Int']>;
  number_of_seasons?: Maybe<Scalars['Int']>;
  origin_country: Array<Scalars['String']>;
  original_language?: Maybe<Scalars['String']>;
  original_name?: Maybe<Scalars['String']>;
  overview?: Maybe<Scalars['String']>;
  popularity?: Maybe<Scalars['Int']>;
  poster_path?: Maybe<Scalars['String']>;
  production_companies: Array<Company>;
  production_countries: Array<Country>;
  seasons: Array<Season>;
  spoken_languages: Array<Language>;
  status?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  vote_average?: Maybe<Scalars['Int']>;
  vote_count?: Maybe<Scalars['Int']>;
};

export type ShowOutput = {
  __typename?: 'ShowOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  show?: Maybe<Show>;
};

export type ShowsOutput = {
  __typename?: 'ShowsOutput';
  error?: Maybe<Scalars['String']>;
  ok: Scalars['Boolean'];
  shows?: Maybe<Array<Show>>;
};

export type Video = {
  __typename?: 'Video';
  id: Scalars['Int'];
  iso_639_1?: Maybe<Scalars['String']>;
  iso_3166_1?: Maybe<Scalars['String']>;
  key?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  site?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type VideoResults = {
  __typename?: 'VideoResults';
  results: Array<Video>;
};

export type PopularMoviesQueryVariables = Exact<{ [key: string]: never; }>;


export type PopularMoviesQuery = { __typename?: 'Query', popularMovies: { __typename?: 'MoviesOutput', movies?: Array<{ __typename?: 'Movie', id: number, budget?: number | null }> | null } };


export const PopularMoviesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"popularMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"popularMovies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"movies"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"budget"}}]}}]}}]}}]} as unknown as DocumentNode<PopularMoviesQuery, PopularMoviesQueryVariables>;