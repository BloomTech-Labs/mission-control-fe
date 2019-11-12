import React from "react";
import Login from "../components/auth/Login";
import NavLinksLoggedIn from "../components/layout/NavLinksLoggedIn";
import axios from "axios";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "../reducers/index";

const store = createStore(reducer, applyMiddleware(thunk));

afterEach(cleanup);

test("Successful login", async () => {
  // setup

  const history = createMemoryHistory();
  const { findByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Login />
      </Router>
    </Provider>
  );

  const a = async (URL, packet) => {
    const res = await axios.post(URL, packet);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("role", res.data.user.role);
    localStorage.setItem("fname", res.data.user.firstName);
    history.push(`/${res.data.user.role}/dashboard`);
    return res.data;
  };

  const testName = "Test";

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

  const u = await a("testURL", {
    email: "good@email.com",
    password: "thisisatest"
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

// NEW TEST

test("Login attempt with invalid inputs", async () => {
  const history = createMemoryHistory();

  const { container, getByTestId, findAllByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Login />
      </Router>
    </Provider>
  );

  // mock err

  axios.post.mockRejectedValue({
    response: { data: { message: "Test for invalid credentials." } }
  });

  // bad inputs

  fireEvent.change(getByTestId(/email-field/i), {
    target: { value: "test@bademail.com" }
  });
  fireEvent.change(getByTestId(/password-field/i), {
    target: { value: "testing123" }
  });

  // submit

  const btn = getByTestId(/submit/i);

  fireEvent.click(btn);

  // wait for err msgs and check DOM for two err msgs (one per input)

  const bad = await findAllByText("Test for invalid credentials.");

  expect(container.contains(bad[0])).toBeTruthy();
  expect(container.contains(bad[1])).toBeTruthy();
  expect(container.contains(bad[2])).toBeFalsy();

  // confirm that fake axios was called

  fireEvent.click(btn);

  await findAllByText("Test for invalid credentials.");

  expect(axios.post).toHaveBeenCalledTimes(2);
  axios.post.mockClear();
});
