/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

const documents = {
    "\n  query popularMovies {\n    popularMovies {\n      movies {\n        id\n        original_title\n        poster_path\n        release_date\n      }\n    }\n  }\n": types.PopularMoviesDocument,
    "\n  query nowPlayingMovies {\n    nowPlayingMovies {\n      movies {\n        id\n        original_title\n        poster_path\n        release_date\n      }\n    }\n  }\n": types.NowPlayingMoviesDocument,
    "\n  query popularShows {\n    popularShows {\n      shows {\n        id\n        original_name\n        poster_path\n        first_air_date\n      }\n    }\n  }\n": types.PopularShowsDocument,
    "\n  query airingTodayShows {\n    airingTodayShows {\n      shows {\n        id\n        original_name\n        poster_path\n        first_air_date\n      }\n    }\n  }\n": types.AiringTodayShowsDocument,
};

export function graphql(source: "\n  query popularMovies {\n    popularMovies {\n      movies {\n        id\n        original_title\n        poster_path\n        release_date\n      }\n    }\n  }\n"): (typeof documents)["\n  query popularMovies {\n    popularMovies {\n      movies {\n        id\n        original_title\n        poster_path\n        release_date\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query nowPlayingMovies {\n    nowPlayingMovies {\n      movies {\n        id\n        original_title\n        poster_path\n        release_date\n      }\n    }\n  }\n"): (typeof documents)["\n  query nowPlayingMovies {\n    nowPlayingMovies {\n      movies {\n        id\n        original_title\n        poster_path\n        release_date\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query popularShows {\n    popularShows {\n      shows {\n        id\n        original_name\n        poster_path\n        first_air_date\n      }\n    }\n  }\n"): (typeof documents)["\n  query popularShows {\n    popularShows {\n      shows {\n        id\n        original_name\n        poster_path\n        first_air_date\n      }\n    }\n  }\n"];
export function graphql(source: "\n  query airingTodayShows {\n    airingTodayShows {\n      shows {\n        id\n        original_name\n        poster_path\n        first_air_date\n      }\n    }\n  }\n"): (typeof documents)["\n  query airingTodayShows {\n    airingTodayShows {\n      shows {\n        id\n        original_name\n        poster_path\n        first_air_date\n      }\n    }\n  }\n"];

export function graphql(source: string): unknown;
export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;