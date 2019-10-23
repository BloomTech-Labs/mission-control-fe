import React from "react";
import Nav from "../components/layout/Nav";
import Login from "../components/auth/Login";
import axios from "axios";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, fireEvent, wait } from "@testing-library/react";

afterEach(cleanup);

test("Login page renders signed out nav bar", () => {
  const history = createMemoryHistory();
  const { container, getByTestId, queryByText } = render(
    <Router history={history}>
      <Nav />
    </Router>
  );

  const signup = getByTestId(/signup/i);
  const signin = getByTestId(/signin/i);
  const greet = queryByText(/welcome back/i);

  expect(container.contains(signup)).toBeTruthy();
  expect(container.contains(signin)).toBeTruthy();
  expect(container.contains(greet)).toBeFalsy();
});

test("Login page renders empty inputs", () => {
  const history = createMemoryHistory();
  const { getByTestId, getByText } = render(
    <Router history={history}>
      <Nav />
      <Login />
    </Router>
  );

  const email = getByTestId(/email-field/i);
  const password = getByTestId(/password-field/i);
  const btn = getByText(/LOG IN/);

  expect(email.tagName).toBe("INPUT");
  expect(password.tagName).toBe("INPUT");
  expect(password.tagName).toBe("INPUT");
  expect(btn.tagName).toBe("SPAN");
  expect(email.getAttribute("value")).toBe("");
  expect(password.getAttribute("value")).toBe("");
});

test("Login attempt with empty inputs", async () => {
  const history = createMemoryHistory();
  const { getByTestId, queryByText } = render(
    <Router history={history}>
      <Login />
    </Router>
  );

  const btn = getByTestId(/submit/i);

  fireEvent.click(btn);

  await wait(() => {
    expect(queryByText("Please, enter a valid email")).not.toBeNull();
    expect(queryByText("Please, enter password")).not.toBeNull();
  });
});

test("Login attempt with invalid inputs", async () => {
  const history = createMemoryHistory();
  const { container, getByTestId, findAllByText } = render(
    <Router history={history}>
      <Login />
    </Router>
  );

  fireEvent.change(getByTestId(/email-field/i), {
    target: { value: "test@email.com" }
  });
  fireEvent.change(getByTestId(/password-field/i), {
    target: { value: "testing123" }
  });

  const btn = getByTestId(/submit/i);

  fireEvent.click(btn);

  const warn = await findAllByText("Invalid credentials.");

  expect(container.contains(warn[0])).toBeTruthy();
  expect(container.contains(warn[1])).toBeTruthy();
  expect(container.contains(warn[2])).toBeFalsy();

});
