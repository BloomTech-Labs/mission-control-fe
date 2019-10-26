import React, { useEffect } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/layout/Layout";
import "./styles/index.scss";
import Registration from "./components/auth/Registration.js";
import Login from './components/auth/Login';
import Home from "./components/test/Home";
import DashboardHome from "./components/dashboard/admin-dashboard/DashboardHome";
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
        <PrivateRoute path="/dashboard/:id" component={DashboardHome} />
      </Switch>
    </Layout>
  );
}

export default App;