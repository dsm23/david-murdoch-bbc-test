import React from 'react';
import { render } from 'react-dom';

import { ApolloClient } from 'apollo-client';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import { ApolloProvider } from 'react-apollo';

import introspectionQueryResultData from './fragmentTypes.json';

import App from './app/app';
import { environment } from './environments/environment';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const cache = new InMemoryCache({ fragmentMatcher });
const client = new ApolloClient({
  cache,
  link: new HttpLink({
    uri: environment.endPoint,
    headers: {
      authorization: localStorage.getItem('token'),
      'client-name': 'David Murdoch BBC [web]',
      'client-version': '1.0.0',
    },
  }),
  // resolvers,
  // typeDefs,
});

render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
