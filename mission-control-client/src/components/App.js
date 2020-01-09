import React, { useEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import embedAnalytics from '../utils/embedAnalytics';

import Authorization from './Authorization';
import Project from './Project/Project.jsx';

const App = () => {
  const location = useLocation();

  useEffect(() => {
    embedAnalytics();
  }, [location]);

  return (
    <Switch>
      <SecureRoute exact path="/" component={Authorization} />
      <Route path="/implicit/callback" component={ImplicitCallback} />
      <Route path="/project" component={Project} />
    </Switch>
  );
};

export default App;
