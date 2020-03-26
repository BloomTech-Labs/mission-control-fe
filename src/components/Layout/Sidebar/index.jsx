import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import Logo from '../../../images/logo.svg';

import {
  sidebar,
  logoContainer,
  logo,
  links,
  link,
  current,
  logoutButton,
  topLinks,
  bottomLinks,
} from './Sidebar.module.scss';

const Sidebar = ({ logout }) => {
  const location = useLocation();
  return (
    <div className={sidebar}>
      <div className={logoContainer}>
        <img src={Logo} className={logo} alt="mission-control-logo" />
      </div>
      <div className={links}>
        <div className={topLinks}>
          <NavLink
            to="/"
            className={link}
            activeClassName={location.pathname === '/' ? current : ''}
          >
            Projects
          </NavLink>
        </div>
        <div className={bottomLinks}>
          <button type="button" className={logoutButton}>
            <NavLink to="/" onClick={logout}>
              Logout
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
