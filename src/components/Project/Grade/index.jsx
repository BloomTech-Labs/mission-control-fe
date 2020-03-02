import React from 'react';
import getColor from '../../../utils/getColorFromCCGrade';

import { gradeCont, gradeBox, scsssux } from './Grade.module.scss';

const Grade = props => {
  if (!props.ccrepos || !props.ccrepos.length) return null;
  
  return (
    <div className={gradeCont}>
      {props.ccrepos.map(repo => {
        const color = getColor(repo.grade);
        return (
          <div key={repo.name} className={scsssux}>
            <h3>
              {repo.name}:{' '}
              <a
                href={repo.link}
                className={gradeBox}
                style={{
                  backgroundColor: color,
                  padding: '0px 6px',
                  borderRadius: '3px',
                }}
              >
                {' '}
                {repo.grade}
              </a>
            </h3>
            <a href={repo.link}>Go to Analysis</a>
          </div>
        );
      })}
    </div>
  );
};

export default Grade;
