import React from 'react';
import Sidebar from './Sidebar';

import {
  mainContainer, 
  contentContainer
} from './Layout.module.scss';

const Layout = ({ children, logout }) => (
  <div className={mainContainer}>
    <Sidebar logout={logout} />
    <div className={contentContainer}>{children}</div>
  </div>
);

export default Layout;
