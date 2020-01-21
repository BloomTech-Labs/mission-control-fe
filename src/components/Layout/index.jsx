import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children, logout }) => (
  <div style={{ display: 'flex' }}>
    <Sidebar logout={logout} />
    <div style={{ width: '100%', padding: '20px 40px' }}>{children}</div>
  </div>
);

export default Layout;
