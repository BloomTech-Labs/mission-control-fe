import React from 'react';
import { Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

import Login from './Authorization/Login';

// Configures Security component
const securityConfig = {
  issuer: `${process.env.REACT_APP_OKTA_URL}/oauth2/default`,
  redirectUri: `${window.location.origin}/implicit/callback`,
  clientId: `${process.env.REACT_APP_CLIENT_ID}`,
  pkce: true,
};

const App = () => (
  <Security {...securityConfig}>
    <SecureRoute exact path="/" component={Login} />
    <Route path="/implicit/callback" component={ImplicitCallback} />
  </Security>
);

export default App;
