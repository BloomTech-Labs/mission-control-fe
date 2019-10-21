import React from "react";
import NavLinks from './NavLinks';

const Nav = () => {

  return (
    <div className="nav-container">
      <div className="nav-logo">
        <p className="nav-head">MISSION CONTROL</p>
      </div>
      <div className="nav-links">
        <NavLinks />
      </div>
    </div>
  );
};

export default Nav;
