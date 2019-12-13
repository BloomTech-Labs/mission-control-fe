import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import NavLinksLoggedIn from './NavLinksLoggedIn';
import NavLinksLoggedOut from './NavLinksLoggedOut';

const NavLinks = () => {

  return (
    <>
    {localStorage.getItem('okta-token-storage') ? <NavLinksLoggedIn /> : <NavLinksLoggedOut />}
    </>
  );
};

export default NavLinks;
