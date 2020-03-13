import React from 'react';
import { Repo, Grade } from './letterGrade.module.scss';

import Sparkline from '../GitHub/Sparkline.jsx'

const LetterGrade = ({ repo, color }) => {
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
        <a href={repo.link} className={Grade} style={{ color: 'white' }} target="_blank">
          {' '}
          {repo.grade}
        </a>
      </span>
      <div>
      <Sparkline name={repo.name} />
      </div>
    </div>
  </>
  );
};

export default LetterGrade;
