import React from 'react'
import { withAuth } from '@okta/okta-react'
import Dashboard from '../Dashboard/Dashboard'

export default withAuth(
	class Home extends React.Component {
		constructor(props) {
			super(props)
			this.state = { authenticated: null}
			this.checkAuthentication = this.checkAuthentication.bind(this)
			this.logout = this.logout.bind(this)
			this.checkAuthentication()
		}

		componentDidUpdate() {
			this.checkAuthentication();
		}

		async checkAuthentication() {
			const {
				props: {
					auth: { isAuthenticated },
				},
			} = this;

			const authenticated = await isAuthenticated()

			const {
				state: { authenticated: authed},
			} = this;

			if ( authenticated !== authed ) {
				this.setState({ authenticated });
			}
		}

		async logout() {
			localStorage.clear();
			this.props.auth.logout('/')
		}

		render() {
			const {
				props: {
					auth: { getAccessToken },
				},
				state: { authenticated },
			} = this;

			if (authenticated === null) return null;
			return (
				<Dashboard
					getToken={getAccessToken}
					logout={this.logout} />
			);
		}
	}
);
