import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useQuery } from 'urql';
import { HEADER_QUERY as query } from '../Queries';

import {
  header,
  headerContainer,
  allProducts,
  projectName,
  statusContainer,
  projectNav,
  activeLink,
} from './Header.module.scss';

const Header = ({ projectId }) => {
  const [state] = useQuery({ query, variables: { id: projectId } });
  const { data, fetching } = state;
  
  if (fetching) return <h1>Loading</h1>;
  if (data && data.project) {
    const {
      project: { name },
    } = data;

    return (
      <header className={header}>
        <div className={headerContainer}>
          <div>
            <div>
              <Link to="/" className={allProducts}>
                <span role="img" aria-label="back-arrow">
                  &#x21FD;{' '}
                </span>
                All Projects
              </Link>
            </div>

            <div>
              <h1 className={projectName}>{name}</h1>
            </div>
          </div>

          <div className={statusContainer}>
          </div>
        </div>

        <nav className={projectNav}>
          <NavLink activeClassName={activeLink} to={`${projectId}`}>
            Overview
          </NavLink>
        </nav>
      </header>
    );
  }
  return <h1>No project found</h1>;
};

export default Header;
