import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Layout from "./components/layout/Layout";
import "./styles/index.scss";
import "semantic-ui-css/semantic.min.css";

import Registration from "./components/auth/Registration.js";
import Home from "./components/test/Home";
import Login from "./components/auth/Login";
import Dashboard from "./components/test/Dashboard";
import Contact from "./components/test/Contact";
import About from "./components/test/About";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/register" component={Registration} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/contact" component={Contact} />
        <PrivateRoute path="/about" component={About} />
      </Switch>
    </Layout>
  );
}

export default App;
