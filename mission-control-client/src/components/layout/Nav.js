import React from "react";
import { useHistory, Link } from 'react-router-dom';
import { Container, Header } from "semantic-ui-react";

const Nav = () => {
  let history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    history.push('/login');
  }

  return (
    <Container className="nav-container" fluid>
      <div className="nav-logo">
        <Header as="h1">Mission Control</Header>
      </div>
      <div className="nav-links">
        {localStorage.getItem("token") ? <p className="nav-link logout" onClick={logout}>Logout</p> : <Link className="nav-link" to="/login">Login</Link>}
        {!localStorage.getItem("token") && <Link className="nav-link register" to="/register">Register</Link>}
      </div>
    </Container>
  );
};

export default Nav;
