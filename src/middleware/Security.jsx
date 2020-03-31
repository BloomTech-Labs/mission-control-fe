import React from 'react';
import { Security as SecurityProvider } from '@okta/okta-react';

const config = {
	issuer: `${process.env.REACT_APP_OKTA_URL}/oauth2/default`,
	redirectUri: 'https://stage.missionctrl.dev/implicit/callback',
	clientId: `${process.env.REACT_APP_CLIENT_ID}`,
	pkce: true
};

const Security = ({ children }) => {
	const { issuer, redirectUri, clientId } = config;

	return (
		<SecurityProvider issuer={issuer} redirectUri={redirectUri} clientId={clientId} pkce>
			{children}
		</SecurityProvider>
	);
};

export default Security;
