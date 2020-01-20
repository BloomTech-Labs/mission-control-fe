import React from 'react';
import Sidebar from './Sidebar';

const Layout = ({ children }) => (
  <div style={{ display: 'flex' }}>
    <Sidebar />
    <div style={ { width: '100%', padding: '20px 40px' } }>{children}</div>
  </div>
);

export default Layout;
