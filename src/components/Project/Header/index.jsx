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
          {status
            ? ''
            : [
                <span role="img" aria-label="fire">
                  🔥
                </span>,
                <p>
                  Falling <br /> behind!
                </p>,
              ]}
        </div>
      </div>

      <nav className={projectNav}>
        <NavLink activeClassName={activeLink} to={`${projectId}`}>
          Overview
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
