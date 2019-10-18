import React from "react";
import NotificationsNoneSharpIcon from '@material-ui/icons/NotificationsNoneSharp';
import AvatarMenu from './Avatar';

const NavLinksLoggedIn = () => {

  const name = localStorage.getItem("fname");

  return (
    <>
      <NotificationsNoneSharpIcon className="bell" />
      <p className="logged-in logged-in-link">{`Welcome back, ${name}`}</p>
      <AvatarMenu />
    </>
  );
};

export default NavLinksLoggedIn;
