import React from "react";
import Login from "../components/auth/Login";
import NavLinksLoggedIn from "../components/layout/NavLinksLoggedIn";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup } from "@testing-library/react";

afterEach(cleanup);

test("Successful login", async () => {
  // setup

  const history = createMemoryHistory();
  const { findByText } = render(
    <Router history={history}>
      <Login />
    </Router>
  );

  const a = async (URL, packet) => {
    const res = await axios.post(URL, packet);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", res.data.user.userId);
    localStorage.setItem("fname", res.data.user.firstName);
    history.push(`/dashboard/${localStorage.getItem("user")}`);
    return res.data;
  };

  const testName= "Test"

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

  const greet = await findByText(/welcome back/i)
  expect(greet.innerHTML).toMatch(`Welcome back, ${testName}`)

});
