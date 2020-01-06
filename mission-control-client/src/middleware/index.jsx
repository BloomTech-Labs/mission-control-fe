import React from 'react';

import Security from './Security';
import Router from './Router';
import Urql from './Urql';

const Middleware = ({ children }) => (
  <Router>
    <Security>
      <Urql>{children}</Urql>
    </Security>
  </Router>
);

export default Middleware;
