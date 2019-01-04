import React from 'react';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
});

const GraphQLProvider = ({ children }: { children: any }) => (
  <ApolloProvider client={client}>{children}</ApolloProvider>
);

export default GraphQLProvider;
