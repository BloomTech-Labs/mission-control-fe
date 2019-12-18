import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";

import {
  Provider as UrqlProvider,
  Client,
  dedupExchange,
  fetchExchange
} from "urql";
import { cacheExchange } from "@urql/exchange-graphcache";
import { productsU } from "../src/queries";

const cache = cacheExchange({
  updates: {
    Mutation: {
      createProduct: ({ createProduct }, _args, cache) => {
        cache.updateQuery(
          {
            query: productsU
            // variables
          },
          data => {
            if (data !== null) {
              data.products.push(createProduct);
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
            let prodIndex = null;
            if (data !== null) {
              data.products.forEach((product, i) => {
                if (product.id === deleteProduct.id) {
                  prodIndex = i;
                }
              });
              data.products.splice(prodIndex, 1);
              return data;
            } else {
              console.log("deleteProduct Data Error", data);
            }
          }
        );
      },
      createProject: ({ createProject }, _args, cache) => {
        const productId = _args.data.product.connect.id;
        const newCreateProject = { ...createProject, start: null, end: null };
        cache.updateQuery({ query: productsU }, data => {
          if (data !== null) {
            data.products.forEach(product => {
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
          // console.log("data", data);
          if (data !== null) {
            data.products.forEach(product => {
              let index = null;
              product.projects.forEach((proj, i) => {
                if (proj.id === productId) {
                  index = i;
                }
              });
              if (index) {
                // console.log("index: ", index)
                product.projects.splice(index, 1);
              } else {
                product.projects.splice(0, 1);
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
    <Router>
      <UrqlProvider value={client}>
        <App />
      </UrqlProvider>
    </Router>,
  document.getElementById("root")
);
