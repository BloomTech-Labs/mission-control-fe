import React from 'react';
import { NavLink } from 'react-router-dom';

import {
  sidebar,
  orgIcon,
  links,
  link,
  current,
} from '../../../styles/sidebar.module.scss';

const Sidebar = props => {
  return (
    <div className={sidebar}>
      <div className={orgIcon}></div>
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
