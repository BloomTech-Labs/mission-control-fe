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
import {
  Provider as UrqlProvider,
  Client,
  dedupExchange,
  fetchExchange
} from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";

import { productsU, projectsU, products } from "../src/queries";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

// const dynPageNum = 5;

const cache = cacheExchange({
  updates: {
    Mutation: {
      createProduct: ({ createProduct }, _args, cache) => {
        // const variables = {first: dynPageNum, skip: 0, orderBy: 'createdAt_DESC'}
        cache.updateQuery(
          {
            query: productsU
            // variables
          },
          data => {
            if (data !== null) {
              data.products.unshift(createProduct);
              return data;
            } else {
              return null;
            }
          }
        );
      },
      deleteProduct: ({ deleteProduct }, _args, cache) => {
        cache.updateQuery(
          { query: productsU, requestPolicy: "cache-and-network" },
          data => {
            const index = data.products.indexOf(deleteProduct);
            data.products.splice(index, 1);
            return data;
          }
        );
      },
      createProject: ({ createProject }, _args, cache) => {
        const productId = _args.data.product.connect.id;
        const newCreateProject = { ...createProject, start: null, end: null };
        cache.updateQuery({ query: productsU }, data => {
          if (data !== null) {
            data.products.map(product => {
              if (product.id === productId) {
                return product.projects.push(newCreateProject);
              }
            });
            return data;
          } else {
            return null;
          }
        });
      },
      deleteProject: ({ deleteProject }, _args, cache, info) => {
        // console.log("args", _args);
        // console.log("cache", cache);
        // console.log(info);
        const productId = _args.where.id;
        cache.updateQuery({ query: productsU }, data => {
          // consol e.log("data", data);
          if (data !== null) {
            data.products.map(product => {
              let index = null;
              product.projects.map((proj, i) => {
                if (proj.id === productId) {
                  index = i;
                }
              });
              if (index) {
                // console.log("index: ", index)
                product.projects.splice(index, 1);
              }else{
                product.projects.splice(0,1)
              }
            });
          }
          return data;
        });
      }
    }
  }
});

const client = new Client({
  url: "https://api-dev.use-mission-control.com/",
  fetchOptions: () => {
    // const token = getToken();
    return {
      headers: {
        Authorization: process.env.REACT_APP_JWT_TOKEN
      }
    };
  },
  exchanges: [dedupExchange, cache, fetchExchange]
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
