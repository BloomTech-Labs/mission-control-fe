import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

//? redux imports
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./reducers/index";
import { Provider as UrqlProvider, Client, dedupExchange, fetchExchange } from "urql";
import { cacheExchange } from '@urql/exchange-graphcache';

import { productsU } from '../src/queries';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// const dynPageNum = 5;

const cache = cacheExchange({
  updates:{
    Mutation: {
      createProduct: ({ createProduct }, _args, cache) => {
        // const variables = {first: dynPageNum, skip: 0, orderBy: 'createdAt_DESC'}
          cache.updateQuery({ query: productsU, 
            // variables
          }, data => {
            if (data !== null) {
                data.products.unshift(createProduct)
                // data.products.count++
                return data
            } else {
              return null
            }
          })
      },
      // deleteProduct: ({ deleteProduct }, _args, cache) => {
      //   console.log(cache)
      //   cache.updateQuery({ query: productsU, requestPolicy: 'cache-and-network' }, data => {
      //     return data
      //   })
      // }
    },
  }
});


const client = new Client({
  url: "https://api-dev.use-mission-control.com/",
  fetchOptions: () => {
    // const token = getToken();
    return {
      headers: {
        Authorization:
        process.env.REACT_APP_JWT_TOKEN
      }
    };
  },
  exchanges: [ dedupExchange, cache, fetchExchange ]
});

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <UrqlProvider value={client}>
        <App />
      </UrqlProvider>
    </Router>
  </Provider>,
  document.getElementById("root")
);
