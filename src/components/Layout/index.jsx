import React from 'react';
import Sidebar from './Sidebar';
import Settings from '../Settings/Settings';

import { mainContainer, contentContainer } from './Layout.module.scss';

const Layout = ({ children, logout }) => (
  <div className={mainContainer}>
    <Sidebar logout={logout} />
    <Settings />
    <div className={contentContainer}>{children}</div>
  </div>
);

export default Layout;
