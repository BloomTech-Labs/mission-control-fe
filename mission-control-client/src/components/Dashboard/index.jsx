import React from 'react';

import Projects from './Projects';

const Dashboard = ({ logout, getToken }) => {
  return [
    <button type="submit" onClick={logout}>
      Logout
    </button>,
    <Projects />,
  ];
};

export default Dashboard;
