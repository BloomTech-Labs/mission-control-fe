import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { SecureRoute, ImplicitCallback } from '@okta/okta-react';

import { embedAnalytics } from '../utils';

import Authorization from './Authorization';
import Project from './Project/Project';
import ProjectListView from './ProjectListView';
import Login from './Authorization/Login';
import Signup from './Authorization/Signup';

const App = () => {
  const location = useLocation();

  React.useEffect(() => {
    embedAnalytics();
  }, [location]);

  return (
    <Switch>
      <Route path="/implicit/callback" component={ImplicitCallback} />
      <Route path="/project" component={Project} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      {/* Authorization component renders ProjectListView implicitly */}
      <Route path="/" component={ProjectListView} />
      <SecureRoute exact path="/" component={Authorization} />
    </Switch>
  );
};

export default App;
