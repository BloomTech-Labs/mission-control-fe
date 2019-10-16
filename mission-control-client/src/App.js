import React from "react";
import { Switch, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import "./styles/index.scss";
import "semantic-ui-css/semantic.min.css";

import Home from "./components/test/Home";
import Dashboard from "./components/test/Dashboard";
import Contact from "./components/test/Contact";
import About from "./components/test/About";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/contact" component={Contact} />
        <Route path="/about" component={About} />
      </Switch>
    </Layout>
  );
}

export default App;
