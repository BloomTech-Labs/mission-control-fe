import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useQuery } from 'urql';
import { HEADER_QUERY as query } from '../Queries';

import {
  header,
  headerContainer,
  allTags,
  tagName,
  tagContainer,
  tagNav,
  activeLink,
} from './Header.module.scss';

const Header = ({ tagId }) => {
  const [state] = useQuery({ query, variables: { id: tagId } });
  const { data, fetching } = state;

  if (fetching) return <h1>Loading</h1>;
  if (data && data.tag) {
    const {
      tag: { name },
    } = data;

    return (
      <header className={header}>
        <div className={headerContainer}>
          <div>
            <div>
              <Link to="/tag" className={allTags}>
                <span role="img" aria-label="back-arrow">
                  &#x21FD;{' '}
                </span>
                All Tags
              </Link>
            </div>

            <div>
              <h1 className={tagName}>{name}</h1>
            </div>
          </div>

          <div className={tagContainer}></div>
        </div>

        <nav className={tagNav}>
          <NavLink activeClassName={activeLink} to={`${tagId}`}>
            Overview
          </NavLink>
        </nav>
      </header>
    );
  }
  return <h1>No Tags found</h1>;
};

export default Header;
