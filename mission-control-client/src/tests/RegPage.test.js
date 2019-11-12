import React from "react";
import Registration from "../components/auth/Registration";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, cleanup, fireEvent } from "@testing-library/react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducer from "../reducers/index";

const store = createStore(reducer, applyMiddleware(thunk));

afterEach(cleanup);

test("reg page renders empty inputs", () => {
  const history = createMemoryHistory();
  const { getByPlaceholderText, getAllByPlaceholderText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Registration />
      </Router>
    </Provider>
  );

  const fname = getByPlaceholderText(/first name/i);
  const lname = getByPlaceholderText(/last name/i);
  const email = getByPlaceholderText(/email/i);
  const pass = getAllByPlaceholderText(/password/i)[0];
  const cpass = getByPlaceholderText(/confirm password/i);

  expect(fname.getAttribute("value")).toBe("");
  expect(lname.getAttribute("value")).toBe("");
  expect(email.getAttribute("value")).toBe("");
  expect(pass.getAttribute("value")).toBe("");
  expect(cpass.getAttribute("value")).toBe("");
});

test("signin cta link works", () => {
  const history = createMemoryHistory();
  const { getByTestId } = render(
    <Provider store={store}>
      <Router history={history}>
        <Registration />
      </Router>
    </Provider>
  );

  fireEvent.click(getByTestId(/signin cta/i));

  expect(history.location.pathname).toBe("/login");
});

test("yup validation on touched fields", async () => {
  const history = createMemoryHistory();
  const {
    container,
    getByPlaceholderText,
    findByTestId,
    getAllByPlaceholderText
  } = render(
    <Provider store={store}>
      <Router history={history}>
        <Registration />
      </Router>
    </Provider>
  );

  const f = getByPlaceholderText(/first name/i);
  const l = getByPlaceholderText(/last name/i);
  const e = getByPlaceholderText(/email/i);
  const p = getAllByPlaceholderText(/password/i)[0];
  const cp = getByPlaceholderText(/confirm password/i);

  // first name field yup validation

  fireEvent.focus(f);
  fireEvent.blur(f);

  const fBad = await findByTestId("reg-a");

  expect(container.contains(fBad)).toBeTruthy();

  // last name field yup validation

  fireEvent.focus(l);
  fireEvent.blur(l);

  const lBad = await findByTestId("reg-b");

  expect(container.contains(lBad)).toBeTruthy();

  // email field yup validation

  fireEvent.focus(e);
  fireEvent.blur(e);

  const eBad = await findByTestId("reg-c");

  expect(container.contains(eBad)).toBeTruthy();

  // password field yup validation

  fireEvent.focus(p);
  fireEvent.blur(p);

  const pBad = await findByTestId("reg-d");

  expect(container.contains(pBad)).toBeTruthy();

  // confirm password field yup validation

  fireEvent.focus(cp);
  fireEvent.blur(cp);

  const cpBad = await findByTestId("reg-e");

  expect(container.contains(cpBad)).toBeTruthy();
});

test("can enter text in inputs", () => {
  const history = createMemoryHistory();
  const { getByPlaceholderText, getAllByPlaceholderText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Registration />
      </Router>
    </Provider>
  );

  const f = getByPlaceholderText(/first name/i);
  const l = getByPlaceholderText(/last name/i);
  const e = getByPlaceholderText(/email/i);
  const p = getAllByPlaceholderText(/password/i)[0];
  const cp = getByPlaceholderText(/confirm password/i);

  fireEvent.change(f, {
    target: { value: "First Name" }
  });

  fireEvent.change(l, {
    target: { value: "Last Name" }
  });

  fireEvent.change(e, {
    target: { value: "email@email.com" }
  });

  fireEvent.change(p, {
    target: { value: "password" }
  });

  fireEvent.change(cp, {
    target: { value: "password" }
  });

  expect(f.getAttribute("value")).toBe("First Name");
  expect(l.getAttribute("value")).toBe("Last Name");
  expect(e.getAttribute("value")).toBe("email@email.com");
  expect(p.getAttribute("value")).toBe("password");
  expect(cp.getAttribute("value")).toBe("password");
});

test("yup invalid email", async () => {
  const history = createMemoryHistory();
  const { container, getByPlaceholderText, findByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Registration />
      </Router>
    </Provider>
  );

  const e = getByPlaceholderText(/email/i);

  fireEvent.change(e, {
    target: { value: "bademail" }
  });
  fireEvent.blur(e);

  const invalid = await findByText(/invalid email/i);

  expect(container.contains(invalid)).toBeTruthy();
});

test("yup password min chars", async () => {
  const history = createMemoryHistory();
  const { container, getAllByPlaceholderText, findByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Registration />
      </Router>
    </Provider>
  );

  const p = getAllByPlaceholderText(/password/i)[0];

  fireEvent.change(p, {
    target: { value: "bad" }
  });
  fireEvent.blur(p);

  const min = await findByText(/8 characters/i);

  expect(container.contains(min)).toBeTruthy();
});

test("yup password max chars", async () => {
  const history = createMemoryHistory();
  const { container, getAllByPlaceholderText, findByText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Registration />
      </Router>
    </Provider>
  );

  const p = getAllByPlaceholderText(/password/i)[0];

  fireEvent.change(p, {
    target: {
      value:
        "sorry! this password is far too long. how dare you test the limits of this form, you scoundrel!"
    }
  });
  fireEvent.blur(p);

  const min = await findByText(/16 characters/i);

  expect(container.contains(min)).toBeTruthy();
});

test("yup confirm password matches password", async () => {
  const history = createMemoryHistory();
  const {
    container,
    getAllByPlaceholderText,
    getByPlaceholderText,
    findByText
  } = render(
    <Provider store={store}>
      <Router history={history}>
        <Registration />
      </Router>
    </Provider>
  );

  const p = getAllByPlaceholderText(/password/i)[0];
  const cp = getByPlaceholderText(/confirm password/i);

  fireEvent.change(p, {
    target: {
      value: "johndoe123"
    }
  });
  fireEvent.blur(p);
  fireEvent.change(cp, {
    target: {
      value: "janedoe123"
    }
  });
  fireEvent.blur(cp);

  const match = await findByText(/must match/i);

  expect(container.contains(match)).toBeTruthy();
});

test("matching passwords", async () => {
  const history = createMemoryHistory();
  const { queryByText, getAllByPlaceholderText, getByPlaceholderText } = render(
    <Provider store={store}>
      <Router history={history}>
        <Registration />
      </Router>
    </Provider>
  );

  const p = getAllByPlaceholderText(/password/i)[0];
  const cp = getByPlaceholderText(/confirm password/i);

  fireEvent.change(p, {
    target: {
      value: "password1"
    }
  });
  fireEvent.blur(p);
  fireEvent.change(cp, {
    target: {
      value: "password1"
    }
  });
  fireEvent.blur(cp);

  expect(await queryByText(/must match/i)).toBeFalsy();
});
