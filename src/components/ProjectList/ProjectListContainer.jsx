import React from 'react';

import styles from '../../styles/projectList.module.scss';

const ProjectContainer = ({ children }) => (
  <table>
    <thead>
      <tr>
        <th>Project Name</th>
        <th>Section Lead</th>
        <th>Team Lead</th>
        <th className={styles.rtd}>Last Updated</th>
        <th className={styles.rtc}>Status</th>
      </tr>
    </thead>
    <tbody>{children}</tbody>
  </table>
);

export default ProjectContainer;
