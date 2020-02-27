import React from 'react';
import { Maintainability, Repo, Grade } from './letterGrade.module.scss';

const LetterGrade = props => {

  const getColor = (grade) => {
    switch(grade) {
      case "A": return "green"
      case "B": return "greenyellow"
      case "C": return "yellow"
      case "D": return "orange"
      case "F": return "red"
      default : return "black"
    }
  }
  return (
    <>
      <div className={Maintainability}>
        {props.ccrepos.map(repo => {
          const color = getColor(repo.grade)
          return (
            <p className={Repo}>
              {repo.name}:{' '}
              <span style={{backgroundColor: color, padding: '0px 5px', textAlign: 'center'} }>
                <a className={Grade} style={{ color: 'white' }}>
                  {' '}
                  {repo.grade}
                </a>
              </span>
            </p>
          );
        })}
      </div>
    </>
  );
};

export default LetterGrade;
