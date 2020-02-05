import React from 'react';
import {
  Provider,
  Client,
  dedupExchange,
  fetchExchange,
  subscriptionExchange,
} from 'urql';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { cacheExchange as normalizedCache } from '@urql/exchange-graphcache';
import { getToken } from '../utils';

import { NOTE_FEED_QUERY } from '../components/Project/Queries';

// The @urql/exchange-graphcache dependency exposes a normalized cache
// by default, the urql client comes pre-configured with a document cache.
const cacheExchange = normalizedCache({
  updates: {
    Subscription: {
      newNote: ({ newNote }, args, cache) => {
        const {
          project: { id },
        } = newNote;
        const variables = { id };
        cache.updateQuery({ query: NOTE_FEED_QUERY, variables }, data => {
          if (data !== null) {
            data.project.notes.unshift(newNote);
            return data;
          }
          return null;
        });
      },
    },
    Mutation: {
      createNote: ({ createNote }, { id }, cache) => {
        const variables = { id };
        cache.updateQuery({ query: NOTE_FEED_QUERY, variables }, data => {
          if (data !== null) {
            data.project.notes.unshift(createNote);
            return data;
          }
          return null;
        });
      },
    },
  },
});

// Subscription client is passed into the client instance
const subscriptionClient = new SubscriptionClient(
  `${process.env.REACT_APP_URQL_WS}`,
  {
    reconnect: true,
    connectionParams: {
      authToken: () => {
        const token = getToken();
        return {
          token,
        };
      },
    },
  }
);

const client = new Client({
  url: `${process.env.REACT_APP_URQL_URL}`,
  exchanges: [
    dedupExchange,
    cacheExchange,
    fetchExchange,
    subscriptionExchange({
      forwardSubscription: operation => subscriptionClient.request(operation),
    }),
  ],
  fetchOptions: () => {
    const token = getToken();
    return {
      headers: { authorization: `Bearer ${token}` },
    };
  },
});

const Urql = ({ children }) => <Provider value={client}>{children}</Provider>;

export default Urql;
