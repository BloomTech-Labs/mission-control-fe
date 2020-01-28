import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/projectHeader.module.scss';
import Fire from '../../images/fire.png';

export default ( {project, product, status} ) => {

  // Sanitize string inputs to remove Product prefix
  const cleanName = str => {
    const match = str.match(/Labs \d{1,3} -(.+)/);
    return match[1];
  };

  return (
    <>
      <div className={styles['project-header-container']}>
        <div className={styles['project-back-container']}>
          <Link to="/" className={styles['project-back-link']}>
            All Projects
          </Link>
        </div>
        <div className={styles['project-summary-container']}>
          <div className={styles['project-title-container']}>
            <h1 className={styles['project-title']}>
              {cleanName(project.name)}
            </h1>
          </div>
          <div className={styles['project-status-container']}>

            { project.status ? (
              ''
            ) : (
              <>
                <img src={Fire} alt="project-fire" className={styles['project-fire']} />
                <p className={styles['project-status']}> Falling behind! </p>
              </>
            )}
            
          </div>
        </div>
      </div>
      <div className={styles['project-tabs-container']}>
        <p className={styles['project-overview-tab']}> Overview </p>
      </div>
      <hr className={styles['project-content-divider']} />
    </>
  );
};
