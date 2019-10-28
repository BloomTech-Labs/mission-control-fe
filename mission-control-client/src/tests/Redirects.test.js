import React from "react";
import App from "../App";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { cleanup, render, getByText } from "@testing-library/react";

//? redux imports
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "../reducers/index";

afterEach(cleanup);

jest.unmock("axios");

test("home path redirects to login when logged out", () => {
  const history = createMemoryHistory();
  render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(history.location.pathname).toBe("/login");
});

test("home path redirects to dashboard when logged in", () => {
  localStorage.setItem("token", "token");
  localStorage.setItem("user", "user");

  const store = createStore(
    reducer,
  );

  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  );

  expect(history.location.pathname).toBe("/dashboard/user");
  localStorage.removeItem("token");
  localStorage.removeItem("user");
});

test('bad path routes to 404', () => {
  const history = createMemoryHistory();
  const { container, getByTestId, queryByTestId } = render(
    <Router history={history}>
      <App />
    </Router>
  );

  expect(container.contains(queryByTestId(/bad/i))).toBeFalsy();
  history.push('/big/bad/route');
  expect(container.contains(getByTestId(/bad/i))).toBeTruthy();
})
