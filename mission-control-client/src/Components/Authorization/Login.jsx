import React, { useState, useEffect } from 'react';
import { withAuth } from '@okta/okta-react';

import Dashboard from '../Dashboard/Dashboard';

export default withAuth(({ auth }) => {
  const [authState, setAuthState] = useState(null);
  const { isAuthenticated, logout, getAccessToken } = auth;

  useEffect(() => {
    const checkAuthentication = async () => {
      const authenticated = await isAuthenticated();

      if (authenticated !== authState) {
        setAuthState({ authenticated });
      }
    };
    checkAuthentication();
  }, [authState, isAuthenticated]);

  const invokeOktaLogout = async () => {
    localStorage.clear();
    logout('/');
  };

  return authState === null ? null : (
    <Dashboard getToken={getAccessToken} logout={invokeOktaLogout} />
  );
});
