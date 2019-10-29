import React, { useEffect } from "react";
import { Switch, Route, useLocation, Redirect, useHistory } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import SPrivateRoute from "./utils/S_PrivateRoute";
import APrivateRoute from "./utils/A_PrivateRoute";
import Layout from "./components/layout/Layout";
import "./styles/index.scss";
import Registration from "./components/auth/Registration.js";
import Login from "./components/auth/Login";
import Bad from "./components/layout/Bad";
import AdminDash from "./components/dashboard/admin-dashboard/DashboardHome";
import UserDash from "./components/dashboard/user-dashboard/DashboardHome";
import embedAnalytics from "./utils/embedAnalytics";
import decrypt from './utils/decrypt';

function App() {

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    embedAnalytics();
  }, [location]);

  console.log(decrypt())

  return (
    <Layout>
      <Switch>
      {(!localStorage.getItem('role') || !["admin", "manager", "student"].includes(decrypt())) && (localStorage.removeItem('token')) && (history.push('/login'))}
        <PrivateRoute path="/" exact>
          {localStorage.getItem("token") ? (
            <Redirect
              to={{ pathname: `${decrypt()}/dashboard` }}
            />
          ) : (
            <Redirect to="/login" />
          )}
        </PrivateRoute>
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
        <SPrivateRoute path='/student/dashboard' component={UserDash}/>
        <APrivateRoute path='/manager/dashboard' component={AdminDash}/>
        <APrivateRoute path='/admin/dashboard' component={AdminDash}/>
        <Route component={Bad} />
      </Switch>
    </Layout>
  );
}

export default App;
