import { GraphQLClient } from 'graphql-request';

const ENDPOINT = 'https://movieql.netlify.app/graphql';

const graphQLClient = new GraphQLClient(ENDPOINT);

export default graphQLClient;
