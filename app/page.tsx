import graphQLClient from '../graphql/graphql-client';
import { allFilmsWithVariablesQueryDocument } from '../graphql/queries';

const getData = async () => {
  const data = await graphQLClient.request(allFilmsWithVariablesQueryDocument);

  return data;
};

export default async function Home() {
  return <div>Hello Next.js</div>;
}

