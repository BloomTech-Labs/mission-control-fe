import React from "react";
import Registration from "../components/auth/Registration";
import NavLinksLoggedIn from "../components/layout/NavLinksLoggedIn";
import axios from 'axios';
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, fireEvent, wait } from "@testing-library/react";

afterEach(cleanup);

test("Register attempt with empty inputs", async () => {
  const history = createMemoryHistory();
  const { findByTestId, getByTestId } = render(
    <Router history={history}>
      <Registration />
    </Router>
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
    <Router history={history}>
      <Registration />
    </Router>
  );

  const r = async (URL, packet) => {
    const res = await axios.post(URL, packet);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", res.data.user.userId);
    localStorage.setItem("fname", res.data.user.firstName);
    history.push(`/dashboard/${localStorage.getItem("user")}`);
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
          role: "God"
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
      role: "God"
    },
    token: "tkn"
  });

  expect(axios.post).toHaveBeenCalledTimes(1);
  expect(window.localStorage.getItem("token")).toEqual("tkn");
  expect(window.localStorage.getItem("fname")).toEqual(testName);
  expect(window.localStorage.getItem("user")).toEqual("id");
  expect(history.location.pathname).toEqual("/dashboard/id");

  render(
    <Router history={history}>
      <NavLinksLoggedIn />
    </Router>
  );

  const greet = await findByText(/welcome back/i);
  expect(greet.innerHTML).toMatch(`Welcome back, ${testName}`);
  axios.post.mockClear();
});
