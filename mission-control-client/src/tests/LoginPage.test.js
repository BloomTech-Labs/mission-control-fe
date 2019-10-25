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

test('yup validation on touched fields', async () => {
  const history = createMemoryHistory();
  const { getByTestId, findByText } = render(
    <Router history={history}>
      <Login />
    </Router>
  );

  const email = getByTestId(/email-field/i);
  const password = getByTestId(/password-field/i);
  const head = getByTestId(/signin-head/i);

  fireEvent.focus(email);
  fireEvent.click(head);

  await expect(findByText(/iouhjiojiojo./i)).toBeTruthy();


})
