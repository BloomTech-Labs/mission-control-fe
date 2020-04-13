import React from 'react';
import getColor from '../../../utils/getColorFromCCGrade';

import {
  gradeCont,
  gradeBox,
  scsssux,
  PulseBoy,
  Tip,
} from './Grade.module.scss';

import RePulse from '../rePulse/Pulse';
import getMessage from '../../../utils/getMessageForCCGrade';

import DeleteRepo from './DeleteRepo';

const Grade = ({ githubRepos, executeQuery }) => {
  if (!githubRepos || !githubRepos.length) return null;

  console.log('GRADE DATA: %O', githubRepos);
  return (
    <div className={gradeCont}>
      {githubRepos.map(githubRepo => {
        const color = getColor(githubRepo.grade.value);
        return (
          <div key={githubRepo.name} className={scsssux}>
            <DeleteRepo
              id={githubRepo.id}
              name={githubRepo.name}
              executeQuery={executeQuery}
            />
            <h3>
              {githubRepo.name}:{' '}
              <a
                href={githubRepo.url}
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
                {githubRepo.grade.value}
                <span className={Tip}>
                  {getMessage(githubRepo.grade.value)}
                </span>
              </a>
            </h3>
            <a
              href={githubRepo.grade.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Analysis
            </a>
            <div className={PulseBoy}>
              <RePulse owner={githubRepo.owner} name={githubRepo.name} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Grade;
