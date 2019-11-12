import React from "react";
import Nav from "../components/layout/Nav";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import encrypt from "../utils/encrypt";
import * as rtl from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "../reducers/index";

const store = createStore(reducer, applyMiddleware(thunk));

afterEach(rtl.cleanup);

describe("Nav", () => {
  it('renders "mission control" text', () => {
    const history = createMemoryHistory();
    const { container, getByText } = rtl.render(
      <Provider store={store}>
        <Router history={history}>
          <Nav />
        </Router>
      </Provider>
    );
    const target = getByText(/mission control/i);
    expect(container.contains(target)).toBeTruthy();
  });

  it('directs to the login page when "Sign In" is clicked', async () => {
    const history = createMemoryHistory();
    const { getByText } = rtl.render(
      <Provider store={store}>
        <Router history={history}>
          <Nav />
        </Router>
      </Provider>
    );
    // Click login button
    await fireEvent.click(getByText("Sign In"));
    expect(history.location.pathname).toBe("/login");
  });

  it('directs to the register page when "Sign Up" is clicked', async () => {
    const history = createMemoryHistory();
    const { getByText } = rtl.render(
      <Provider store={store}>
        <Router history={history}>
          <Nav />
        </Router>
      </Provider>
    );
    // Click register button
    await fireEvent.click(getByText("Sign Up"));
    expect(history.location.pathname).toBe("/register");
  });

  it("clicking nav head sends you to dashboard when logged in", () => {
    localStorage.setItem("token", "token");
    localStorage.setItem(
      "role",
      encrypt("user", process.env.REACT_APP_ROLE_KEY)
    );

    const history = createMemoryHistory();
    const { getByText } = rtl.render(
      <Provider store={store}>
        <Router history={history}>
          <Nav />
        </Router>
      </Provider>
    );

    expect(history.location.pathname).not.toBe("/user/dashboard");

    const head = getByText(/mission control/i);

    fireEvent.click(head);

    expect(history.location.pathname).toBe("/user/dashboard");
  });

  it("clicking nav head sends you to login page when not logged in", () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    const history = createMemoryHistory();
    const { getByText } = rtl.render(
      <Provider store={store}>
        <Router history={history}>
          <Nav />
        </Router>
      </Provider>
    );

    expect(history.location.pathname).not.toBe("/login");

    const head = getByText(/mission control/i);

    fireEvent.click(head);

    expect(history.location.pathname).toBe("/login");
  });
});
