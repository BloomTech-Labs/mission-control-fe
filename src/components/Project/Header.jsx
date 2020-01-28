import React from 'react';
import { Link } from 'react-router-dom';
import Fire from '../../images/fire.png';

import {
  projectHeaderContainer,
  projectBackLink,
  projectSummaryContainer,
  projectTitleContainer,
  projectTitle,
  projectStatusContainer,
  projectStatus,
  projectFire,
  
  projectTabContainer,
  projectOverviewTab,
  projectContentDivider

} from './Header.module.scss';

const Header = ({ project: { name, status } }) => {
  // Sanitize string inputs to remove Product prefix
  const cleanName = str => {
    const match = str.match(/Labs \d{1,3} -(.+)/);
    return match[1];
  };

  return (
    <>
      <div className={projectHeaderContainer}>
        <div>
          <Link to="/" className={projectBackLink}>
            All Projects
          </Link>
        </div>
        <div className={projectSummaryContainer}>
          <div className={projectTitleContainer}>
            <h1 className={projectTitle}>{cleanName(name)}</h1>
          </div>
          <div className={projectStatusContainer}>
            {status ? (
              ''
            ) : (
              <>
                <img
                  src={Fire}
                  alt="project fire"
                  className={projectFire}
                />
                <p className={projectStatus}> Falling behind! </p>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={projectTabContainer}>
        <p className={projectOverviewTab}> Overview </p>
      </div>
      <hr className={projectContentDivider} />
    </>
  );
};

export default Header;
