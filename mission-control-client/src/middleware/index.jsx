import React from 'react';

import Security from './Security';
import Router from './Router';
import Urql from './Urql';

export default ({ children }) => (
  <Router>
    <Security>
      <Urql>{children}</Urql>
    </Security>
  </Router>
);
