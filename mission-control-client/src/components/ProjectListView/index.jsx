import React from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';

import styles from '../../styles/projects.module.scss';

const FEED_QUERY = gql`
  {
    info
  }
`;

const ProjectListView = ({ logout }) => {
  const [state] = useQuery({ query: FEED_QUERY });
  const { data, fetching } = state;
  console.log('data from backend', data);
  const dummyData = [
    {
      project: 'Resume Q',
      section_lead: 'Kelly Rippa',
      team_lead: 'Dakotah Huey',
      update: '01/26/2020',
      status: 'Green',
    },
  ];

  return (
    <div>
      <button onClick={logout}>Clicking Space</button>
      {!fetching ? (
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
      ) : (
        <div>fetching</div>
      )}
    </div>
  );
};

export default ProjectListView;
