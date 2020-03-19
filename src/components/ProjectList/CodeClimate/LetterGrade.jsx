import React from 'react';
import { Repo, Grade, GradeCont,Tip } from './letterGrade.module.scss';
import getMessage from '../../../utils/getMessageForCCGrade'
import Sparkline from '../GitHub/Sparkline.jsx'

const LetterGrade = ({ currentIndex, setCurrentIndex, repo, color, projectName, ghrepos, repoIndex, handleSparkClick }) => {
  return (
    <>
      <div className={Repo}>
        {repo.name}:{' '}
        <a  href={repo.link} target="_blank" rel="noopener noreferrer" className={GradeCont}
          style={{
            backgroundColor: color,
            padding: '0px 5px',
            textAlign: 'center',
            borderRadius: '5px'
          }}
        >
          <span href={repo.link} className={Grade} style={{ color: 'white' }}>
            {' '}
            {repo.grade}
          </span>
          <span className={Tip}>
            {getMessage(repo.grade)}
          </span>
        </a>
        <div>
          <Sparkline
            ghrepos={ghrepos}
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
