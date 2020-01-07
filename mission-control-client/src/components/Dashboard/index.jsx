import React from 'react';

import Projects from './Projects';
import Sidebar from '../Layout/Sidebar';

const Dashboard = ({ logout, getToken }) => {
  return (
    <div>
      <Sidebar />
      <Projects />
    </div>
  );
};

export default Dashboard;
