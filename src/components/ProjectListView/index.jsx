import React, { useEffect, useCallback } from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import mapTime from '../../mappers/mapTime';

import styles from '../../styles/projects.module.scss';

const PROJECT_LIST_VIEW = gql`
  query {
    me {
      projects {
        name
        status
        updatedAt
        sectionLead {
          name
        }
        teamLead {
          name
        }
      }
    }
  }
`;

const ProjectListView = ({ logout }) => {
  const [state] = useQuery({ query: PROJECT_LIST_VIEW });
  const { data } = state;

  if (data && data.me.projects.length) {
    return (
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
        {data.me.projects.map(project => (
          <tbody>
            <tr>
              <td key={project.id} className={styles.title}>
                <Link to="/" className={styles.title}>
                  {project.name}
                </Link>
              </td>
              <td>{project.sectionLead.name}</td>
              <td>{project.teamLead.name}</td>
              <td className={styles.rtd}>{mapTime(project.updatedAt)} ago</td>
              {/* <td className={styles.rtd}>Yesterday</td> */}
              <td className={styles.rtc}>{project.status ? 'OK' : 'Fire'}</td>
            </tr>
          </tbody>
        ))}
      </table>
    );
  } else {
    return <h1>loading</h1>;
  }
};

export default ProjectListView;
