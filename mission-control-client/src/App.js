import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect } from "react-router-dom";
import { Security, ImplicitCallback } from "@okta/okta-react";
// components
import Layout from "./components/layout/Layout";
// Context
import ProductContextProvider from './context/ProductContextProvider';

// import Registration from "./components/auth/Registration.js";
import Login from "./components/auth/Login";
import ProjectMore from "./components/dashboard/admin-dashboard/ProjectMore";
import Bad from "./components/layout/Bad";
import AdminDash from "./components/dashboard/admin-dashboard/DashboardHome";

//utils
import embedAnalytics from "./utils/embedAnalytics";

//styles
import "./styles/index.scss";

function App() {

  const location = useLocation();

  useEffect(() => {
    embedAnalytics();
  }, [location]);

  function onAuthRequired({ history }) {
    history.push("/");
  }

  return (
      <Layout>
        <Security
          issuer={`${process.env.REACT_APP_OKTA_SERVER}`}
          clientId={`${process.env.REACT_APP_OKTA_CLIENT}`}
          redirectUri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
          pkce={true}
          >
          <ProductContextProvider>
            <Switch>
              {/* OKTA will be taking over user access and control */}
              <Route
                path="/login"
                render={() => <Login baseUrl={`${process.env.REACT_APP_OKTA_URL}`} />}
              />
              <Route exact={true} path="/">
                {localStorage.getItem("okta-token-storage") ? 
                <Redirect push to="/admin/dashboard" />
              :  (
                <Redirect push to="/login" />
              )}
              </Route>
              <Route exact path="/admin/dashboard" component={AdminDash} />
                <Route path="/admin/dashboard/:id" component={ProjectMore} />
              {/* OKTA Signin Widget route */}
              <Route path="/implicit/callback" component={ImplicitCallback} />
              <Route component={Bad} />
            </Switch>
          </ProductContextProvider>
        </Security>
      </Layout>
  );
}

export default App;
