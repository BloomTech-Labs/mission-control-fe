import React from 'react';

import styles from '../../styles/dashboard.module.scss';

import Projects from './Projects';
import Sidebar from '../Layout/Sidebar';

const Dashboard = ({ logout, getToken }) => {
  return (
    <div className={styles['dashboard-parent-container']}>
      <span className={styles['dashboard-sidebar']}>
        <Sidebar />
      </span>
      <button type="submit" onClick={logout}>
        Logout
      </button>
      <span className={styles['dashboard-project-list']}>
        <Projects />
      </span>
    </div>
  );
};

export default Dashboard;
