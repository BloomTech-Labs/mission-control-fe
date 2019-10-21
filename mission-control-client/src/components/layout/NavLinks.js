import React, { useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
import NavLinksLoggedIn from './NavLinksLoggedIn';
import NavLinksLoggedOut from './NavLinksLoggedOut';

const NavLinks = () => {

  const location = useLocation();

  const [token, setToken] = useState('');

  useEffect(() => {
    setToken(localStorage.getItem('token'));
  }, [location])

  return (
    <>
    {token ? <NavLinksLoggedIn /> : <NavLinksLoggedOut />}
    </>
  );
};

export default NavLinks;
