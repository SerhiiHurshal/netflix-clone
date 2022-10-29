import { request } from 'graphql-request';
import { graphql } from './gql/gql';

const getData = async () => {
  const allFilmsWithVariablesQueryDocument = graphql(`
    query popularMovies {
      popularMovies {
        movies {
          id
          budget
        }
      }
    }
  `);

  const data = await request(
    'https://ql-movie-api.herokuapp.com/graphql',
    allFilmsWithVariablesQueryDocument,
  );
};

export default async function Home() {
  return <div>Hello Next.js</div>;
}

