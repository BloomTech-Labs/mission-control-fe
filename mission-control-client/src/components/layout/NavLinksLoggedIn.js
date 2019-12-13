import React from "react";
import AvatarMenu from "./Avatar";

const NavLinksLoggedIn = () => {
  const userToken = JSON.parse(localStorage.getItem("okta-token-storage")) || null;
  const {name} = userToken.idToken.claims
  return (
    <>
      <p
        data-testid="greeting"
        className="logged-in logged-in-link"
      >{`Welcome back, ${name ? name : "User"}`}</p>
      <AvatarMenu name={name}/>
    </>
  );
};

export default NavLinksLoggedIn;
