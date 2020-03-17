import React from 'react';
import { Repo, Grade, GradeCont, Tip } from './letterGrade.module.scss';

import Sparkline from '../GitHub/Sparkline.jsx'

const LetterGrade = ({ repo, color }) => {
  return (
    <>
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
          {repo.grade === 'A' && <>Projects with Technical Debt Ratios below 5% are rated A</>}
          {repo.grade === 'B' && <>Projects with Technical Debt Ratios between 5% and 10% are rated B</>}
          {repo.grade === 'C' && <>Projects with Technical Debt Ratios between 10% and 20% are rated C</>}
          {repo.grade === 'D' && <>Projects with Technical Debt Ratios between 20% and 50% are rated D</>}
          {repo.grade === 'F' && <>Projects with Technical Debt Ratios above 50% are rated F</>}
          {repo.grade === 'N' && <>This repo hasn't received a Maintainability Rating.</>}
          {repo.grade === '!' && <>This repo hasn't had a successful analysis for its default branch yet.</>}
        </span>
      </a>
      
      <div>
      <Sparkline name={repo.name} />
      </div>
    </div>
  </>
  );
};

export default LetterGrade;
