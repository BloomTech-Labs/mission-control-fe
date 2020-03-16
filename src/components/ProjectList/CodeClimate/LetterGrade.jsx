import React from 'react';
import { Repo, Grade, GradeCont, Tip } from './letterGrade.module.scss';

import Sparkline from '../GitHub/Sparkline.jsx'

const LetterGrade = ({ repo, color }) => {
  return (
    <>
    <div className={Repo}>
      {repo.name}:{' '}
      <span className={GradeCont}
        style={{
          backgroundColor: color,
          padding: '0px 5px',
          textAlign: 'center',
          borderRadius: '5px'
        }}
      >
        <a href={repo.link} className={Grade} style={{ color: 'white' }} target="_blank" rel="noopener noreferrer">
          {' '}
          {repo.grade}
        </a>
      <span className={Tip}>
        {color === 'green' && <>Projects with Technical Debt Ratios below 5% are rated A</>}
        {color === 'greenyellow' && <>Projects with Technical Debt Ratios between 5% and 10% are rated B</>}
        {color === 'yellow' && <>Projects with Technical Debt Ratios between 10% and 20% are rated C</>}
        {color === 'orange' && <>Projects with Technical Debt Ratios between 20% and 50% are rated D</>}
        {color === 'red' && <>Projects with Technical Debt Ratios above 50% are rated F</>}
        {color === 'black' && <>Grade not available!</>}
      </span>
      </span>
      
      <div>
      <Sparkline name={repo.name} />
      </div>
    </div>
  </>
  );
};

export default LetterGrade;
