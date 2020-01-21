import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../../images/logo.png';

import {
  sidebar,
  logo,
  links,
  link,
  current,
  logoContainer,
} from '../../../styles/sidebar.module.scss';

const Sidebar = ({ logout }) => {
  const location = useLocation();
  return (
    <div className={sidebar}>
      <div className={logoContainer}>
        <img src={Logo} className={logo} alt="mission-control-logo" />
      </div>
      <div className={links}>
        <NavLink
          to="/"
          className={link}
          activeClassName={location.pathname === '/' ? current : ''}
        >
          Projects
        </NavLink>
        <NavLink to="/students" className={link} activeClassName={current}>
          Students
        </NavLink>
        {/* DELETE THIS LINE BREAK */}
        <br />
        <br />
        <br />
        <br />
        <NavLink to="/" onClick={logout} className={link}>
          Logout
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
