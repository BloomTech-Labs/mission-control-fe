import React from "react";
import Login from "../components/auth/Login";
import "@testing-library/jest-dom/extend-expect";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, fireEvent } from "@testing-library/react";

afterEach(cleanup);

test("Login page renders empty inputs", () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <Login />
    </Router>
  );

  const email = getByTestId(/email-field/i);
  const password = getByTestId(/password-field/i);

  expect(email.getAttribute("value")).toBe("");
  expect(password.getAttribute("value")).toBe("");
});

test("sign up CTA works", () => {
  const history = createMemoryHistory();
  const { getByText } = render(
    <Router history={history}>
      <Login />
    </Router>
  );

  fireEvent.click(getByText(/create one/i));

  expect(history.location.pathname).toBe("/register");
});

test("can enter text in inputs", () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Router history={history}>
      <Login />
    </Router>
  );

  const email = getByTestId(/email-field/i);
  const password = getByTestId(/password-field/i);

  fireEvent.change((email), {
    target: { value: "test@input.com" }
  });

  fireEvent.change((password), {
    target: { value: "testinginputs" }
  });

  expect(email.getAttribute("value")).toBe("test@input.com");
  expect(password.getAttribute("value")).toBe("testinginputs");
});

test("yup validation on touched login fields", async () => {
  const history = createMemoryHistory();
  const {
    container,
    getByPlaceholderText,
    findByText
  } = render(
    <Router history={history}>
      <Login />
    </Router>
  );

  const e = getByPlaceholderText(/Enter Your Email. . ./i);
  const p = getByPlaceholderText(/password/i);

  // first name field yup validation

  fireEvent.focus(e);
  fireEvent.blur(e);

  const eBad = await findByText("Email is required");

  expect(container.contains(eBad)).toBeTruthy();

  // last name field yup validation

  fireEvent.focus(p);
  fireEvent.blur(p);

  const pBad = await findByText("Valid password is required.");

  expect(container.contains(pBad)).toBeTruthy();
});
