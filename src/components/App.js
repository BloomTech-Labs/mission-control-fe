import React from 'react';
import { useLocation, Route } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import { embedAnalytics } from '../utils';

import Authorization from './Authorization';

const App = () => {
  const location = useLocation();

  React.useEffect(() => {
    embedAnalytics();
  }, [location]);

  return [
    <Route path="/implicit/callback" component={ImplicitCallback} />,
    <SecureRoute path="/" component={Authorization} />,
  ];
};

export default App;
