import React from 'react';
import getColor from '../../../utils/getColorFromCCGrade';

import { gradeCont, gradeBox, scsssux, PulseBoy } from './Grade.module.scss';

import RePulse from '../rePulse/Pulse';

const Grade = ({ ghrepos }) => {
  if (!ghrepos || !ghrepos.length) return null;

  return (
    <div className={gradeCont}>
      {ghrepos.map(repo => {
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
                target="_blank"
                rel="noopener noreferrer"
              >
                {' '}
                {repo.grade}
              </a>
            </h3>
            <a href={repo.link} target="_blank" rel="noopener noreferrer">
              Go to Analysis
            </a>
            <div className={PulseBoy}>
              <RePulse owner="Lambda-School-Labs" name={repo.name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Grade;
