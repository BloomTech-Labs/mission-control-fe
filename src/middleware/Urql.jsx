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
            const statusIndex = data.programs[0].status6es.findIndex(
              c => c.id === _args.columnId
            );
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

//TODO uncomment for deployment
    // const token = getToken();

    const token = 'eyJraWQiOiJOTGZNVDhzM210SWJVakdWTklEeHc4MDVJX3ZxLXV6VVhMYUNSR0c2QmxBIiwiYWxnIjoiUlMyNTYifQ.eyJ2ZXIiOjEsImp0aSI6IkFULnY1VnZDbVJRMVJIWE1MWUpINXMxaXUyMl93Zkg0RDEyb2JRQ1lWSm5XYnMiLCJpc3MiOiJodHRwczovL29rdGEubWlzc2lvbmN0cmwuZGV2L29hdXRoMi9kZWZhdWx0IiwiYXVkIjoiYXBpOi8vZGVmYXVsdCIsImlhdCI6MTU4ODEwOTQ5MywiZXhwIjoxNTg4MTI3NDkzLCJjaWQiOiIwb2EzbWY4djhwUzg2b0xKSTM1NyIsInVpZCI6IjAwdTNtZmI2MjBudkVNN0N1MzU3Iiwic2NwIjpbIm9wZW5pZCJdLCJzdWIiOiJ0ZXN0QGV4YW1wbGUuY29tIiwiQXV0aCI6WyJFdmVyeW9uZSJdLCJncm91cHMiOlsiRXZlcnlvbmUiXX0.hwa60NRSR5cG7VJXV4--MN-7tqYt6y0RS0__9u-mnIIXECQarVpdZ5pn6hEcmzaTHMAXQs1xtigAQImhrELN2rUzQUFf0d7mlubXzMNTNfGAEPA74-m3AmPacHtI9lcklTVPotuSXzNifGBb75wXBPZjW3v5RLvMheX2E81HJiFuzjKIu-j1RK_iHvVGRXAvjjAMx6YdIgbeVm4PFA3VWQzuH06OoxJY8R5--bIrqsXWgb9Z-p60MQB7RcpBtMbmaIHyHe7rmrgs549Q05ILgRNkSJ-10jW7OhyGkCTI-IUGVIonrvfxyJ2Qk40-GZoeNdMYZ6-7tUTk16hIYTllXw","scope":"openid","id_token":"eyJraWQiOiJOTGZNVDhzM210SWJVakdWTklEeHc4MDVJX3ZxLXV6VVhMYUNSR0c2QmxBIiwiYWxnIjoiUlMyNTYifQ.eyJzdWIiOiIwMHUzbWZiNjIwbnZFTTdDdTM1NyIsInZlciI6MSwiaXNzIjoiaHR0cHM6Ly9va3RhLm1pc3Npb25jdHJsLmRldi9vYXV0aDIvZGVmYXVsdCIsImF1ZCI6IjBvYTNtZjh2OHBTODZvTEpJMzU3IiwiaWF0IjoxNTg4MTA5NDkzLCJleHAiOjE1ODgxMTMwOTMsImp0aSI6IklELlNtdnFDa2laTW5RLXYwY1RhSFFBMDNfMloyTWl4WWZIUllER2s4TkVIQlUiLCJhbXIiOlsicHdkIl0sImlkcCI6IjAwbzFxdWdlOThWeGtXcm11MzU3IiwiYXV0aF90aW1lIjoxNTg4MTA5NDkzLCJhdF9oYXNoIjoianVPXzNCR0dRUThPSFpvcVNqTXNyZyJ9.hwCiAcMB3yQ65torpxvKSICBQfvjhx9ktQx3_I5pr9L4c9kz8g9Eu6KcaffuY5rWF5KywVIcHVish8MGvyt7xfIkY7mSU23oZFIrkT9fQkPqraCw_3-35sWGhUDoIFMCmu9XnLrw038LO0KP8Kfe2aayTqPxXuykFm1oynvkngHwylp_J5oKq7M7jkaN5TbfLhLloGOTRjOYz01Ymc_P_H43tsKHZc8WQUV_u_PTvn2MXODnVOTi4TPUwrUtDtJ_pxqrn3aDDeMQWDxzs6LY_VxsAnZ8Eofhtb2xihIqgrQgxJvg67eaP00_kVF-3pY3JV7_eSQZJZouwOq0He4Xiw'
    return {
      headers: { authorization: `Bearer ${token}` },
    };
  },
});

const Urql = ({ children }) => <Provider value={client}>{children}</Provider>;

export default Urql;
