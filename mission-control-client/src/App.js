import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/layout/Layout";
import "./styles/index.scss";
import ReactGA from 'react-ga';
import Registration from "./components/auth/Registration.js";
import Login from "./components/auth/Login.js";
import Home from "./components/test/Home";
import Login from "./components/auth/Login";
import DashboardHome from "./components/dashboard/admin-dashboard/DashboardHome";

//embedded Google Analytics for web metrics in React
ReactGA.initialize('UA-111378465-2');
ReactGA.pageview(window.location.pathname + window.location.search);

function App() {
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
