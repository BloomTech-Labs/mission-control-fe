import React from 'react';
import { Link } from 'react-router-dom';

import styles from '../../styles/projectHeader.module.scss';
import Fire from '../../images/fire.png';


export default () => {
  return (
    <>
        <div className={styles['project-header-container']}>
          <div className={styles['project-back-container']}>
            <Link to='/' className={styles['project-back-link']}> All Projects </Link>
          </div>
          <div className={styles['project-summary-container']}>
            <div className={styles['project-title-container']}>
                <h1 className={styles['project-title']}>
                    {/* Todo: Project name needs to be dynamic */}
                    Project: Resume Q
                </h1>
                {/* Todo: Cohort name needs to be dynamic */}
                <p className={styles['project-cohort']}> Labs 19 </p>
            </div>
            <div className={styles['project-status-container']}>
                {/* Todo: Project status needs to be dynamic */}
                <img src={Fire} alt='project-fire-image' className={styles['project-fire']} />
                <p className={styles['project-status']}> Falling behind! </p> 
            </div>
          </div>
        </div>
        <div className={styles['project-tabs-container']}>
            <p className={styles['project-overview-tab']}> Overview </p>
            <p className={styles['project-dynamics-tab']}> Team Dynamics </p>
        </div>
        <hr className={styles['project-content-divider']} />
    </>
  );
};
