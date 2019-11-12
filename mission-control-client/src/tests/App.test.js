import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "../reducers/index";
import App from "../App";
import * as rtl from "@testing-library/react";
import axios from 'axios';

const store = createStore(reducer, applyMiddleware(thunk));

afterEach(rtl.cleanup);

describe("App", () => {
  it("renders without crashing", () => {
    const history = createMemoryHistory();
    const wrapper = rtl.render(
      <Provider store={store}>
        <Router history={history}>
          <App />
        </Router>
      </Provider>
    );
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
