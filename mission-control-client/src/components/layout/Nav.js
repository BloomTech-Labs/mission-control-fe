import React from "react";
import decrypt from "../../utils/decrypt";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

const Nav = () => {
  return (
    <div className="nav-container">
      <div className="nav-logo">
        <Link
          to={
            localStorage.getItem("token")
              ? `/${localStorage.getItem("role")}/dashboard`
              : "/login"
          }
          className="nav-head"
        >
          MISSION CONTROL
        </Link>
      </div>
      <div className="nav-links"><NavLinks /></div>
    </div>
  );
};

export default Nav;
