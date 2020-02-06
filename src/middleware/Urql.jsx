import React from 'react';
import { Provider, Client, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange as normalizedCache } from '@urql/exchange-graphcache';
import { getToken } from '../utils';

import { NOTE_FEED_QUERY, DELETE_NOTE } from '../components/Project/Queries';

// The @urql/exchange-graphcache dependency exposes a normalized cache
// by default, the urql client comes pre-configured with a document cache.
const cacheExchange = normalizedCache({
  updates: {
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

const client = new Client({
  url: `${process.env.REACT_APP_URQL_URL}`,
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
  fetchOptions: () => {
    const token = getToken();
    return {
      headers: { authorization: `Bearer ${token}` },
    };
  },
});

const Urql = ({ children }) => <Provider value={client}>{children}</Provider>;

export default Urql;
