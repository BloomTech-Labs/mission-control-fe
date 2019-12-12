import React from "react";
import AvatarMenu from "./Avatar";

const NavLinksLoggedIn = () => {
  const name = localStorage.getItem("fname");

  return (
    <>
      <p
        data-testid="greeting"
        className="logged-in logged-in-link"
      >{`Welcome back, ${name ? name : "User"}`}</p>
      <AvatarMenu />
    </>
  );
};

export default NavLinksLoggedIn;
