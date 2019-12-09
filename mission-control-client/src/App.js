import React, { useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
  Redirect,
  useHistory
} from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';

// components
import Layout from "./components/layout/Layout";
// import Registration from "./components/auth/Registration.js";
import Login from "./components/auth/Login";
import ProjectMore from "./components/dashboard/admin-dashboard/ProjectMore";
import Bad from "./components/layout/Bad";
import AdminDash from "./components/dashboard/admin-dashboard/DashboardHome";
import UserDash from "./components/dashboard/user-dashboard/DashboardHome";
import EditProfile from "./components/user-settings/EditProfile";
import UserPromotions from './components/user-settings/UserPromotions'

//utils
import AdminPrivateRoute from "./utils/AdminPrivateRoute";
import PrivateRoute from "./utils/PrivateRoute";
import StudentPrivateRoute from "./utils/StudentPrivateRoute";
import embedAnalytics from "./utils/embedAnalytics";
import decrypt from "./utils/decrypt";

//styles
import "./styles/index.scss";

function App() {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    embedAnalytics();
  }, [location]);

  function onAuthRequired({ history }){
    history.push('/')
  }

  return (
    <Layout>
      <Security issuer='https://dev-173777.okta.com/oauth2/default'
                clientId='0oa25nnb3plbDjQZJ357'
                redirectUri={window.location.origin + '/implicit/callback'}
                onAuthRequired={onAuthRequired}
                pkce={true} >
        <Switch>
          {/* {(!localStorage.getItem("role") ||
            !["admin", "manager", "student"].includes(decrypt())) &&
            localStorage.removeItem("token") &&
            history.push("/login")} */}
          {/* <PrivateRoute path="/" exact>
            {localStorage.getItem("token") ? (
              <Redirect to={{ pathname: `${decrypt()}/dashboard` }} />
            ) : (
              <Redirect to="/login" />
            )}
          </PrivateRoute> */}
          {/* OKTA will be taking over user access and control */}
          {/* <Route path="/register" component={Registration} /> */}
          {/* <Route path="/" exact component={Login} /> */}
          <Route path='/login' render={() => <Login baseUrl='https://dev-173777.okta.com' />} />
          <Route exact={true} path="/">
            {localStorage.getItem("okta-token-storage") ? (
            <Redirect to={{ pathname: `/admin/dashboard` }} />
          ) : (
            <Redirect to="/login" />
          )}
          </Route>
          <Route path={`/profile/${localStorage.getItem('fname')}/edit/password`} component={EditProfile} />
          <Route path={`/profile/${localStorage.getItem('fname')}/edit/email`} component={EditProfile} />
          <Route path="/student/dashboard" component={UserDash} />
          <Route exact path="/manager/dashboard" component={AdminDash} />
          <Route exact path="/admin/dashboard" component={AdminDash} />
          <Route path={`/admin/${localStorage.getItem('fname')}/edit/promotions`} component={UserPromotions} />
          <Route path="/admin/dashboard/:id" component={ProjectMore} />
          {/* OKTA Signin Widget route */}
          <Route path='/implicit/callback' component={ImplicitCallback} />
          <Route component={Bad} />
        </Switch>
      </Security>
    </Layout>
  );
}

export default App;
