import React from 'react';
import { Repo, Grade } from './letterGrade.module.scss';

import Sparkline from '../GitHub/Sparkline.jsx'
import { getThemeProps } from '@material-ui/styles';

const LetterGrade = ({ currentIndex, setCurrentIndex, repo, color, projectName, ccrepos, repoIndex, handleSparkClick }) => {
  return (
    <>
      <div className={Repo}>
        {repo.name}:{' '}
        <span
          style={{
            backgroundColor: color,
            padding: '0px 5px',
            textAlign: 'center',
            borderRadius: '5px'
          }}
        >
          <a href={repo.link} className={Grade} style={{ color: 'white' }}>
            {' '}
            {repo.grade}
          </a>
        </span>
        <div>
          <Sparkline
            ccrepos={ccrepos}
            repoIndex={repoIndex}
            name={repo.name}
            projectName={projectName}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
            handleSparkClick={handleSparkClick} />
        </div>
      </div>
    </>
  );
};

export default LetterGrade;
