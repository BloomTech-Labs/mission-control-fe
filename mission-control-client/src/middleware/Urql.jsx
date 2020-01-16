import React from 'react';
import { Provider, Client, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange as normalizedCache } from '@urql/exchange-graphcache';
import { getToken } from '../utils';

// The @urql/exchange-graphcache dependency exposes a normalized cache
// by default, the urql client comes pre-configured with a document cache.
const cacheExchange = normalizedCache({});

const client = new Client({
  url: `${process.env.REACT_APP_URQL_URL}`,
  exchanges: [dedupExchange, cacheExchange, fetchExchange],
  fetchOptions: () => {
    const token = getToken();
    return {
      headers: { authorization: JSON.stringify(token) },
    };
  },
});

const Urql = ({ children }) => <Provider value={client}>{children}</Provider>;

export default Urql;
