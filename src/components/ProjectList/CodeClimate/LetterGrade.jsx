import React from 'react';
import { Repo, Grade } from './letterGrade.module.scss';
const LetterGrade = ({ repo, color }) => {
  return (
    <p className={Repo}>
      {repo.name}:{' '}
      <span
        style={{
          backgroundColor: color,
          padding: '0px 5px',
          textAlign: 'center',
        }}
      >
        <a className={Grade} style={{ color: 'white' }}>
          {' '}
          {repo.grade}
        </a>
      </span>
    </p>
  );
};

export default LetterGrade;
