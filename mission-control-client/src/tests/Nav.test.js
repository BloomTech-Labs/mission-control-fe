import React from "react";
import Nav from "../components/layout/Nav";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import * as rtl from "@testing-library/react";
import { fireEvent } from "@testing-library/react";
afterEach(rtl.cleanup);

describe("Nav", () => {
  it('renders "mission control" text', () => {
    const history = createMemoryHistory();
    const { container, getByText } = rtl.render(
      <Router history={history}>
        <Nav />
      </Router>
    );
    const target = getByText(/mission control/i);
    expect(container.contains(target)).toBeTruthy();
  });

  it('directs to the login page when "Sign In" is clicked', async () => {
    const history = createMemoryHistory();
    const { getByText } = rtl.render(
      <Router history={history}>
        <Nav />
      </Router>
    );
    // Click login button
    await fireEvent.click(getByText("Sign In"));
    expect(history.location.pathname).toBe("/login");
  });

  it('directs to the login page when "Sign In" is clicked', async () => {
    const history = createMemoryHistory();
    const { getByText } = rtl.render(
      <Router history={history}>
        <Nav />
      </Router>
    );
    // Click register button
    await fireEvent.click(getByText("Sign Up"));
    console.log(history.location.pathname);
    expect(history.location.pathname).toBe("/register");
  });
});
