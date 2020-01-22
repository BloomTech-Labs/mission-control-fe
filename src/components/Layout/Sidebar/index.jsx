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
  logoutButton,
  topLinks,
  bottomLinks
} from '../../../styles/sidebar.module.scss';

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
          <NavLink to="/students" className={link} activeClassName={current}>
            Students
          </NavLink>
        </div>
        <div className={bottomLinks}>
          <button className={logoutButton}>
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
