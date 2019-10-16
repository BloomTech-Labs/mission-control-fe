import React from "react";
import { Container, Header } from "semantic-ui-react";

const Nav = () => {
  return (
    <Container className="nav-container" fluid>
      <div className="nav-logo">
        <Header as="h1">Mission Control</Header>
      </div>
      <div className="nav-links">
        <p>Log In</p>
        <p>Register</p>
      </div>
    </Container>
  );
};

export default Nav;
