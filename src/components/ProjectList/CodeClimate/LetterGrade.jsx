import React from 'react';
<<<<<<< HEAD
import { Repo, Grade, GradeCont,Tip } from './letterGrade.module.scss';
import getMessage from '../../../utils/getMessageForCCGrade'
import Sparkline from '../GitHub/Sparkline.jsx'
=======
import { Repo, Grade } from './letterGrade.module.scss';

import Sparkline from '../GitHub/Sparkline.jsx';
>>>>>>> d623720805e7b7774ef016e7fb45fb69d8edaa70

const LetterGrade = ({ repo, color }) => {
  return (
    <>
<<<<<<< HEAD
    <div className={Repo}>
      {repo.name}:{' '}
      <a  href={repo.link} className={GradeCont}
        style={{
          backgroundColor: color,
          padding: '0px 5px',
          textAlign: 'center',
          borderRadius: '5px'
        }}
      >
        <span href={repo.link} className={Grade} style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
          {' '}
          {repo.grade}
        </span>
        <span className={Tip}>
          {getMessage(repo.grade)}
        </span>
         
      </a>
      <div>
        <Sparkline name={repo.name} />
=======
      <div className={Repo}>
        {repo.name}:{' '}
        <span
          style={{
            backgroundColor: color,
            padding: '0px 5px',
            textAlign: 'center',
            borderRadius: '5px',
          }}
        >
          <a
            href={repo.link}
            className={Grade}
            style={{ color: 'white' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            {repo.grade}
          </a>
        </span>
        <div>
          <Sparkline name={repo.name} />
        </div>
>>>>>>> d623720805e7b7774ef016e7fb45fb69d8edaa70
      </div>
    </>
  );
};

export default LetterGrade;
