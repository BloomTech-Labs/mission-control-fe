import React from 'react';
import { Link } from 'react-router-dom';
import mapTime from '../../mappers/mapTime';

import fire from '../../images/fire.png';
import styles from './projectList.module.scss';

// Sanitize string inputs to remove Product prefix
const cleanName = str => {
  const match = str.match(/Labs \d{1,3} -(.+)/);
  return match[1];
};

const ProjectRow = ({ project }) => (
  <tr>
    <td className={styles.title}>
      <Link to={`/project/${project.id}`} className={styles.title}>
        {cleanName(project.name)}
      </Link>
    </td>
    <td>{project.sectionLead.name}</td>
    <td className={styles.pl}>{project.teamLead.name}</td>
    <td className={styles.rtd}>{mapTime(project.updatedAt)} ago</td>
    <td className={styles.rtc}>
      {project.status ? (
        ''
      ) : (
        <img src={fire} className={styles.rtci} alt="fire-warning" />
      )}
    </td>
  </tr>
);

export default ProjectRow;
