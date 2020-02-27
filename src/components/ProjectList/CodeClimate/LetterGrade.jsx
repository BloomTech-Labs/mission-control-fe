import React from 'react';
import { Maintainability, Repo, Grade } from './letterGrade.module.scss';

const LetterGrade = props => {
  console.log(props.ccrepos);
  return (
    <React.Fragment>
      <div className={Maintainability}>
        {props.ccrepos.map(repo => {
          let color = 'black';

          if (repo.grade === 'A') color = 'green';
          if (repo.grade === 'B') color = 'greenyellow';
          if (repo.grade === 'C') color = 'yellow';
          if (repo.grade === 'D') color = 'orange';
          if (repo.grade === 'F') color = 'red';
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
    </React.Fragment>
  );
};

export default LetterGrade;
