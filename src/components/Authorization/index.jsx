import React, { useState, useEffect, useCallback, createContext } from 'react';
import { withAuth, SecureRoute } from '@okta/okta-react';
import { Switch } from 'react-router-dom';

import Layout from '../Layout';
import Project from '../Project/Project';
import ProjectListView from '../ProjectListView';

// OKTA authentication widget, invokes implicit callback to login
// if the user attempts to access a protected view.
// isAuthenticated peers into storage for a valid token upon PKCE
// handshake, so clear localStorage is called on logout.

export default withAuth(({ auth }) => {
  const [authState, setAuthState] = useState(null);
  const { isAuthenticated, logout, getAccessToken } = auth;
  // Memoized callback for subsequent re-renders of Dashboard children
  const checkAuthentication = useCallback(async () => {
    const authenticated = await isAuthenticated();
    if (authenticated !== authState) {
      setAuthState(authenticated);
    }
  }, [authState, isAuthenticated]);

  // useCallback on re-render if dependencies are valid
  useEffect(() => {
    checkAuthentication();
  });

  const invokeOktaLogout = async () => {
    localStorage.clear();
    logout('/');
  };

  return authState === null ? null : (
    <Layout>
      <Switch>
        <SecureRoute path="/project" component={Project} />
        <SecureRoute
          path="/"
          render={props => (
            <ProjectListView
              {...props}
              logout={invokeOktaLogout}
              getAccessToken={getAccessToken}
            />
          )}
        />
      </Switch>
    </Layout>
  );
});
