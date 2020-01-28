import React, { useEffect } from 'react';
import { useLocation, Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import initializeAnalytics from '../utils/initializeAnalytics';

import Authorization from './Authorization';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    initializeAnalytics();
  }, [location]);

  return [
    <Route path="/implicit/callback" component={ImplicitCallback} />,
    <SecureRoute path="/" component={Authorization} />,
  ];
};

export default App;
