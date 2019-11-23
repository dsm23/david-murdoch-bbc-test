import { ApolloClient } from 'apollo-client';
import {
  InMemoryCache,
  IntrospectionFragmentMatcher,
} from 'apollo-cache-inmemory';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition, toIdValue } from 'apollo-utilities';
import { persistCache } from 'apollo-cache-persist';
import { Store, del, get, set } from 'idb-keyval';

import { introspectionQueryResultData } from '@david-murdoch-bbc-test/fragment-types';

import { environment } from '../environments/environment';

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData,
});

const httpLink = new HttpLink({
  uri: environment.endPoint,
  headers: {
    // CORB: https://www.chromium.org/Home/chromium-security/corb-for-developers
    'content-type': 'application/json',
    'X-Content-Type-Options': 'nosniff',
    'client-name': 'David Murdoch BBC [web]',
    'client-version': '1.0.0',
  },
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
    // typescript issue
    const { kind, operation }: any = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  httpLink,
);

const link = ApolloLink.from([terminatingLink]);

const cache = new InMemoryCache({
  fragmentMatcher,
  cacheRedirects: {
    Query: {
      article: (_, args) =>
        toIdValue(
          cache.config.dataIdFromObject({ __typename: 'Article', id: args.id }),
        ),
    },
  },
});
const customStore = new Store(
  'david-murdoch-bbc-test-store',
  'david-murdoch-bbc-test',
);

persistCache({
  cache,
  storage: {
    getItem: key => get(key, customStore),
    setItem: (key, value) => set(key, value, customStore),
    removeItem: key => del(key, customStore),
  },
  trigger: 'background',
});

const client = new ApolloClient({
  cache,
  link,
  // resolvers,
  // typeDefs,
});

export { cache, client };
