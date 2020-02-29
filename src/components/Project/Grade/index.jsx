import React from 'react';
// import { useQuery } from 'urql';

import {
  gradeCont,
  gradeBox,
  scsssux
} from './Grade.module.scss';

const Grade = (props) => {

    return (
      <>
        <div className={gradeCont}>
          {props.ccrepos.map(repo => {
            let color = 'white';

            if (repo.grade === 'A') color = 'green';
            if (repo.grade === 'B') color = 'greenyellow';
            if (repo.grade === 'C') color = 'yellow';
            if (repo.grade === 'D') color = 'orange';
            if (repo.grade === 'F') color = 'red';

            return (
              <div className={scsssux}>
              <h3>
                {repo.name}: {' '}
                <a className={gradeBox} style={{backgroundColor: color, padding: '0px 6px', borderRadius: '3px'}}>
                 {' '}
                 {repo.grade} 
                </a>
              </h3>
              <a href={`https://codeclimate.com/github/Lambda-School-Labs/${repo.name}`}>Go to Analysis</a>
              </div>
            )
          })}
        </div>
      </>
    ) 
};

export default Grade;