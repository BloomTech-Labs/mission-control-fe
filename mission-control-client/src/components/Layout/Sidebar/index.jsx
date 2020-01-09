import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../../images/logo.png';

import {
  sidebar,
  logo,
  links,
  link,
  current,
} from '../../../styles/sidebar.module.scss';

const Sidebar = props => {
  return (
    <div className={sidebar}>
      <div>
        <img src={Logo} className={logo} alt='mission-control-logo' />
      </div>
      <div className={links}>
        <NavLink to="/" className={link} activeClassName={current}>
          Projects
        </NavLink>
        <NavLink to="/students" className={link} activeClassName={current}>
          Students
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
