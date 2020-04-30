import React from 'react';
import Sidebar from './Sidebar';
import FilterBar from '../../components/FilterBar/FilterBar';

import { mainContainer, contentContainer } from './Layout.module.scss';

const Layout = ({ children, logout }) => (
  <div className={mainContainer}>
    {/* <FilterBar /> */}
    <Sidebar logout={logout} />
    <div className={contentContainer}>{children}</div>
  </div>
);

export default Layout;
