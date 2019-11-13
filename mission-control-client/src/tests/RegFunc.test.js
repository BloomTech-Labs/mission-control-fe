import React from "react";
import Registration from "../components/auth/Registration";
import NavLinksLoggedIn from "../components/layout/NavLinksLoggedIn";
import axios from "axios";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, fireEvent, wait } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "../reducers/index";

const store = createStore(reducer, applyMiddleware(thunk));

afterEach(cleanup);

test("Register attempt with empty inputs", async () => {
  const history = createMemoryHistory();
  const { findByTestId, getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <Registration />
      </Router>
    </Provider>
  );

  const btn = getByTestId(/getstarted/i);

  fireEvent.click(btn);

  await wait(() => {
    expect(findByTestId(/reg-a/i)).toBeTruthy();
  });
  await wait(() => {
    expect(findByTestId(/reg-b/i)).toBeTruthy();
  });
  await wait(() => {
    expect(findByTestId(/reg-c/i)).toBeTruthy();
  });
  await wait(() => {
    expect(findByTestId(/reg-d/i)).toBeTruthy();
  });
  await wait(() => {
    expect(findByTestId(/reg-e/i)).toBeTruthy();
  });
  axios.post.mockClear();
});

test("Successful login", async () => {
  // setup

  const history = createMemoryHistory();
  const { findByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Registration />
      </Router>
    </Provider>
  );

  const r = async (URL, packet) => {
    const res = await axios.post(URL, packet);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.user.role);
    localStorage.setItem("fname", res.data.user.firstName);
    history.push(`/${res.data.user.role}/dashboard`);
    return res.data;
  };

  const testName = "Dan";

  axios.post.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        user: {
          userId: "id",
          password: "noneya:)",
          firstName: testName,
          lastName: "LastName",
          email: "email@email.com",
          role: "god"
        },
        token: "tkn"
      }
    })
  );

  // run

  const u = await r("testURL", {
    firstName: testName,
    lastName: "LastName",
    email: "email@email.com",
    password: "password",
    roleId: "123abc"
  });

  // expects

  expect(u).toEqual({
    user: {
      userId: "id",
      password: "noneya:)",
      firstName: testName,
      lastName: "LastName",
      email: "email@email.com",
      role: "god"
    },
    token: "tkn"
  });

  expect(axios.post).toHaveBeenCalledTimes(1);
  expect(window.localStorage.getItem("token")).toEqual("tkn");
  expect(window.localStorage.getItem("fname")).toEqual(testName);
  expect(window.localStorage.getItem("role")).toEqual("god");
  expect(history.location.pathname).toEqual("/god/dashboard");

  render(
    <Provider store={store}>
      <Router history={history}>
        <NavLinksLoggedIn />
      </Router>
    </Provider>
  );

  const greet = await findByText(/welcome back/i);
  expect(greet.innerHTML).toMatch(`Welcome back, ${testName}`);
  axios.post.mockClear();
});
