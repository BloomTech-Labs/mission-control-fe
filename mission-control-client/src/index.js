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
                return data
            } else {
              return null
            }
          })
      },
      deleteProduct: ({ deleteProduct }, _args, cache) => {
        cache.updateQuery({ query: productsU, requestPolicy: 'cache-and-network' }, data => {
          const index = data.products.indexOf(deleteProduct)
          data.products.splice(index,1)
          return data
        })
      },
      createProject: ({ createProject }, _args, cache) => {
        const productId = _args.data.product.connect.id
        const newCreateProject = {...createProject, start:null, end:null}

        console.log("createProject info: ", createProject)
        // console.log("_args info: ", _args)
        // console.log("cache info: ", cache)
        cache.updateQuery({ query: productsU
          }, data => {
            console.log("data: ", data)
            console.log("productId variable: ", productId)
            if (data !== null) {
              data.products.map(product => {
                if(product.id === productId){
                  console.log("product.id", product.id)
                  console.log('Projects from a product', data.products[0].projects)
                    return product.projects.push(newCreateProject)
                }
              })
              return data
            } else {
              return null
            }
          })
      },
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
