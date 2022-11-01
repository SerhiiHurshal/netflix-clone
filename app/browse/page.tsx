import graphQLClient from 'graphql/graphql-client';
import { allFilmsWithVariablesQueryDocument } from 'graphql/queries';

const getData = async () => {
  const data = await graphQLClient.request(allFilmsWithVariablesQueryDocument);

  return data;
};

async function Browse() {
  return <div>Hello Next.js</div>;
}

export default Browse;
