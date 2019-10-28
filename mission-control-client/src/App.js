import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/layout/Layout";
import "./styles/index.scss";
import Registration from "./components/auth/Registration.js";
import Login from './components/auth/Login';
import Home from "./components/test/Home";
import AdminDash from "./components/dashboard/admin-dashboard/DashboardHome";
import UserDash from './components/dashboard/user-dashboard/DashboardHome';
import embedAnalytics from './utils/embedAnalytics';

function App() {
  const location = useLocation();

  useEffect(() => {
    embedAnalytics();
  }, [location]);

  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/master/dashboard" component={AdminDash} />
        <PrivateRoute path="/user/dashboard" component={UserDash} />
      </Switch>
    </Layout>
  );
}

export default App;