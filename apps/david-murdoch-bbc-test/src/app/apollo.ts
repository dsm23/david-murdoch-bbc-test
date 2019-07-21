import { ApolloClient } from 'apollo-client';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

// HACK: so that apollo client can understand the ModelUnionType
import introspectionQueryResultData from './fragmentTypes.json';

import { environment } from '../environments/environment';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const httpLink = new HttpLink({
  uri: environment.endPoint,
  // headers: {
  //   authorization: localStorage.getItem('token'),
  //   // CORB: https://www.chromium.org/Home/chromium-security/corb-for-developers
  //   // 'Content-Type': 'application/json',
  //   // 'X-Content-Type-Options': 'nosniff',
  //   // 'client-name': 'David Murdoch BBC [web]',
  //   // 'client-version': '1.0.0',
  // },
});

const wsLink = new WebSocketLink({
  uri: environment.websocket,
  options: {
    reconnect: true,
  },
});

const terminatingLink = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const link = ApolloLink.from([terminatingLink]);

const cache = new InMemoryCache({ fragmentMatcher });

const client = new ApolloClient({
  cache,
  link,
  // resolvers,
  // typeDefs,
});

export { cache, client };
