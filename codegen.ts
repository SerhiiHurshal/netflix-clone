import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: 'https://movieql.netlify.app/graphql',
  documents: ['app/**/*.tsx', 'graphql/**/*.ts*', '!graphql/gql/**/*'],
  generates: {
    'graphql/gql/': {
      preset: 'client',
      plugins: [],
    },
    './graphql.schema.json': {
      plugins: ['introspection'],
    },
  },
};

export default config;
