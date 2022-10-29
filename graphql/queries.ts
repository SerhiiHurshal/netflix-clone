import { graphql } from './gql/gql';

export const allFilmsWithVariablesQueryDocument = graphql(`
  query popularMovies {
    popularMovies {
      movies {
        id
        budget
      }
    }
  }
`);
