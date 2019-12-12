import React, { useEffect } from "react";
import {
  Switch,
  Route,
  useLocation,
  Redirect,
  useHistory
} from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

// components
import Layout from "./components/layout/Layout";
// import Registration from "./components/auth/Registration.js";
import Login from "./components/auth/Login";
import ProjectMore from "./components/dashboard/admin-dashboard/ProjectMore";
import Bad from "./components/layout/Bad";
import AdminDash from "./components/dashboard/admin-dashboard/DashboardHome";
import UserDash from "./components/dashboard/user-dashboard/DashboardHome";

//utils
// import AdminPrivateRoute from "./utils/AdminPrivateRoute";
// import PrivateRoute from "./utils/PrivateRoute";
// import StudentPrivateRoute from "./utils/StudentPrivateRoute";
import embedAnalytics from "./utils/embedAnalytics";

//styles
import "./styles/index.scss";

function App(props) {
  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    embedAnalytics();
  }, [location]);

  function onAuthRequired({ history }) {
    history.push("/");
  }

  return (
    <Layout>
      <Security
        issuer="https://dev-173777.okta.com/oauth2/default"
        //AWS
        clientId="0oa25nnb3plbDjQZJ357"
        //LocaL
        // clientId="0oa23ze1sdfwtoKNQ357"
        redirectUri={window.location.origin + "/implicit/callback"}
        onAuthRequired={onAuthRequired}
        pkce={true}
      >
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
          <Route
            path="/login"
            render={() => <Login baseUrl="https://dev-173777.okta.com" />}
          />
          <Route exact={true} path="/">
            {localStorage.getItem("okta-token-storage") ? (
              <Redirect push to="/admin/dashboard" />
            ) : (
              (console.log("FROM LINE 78", Date.now()),
              (<Redirect push to="/login" />))
            )}
          </Route>
          <Route path="/student/dashboard" component={UserDash} />
          <Route exact path="/manager/dashboard" component={AdminDash} />
          <Route exact path="/admin/dashboard" component={AdminDash} />
          <Route path="/admin/dashboard/:id" component={ProjectMore} />
          {/* OKTA Signin Widget route */}
          <Route path="/implicit/callback" component={ImplicitCallback} />
          <Route component={Bad} />
        </Switch>
      </Security>
    </Layout>
  );
}

export default App;
