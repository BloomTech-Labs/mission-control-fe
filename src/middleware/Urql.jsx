import React from 'react';
import { Provider, Client, dedupExchange, fetchExchange } from 'urql';
import { cacheExchange } from '@urql/exchange-graphcache';
import { getToken } from '../utils';
import { LABEL_LIST_VIEW } from '../components/ProjectList/Queries/projectQueries';
import { CREATE_TAG} from '../components/Project/Queries/TagQueries';

// The @urql/exchange-graphcache dependency exposes a normalized cache
// by default, the urql client comes pre-configured with a document cache.

const cache = cacheExchange({
  updates: {
    Mutation: {
        /*
      createTag: ({ createTag }, _args, cache) => {
        cache.createTag({ query: CREATE_TAG }, data => {
          if (data !== null) {
            const tagsIndex = data.tags[0].s.findIndex(
              c => c.id === _args.id
            );
            data.tags.unshift(createTag);
            return data;
          } else {
            return null;
          }
        });
      },*/

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

    const token ='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InNlcnZpY2UiOiJkZWZhdWx0QGRlZmF1bHQiLCJyb2xlcyI6WyJhZG1pbiJdfSwiaWF0IjoxNTg5MjM2MTQzLCJleHAiOjE1ODk4NDA5NDN9.F_ctrdrciDehxBioA-yiToS8g2MssoQq5e-TBlJKO2Y' || getToken();
    return {
      headers: { authorization: `Bearer ${token}` },
    };
  },
});

const Urql = ({ children }) => <Provider value={client}>{children}</Provider>;

export default Urql;
