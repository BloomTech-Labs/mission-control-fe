import React from 'react';
import { Provider, Client, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import { getToken } from '../utils';

// The @urql/exchange-graphcache dependency exposes a normalized cache
// by default, the urql client comes pre-configured with a document cache.
const cache = cacheExchange({});

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
