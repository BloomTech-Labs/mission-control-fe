import React from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import styles from '../../styles/projects.module.scss';

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

const ProjectListView = () => {
  const [state] = useQuery({ query: FEED_QUERY });
  const { fetching } = state;
  const data = [
    {
      project: 'Resume Q',
      section_lead: 'Kelly Rippa',
      team_lead: 'Dakotah Huey',
      update: '01/26/2020',
      status: 'Green',
    },
  ];

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
      {data.map(project => (
        <tr>
          <td className={styles.title}>
            <Link to="/project" className={styles.title}>
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

export default ProjectListView;
