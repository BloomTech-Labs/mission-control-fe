import React from 'react';
import { Provider, Client, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import { getToken } from '../utils';
import { LABEL_LIST_VIEW } from '../components/ProjectList/Queries/projectQueries';

// The @urql/exchange-graphcache dependency exposes a normalized cache
// by default, the urql client comes pre-configured with a document cache.

const cache = cacheExchange({
  updates: {
    Mutation: {
      createLabel: ({ createLabel }, _args, cache) => {
        cache.updateQuery({ query: LABEL_LIST_VIEW }, data => {
          if (data !== null) {
            const statusIndex = data.programs[0].statuses.findIndex(
              c => c.id === _args.id
            );
            data.programs[0].statuses[statusIndex].labels.unshift(createLabel);
            return data;
          } else {
            return null;
          }
        });
      },
      createStatus: ({ createStatus }, _args, cache) => {
        cache.updateQuery({ query: LABEL_LIST_VIEW }, data => {
          if (data !== null) {
            data.programs[0].statuses.unshift(createStatus);
            return data;
          } else {
            return null;
          }
        });
      },
      deleteStatus: ({ deleteStatus }, _args, cache) => {
        cache.updateQuery({ query: LABEL_LIST_VIEW }, data => {
          if (data !== null) {
            const statusIndex = data.programs[0].statuses.findIndex(
              c => c.id === _args.id
            );
            data.programs[0].statuses.splice(statusIndex, 1);
            return data;
          } else {
            return null;
          }
        });
      },
      deleteLabel: ({ deleteLabel }, _args, cache) => {
        cache.updateQuery({ query: LABEL_LIST_VIEW }, data => {
          if (data !== null) {
            const statusIndex = data.programs[0].statuses.findIndex(
              c => c.id === _args.columnId
            );
            console.log('args columnId', _args);
            const labelIndex = data.programs[0].statuses[
              statusIndex
            ].labels.findIndex(l => l.id === _args.id);
            data.programs[0].statuses[statusIndex].labels.splice(labelIndex, 1);
            return data;
          } else {
            return null;
          }
        });
      },
    },
  },
});

const client = new Client({
  url: `${process.env.REACT_APP_URQL_URL}`,
  exchanges: [dedupExchange, cache, fetchExchange],
  fetchOptions: () => {
    const token = getToken();
    return {
      headers: { authorization: `Bearer ${token}` },
    };
  },
});

const Urql = ({ children }) => <Provider value={client}>{children}</Provider>;

export default Urql;
