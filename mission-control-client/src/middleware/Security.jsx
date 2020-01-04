import React from 'react';
import { Security } from '@okta/okta-react';

const config = {
  issuer: `${process.env.REACT_APP_OKTA_URL}/oauth2/default`,
  redirectUri: `${window.location.origin}/implicit/callback`,
  clientId: `${process.env.REACT_APP_CLIENT_ID}`,
  pkce: true,
};

export default ({ children }) => {
  const { issuer, redirectUri, clientId } = config;

  return (
    <Security
      issuer={issuer}
      redirectUri={redirectUri}
      clientId={clientId}
      pkce
    >
      {children}
    </Security>
  );
};
