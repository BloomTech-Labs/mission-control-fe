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
import {
  PROJECT_LIST_VIEW,
  LABEL_LIST_VIEW,
} from '../components/ProjectList/Queries/projectQueries';

// The @urql/exchange-graphcache dependency exposes a normalized cache
// by default, the urql client comes pre-configured with a document cache.

const cache = cacheExchange({
  updates: {
    Mutation: {
      createLabel: ({ createLabel }, _args, cache) => {
        cache.updateQuery({ query: LABEL_LIST_VIEW }, data => {
          if (data !== null) {
            const columnIndex = data.programs[0].columns.findIndex(
              c => c.id == _args.id
            );
            data.programs[0].columns[columnIndex].labels.unshift(createLabel);
            return data;
          } else {
            return null;
          }
        });
      },
      createColumn: ({ createColumn }, _args, cache) => {
        cache.updateQuery({ query: LABEL_LIST_VIEW }, data => {
          if (data !== null) {
            data.programs[0].columns.unshift(createColumn);
            return data;
          } else {
            return null;
          }
        });
      },
      deleteColumn: ({ deleteColumn }, _args, cache) => {
        cache.updateQuery({ query: LABEL_LIST_VIEW }, data => {
          if (data !== null) {
            const columnIndex = data.programs[0].columns.findIndex(
              c => c.id == _args.id
            );
            data.programs[0].columns.splice(columnIndex, 1);
            return data;
          } else {
            return null;
          }
        });
      },
      // deleteLabel: ({ deleteLabel }, _args, cache) => {
      //   cache.updateQuery({ query: LABEL_LIST_VIEW }, data => {
      //     if (data !== null) {
      //       console.log('del', _args, deleteLabel);
      //       const columnIndex = data.programs[0].columns.findIndex(
      //         c => c.id == _args.columnId
      //       );
      //       const labelIndex = data.programs[0].columns[
      //         columnIndex
      //       ].labels.findIndex(l => l.id == _args.id);
      //       data.programs[0].columns[columnIndex].labels.splice(labelIndex, 1);
      //       return data;
      //     } else {
      //       return null;
      //     }
      //   });
      // },
    },
    Subscription: {
      newLabel: ({ newLabel }, _args, cache) => {
        cache.updateQuery({ query: PROJECT_LIST_VIEW }, data => {
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
