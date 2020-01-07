import React from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import { getToken } from '../../../services/tempServices';

import styles from '../../../styles/projects.module.scss';

const FEED_QUERY = gql`
  {
    info {
      project
      team_lead
      section_lead
      status
      update
    }
  }
`;

const Projects = () => {
  const [state] = useQuery({ query: FEED_QUERY });
  const { data, error, fetching } = state;

  if (fetching) return <div>fetching</div>;

  return (
    <table>
      <tr>
        <th>Project Name</th>
        <th>Section Lead</th>
        <th>Team Lead</th>
        <th className={styles.rtd}>Last Updated</th>
        <th className={styles.rtc}>Status</th>
      </tr>
      {data.info.map(project => (
        <tr>
          <td className={styles.title}>
            <Link to="/" className={styles.title}>
              {project.project}
            </Link>
          </td>
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
