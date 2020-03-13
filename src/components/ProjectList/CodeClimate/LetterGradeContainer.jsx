import React from 'react';
import { Maintainability } from './letterGrade.module.scss';
import LetterGrade from './LetterGrade';
import getColor from '../../../utils/getColorFromCCGrade';

const LetterGradeContainer = props => {
  if (!props.ccrepos || !props.ccrepos[0].grade) return null;

  return (
    <>
      <div className={Maintainability}>
        {props.ccrepos.map(repo => {
          const color = getColor(repo.grade);
          return <LetterGrade key={repo.id} color={color} repo={repo} />;
        })}
      </div>
    </>
  );
};

export default LetterGradeContainer;
