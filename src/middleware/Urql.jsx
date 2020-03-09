import React from 'react';
import {
  Provider,
  Client,
  dedupExchange,
  fetchExchange,
  subscriptionExchange,
} from 'urql';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { cacheExchange } from '@urql/exchange-graphcache';
import { getToken } from '../utils';
import { PROJECT_LIST_VIEW } from '../components/ProjectList/Queries/projectQueries';

// The @urql/exchange-graphcache dependency exposes a normalized cache
// by default, the urql client comes pre-configured with a document cache.
const cache = cacheExchange({
  updates: {
    Mutation: {
      post: ({ post }, _args, cache) => {
        cache.updateQuery({ query: PROJECT_LIST_VIEW }, data => {
          console.log('URQL data', data);
          if (data !== null) {
            data.labels.unshift(post);
            data.labels.count++;
            return data;
          } else {
            return null;
          }
        });
      },
    },
    Subscription: {
      newLabel: ({ newLabel }, _args, cache) => {
        cache.updateQuery({ query: PROJECT_LIST_VIEW }, data => {
          console.log('URQL data', data);
          if (data !== null) {
            data.labels.unshift(newLabel);
            data.labels.count++;
            return data;
          } else {
            return null;
          }
        });
      },
    },
  },
});
const subscriptionClient = new SubscriptionClient('ws://localhost:7000', {
  reconnect: true,
  connectionParams: () => {
    const token = getToken();
    return {
      headers: { authorization: `Bearer ${token}` },
    };
  },
});

const client = new Client({
  url: `${process.env.REACT_APP_URQL_URL}`,
  exchanges: [
    dedupExchange,
    cache,
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
