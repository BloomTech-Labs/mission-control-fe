import React from 'react';
import { Maintainability } from './letterGrade.module.scss';
import LetterGrade from './LetterGrade';

const getColor = grade => {
  switch (grade) {
    case 'A':
      return 'green';
    case 'B':
      return 'greenyellow';
    case 'C':
      return 'yellow';
    case 'D':
      return 'orange';
    case 'F':
      return 'red';
    default:
      return 'black';
  }
};

const LetterGradeContainer = props => {
  return (
    <>
      <div className={Maintainability}>
        {props.ccrepos.map(repo => {
          const color = getColor(repo.grade);
          return <LetterGrade color={color} repo={repo} />;
        })}
      </div>
    </>
  );
};

export default LetterGradeContainer;
