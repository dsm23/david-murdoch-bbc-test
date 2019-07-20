import React from 'react';

import { ApolloClient } from 'apollo-client';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

import introspectionQueryResultData from './fragmentTypes.json';

import { environment } from '../environments/environment';

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

export { cache, client };
