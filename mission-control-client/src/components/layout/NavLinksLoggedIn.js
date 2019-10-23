import React from "react";
import AvatarMenu from './Avatar';
import { ReactComponent as Bell } from '../../assets/bell.svg';

const NavLinksLoggedIn = () => {

  const name = localStorage.getItem("fname");

  return (
    <>
      <p className="logged-in logged-in-link">{`Welcome back, ${name}`}</p>
      <AvatarMenu />
    </>
  );
};

export default NavLinksLoggedIn;
