import React, { useEffect, useCallback } from 'react';
import { useQuery } from 'urql';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';
import mapTime from '../../mappers/mapTime';

import styles from '../../styles/projects.module.scss';

const PROJECT_LIST_VIEW = gql`
  query {
    products {
      id
      name
      projects {
        id
        name
        status
        updatedAt
        sectionLead {
          id
          name
          role
        }
        teamLead {
          id
          name
          role
        }
      }
    }
  }
`;

const ProjectListView = ({ logout }) => {
  const [state] = useQuery({ query: PROJECT_LIST_VIEW });
  const { data, fetching } = state;

  return (
    <div>
      <button onClick={logout}>Logout</button>
      {!fetching ? (
        <table>
          <thead>
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
          </thead>
          {data.products.map(product => (
            <tbody>
              <tr>
                <td key={product.id} className={styles.title}>
                  <Link to="/" className={styles.title}>
                    {product.name}
                  </Link>
                </td>
                <td>{product.projects[0].sectionLead.name}</td>
                <td>{product.projects[0].teamLead.name}</td>
                <td className={styles.rtd}>
                  {`${mapTime(product.projects[0].updatedAt)}  ago`}
                </td>
                <td className={styles.rtc}>
                  {product.projects[0].status ? 'OK' : 'Fire'}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      ) : (
        <div>fetching</div>
      )}
    </div>
  );
};

export default ProjectListView;
