import React from 'react';
import Sidebar from './Sidebar';

import styles from '../../styles/layout.module.scss';

const Layout = ({ children, logout }) => (
  <div className={styles['main-container']}>
    <Sidebar logout={logout} />
    <div className={styles['content-container']}>{children}</div>
  </div>
);

export default Layout;
