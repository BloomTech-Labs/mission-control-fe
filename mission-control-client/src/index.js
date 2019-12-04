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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));


const cache = cacheExchange({});

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
