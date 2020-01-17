import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <div>{children}</div>
  </div>
);

export default Layout;
