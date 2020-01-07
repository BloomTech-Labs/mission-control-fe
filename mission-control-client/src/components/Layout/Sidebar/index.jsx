import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  sidebar,
  orgIcon,
  links,
  link,
  linka,
} from '../../../styles/sidebar.module.scss';

const Sidebar = props => {
  return (
    <div className={sidebar}>
      <div className={orgIcon}></div>
      <div className={links}>
        <NavLink to="/" className={link} activeClassName={linka}>
          Projects
        </NavLink>
        <NavLink to="/students" className={link} activeClassName={linka}>
          Students
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
