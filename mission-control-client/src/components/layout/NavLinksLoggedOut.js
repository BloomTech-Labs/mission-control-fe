import React from "react";
import { NavLink } from "react-router-dom";

const NavLinksLoggedOut = () => {
  return (
    <>
      <NavLink data-testid="signin" activeClassName="selected" className="nav-link" to="/login">
        Sign In
      </NavLink>
      <NavLink
        data-testid="signup"
        activeClassName="selected"
        className="nav-link signup"
        to="/register"
      >
        Sign Up
      </NavLink>
    </>
  );
};

export default NavLinksLoggedOut;
