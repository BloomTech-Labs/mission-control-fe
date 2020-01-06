import React from 'react';
import dummyData from '../data';

import styles from '../../../styles/projects.module.scss';

const Projects = () => {
  return (
    <table>
      <tr>
        <th>Project Name</th>
        <th>Section Lead</th>
        <th>Team Lead</th>
        <th className={styles.rtd}>Last Updated</th>
        <th className={styles.rtc}>Status</th>
      </tr>
      {dummyData.map(project => (
        <tr>
          <td className={styles.title}>{project.project}</td>
          <td>{project.section_lead}</td>
          <td>{project.team_lead}</td>
          <td className={styles.rtd}>{project.update}</td>
          <td className={styles.rtc}>{project.status}</td>
        </tr>
      ))}
    </table>
  );
};

export default Projects;
