import React from "react";
import { Router } from "react-router-dom";
import { createMemoryHistory } from "history";

import App from "../App";
import * as rtl from "@testing-library/react";
afterEach(rtl.cleanup);
jest.unmock('axios')

describe("App", () => {
  it("renders without crashing", () => {
    const history = createMemoryHistory();
    const wrapper = rtl.render(
      <Router history={history}>
        <App />
      </Router>
    );
    expect(wrapper.baseElement).toMatchSnapshot();
  });
});
