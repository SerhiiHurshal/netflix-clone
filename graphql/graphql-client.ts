import { GraphQLClient } from 'graphql-request';

const ENDPOINT = 'https://ql-movie-api.herokuapp.com/graphql';

const graphQLClient = new GraphQLClient(ENDPOINT);

export default graphQLClient;
