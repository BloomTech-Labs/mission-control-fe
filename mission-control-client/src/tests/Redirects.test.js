import React from "react";
import App from "../App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { cleanup, render } from "@testing-library/react";
import encrypt from "../utils/encrypt";

//? redux imports
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "../reducers/index";

const store = createStore(reducer, applyMiddleware(thunk));

afterEach(cleanup);

test("home path redirects to login when logged out", () => {
  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );

  expect(history.location.pathname).toBe("/login");
});

test("home path redirects to dashboard when logged in", () => {
  localStorage.setItem("token", "token");
  localStorage.setItem(
    "role",
    encrypt("student", process.env.REACT_APP_ROLE_KEY)
  );

  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );

  expect(history.location.pathname).toBe("/student/dashboard");
  localStorage.removeItem("token");
  localStorage.removeItem("role");
});

test("bad path routes to 404", () => {
  const history = createMemoryHistory();
  const { container, getByTestId, queryByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );

  expect(container.contains(queryByTestId(/bad/i))).toBeFalsy();
  history.push("/big/bad/route");
  expect(container.contains(getByTestId(/bad/i))).toBeTruthy();
});
