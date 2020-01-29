import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import {
  header,
  headerContainer,
  allProducts,
  projectName,
  statusContainer,
  projectNav,
  activeLink,
} from './Header.module.scss';

const Header = ({ project: { name, status }, projectId }) => {
  // Sanitize string inputs to remove Product prefix
  const cleanName = str => {
    const match = str.match(/Labs \d{1,3} -(.+)/);
    return match[1];
  };

  return (
    <header className={header}>
      <div className={headerContainer}>
        <div>
          <div>
            <Link to="/" className={allProducts}>
              <span role="img" aria-label="back-arrow">
                &#x21FD;
              </span>
                All Projects
            </Link>
          </div>

          <div>
            <h1 className={projectName}>{cleanName(name)}</h1>
          </div>
        </div>

        <div className={statusContainer}>
          {status
            ? ''
            : [
                <span role="img" aria-label="fire">
                  🔥
                </span>,
                <p>
                  {' '}
                  Falling <br /> behind!{' '}
                </p>,
              ]}
        </div>
      </div>

      <nav className={projectNav}>
        <NavLink activeClassName={activeLink} to={`${projectId}`}>
          {' '}
          Overview{' '}
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
