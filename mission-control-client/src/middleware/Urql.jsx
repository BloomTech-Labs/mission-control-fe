import React from 'react';
import { Provider, Client, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';

const cache = cacheExchange({});

const client = new Client({
  url: `${process.env.REACT_APP_GRAPHQL_URL}`,
  exchanges: [dedupExchange, cache, fetchExchange],
});

export default ({ children }) => <Provider value={client}>{children}</Provider>;
