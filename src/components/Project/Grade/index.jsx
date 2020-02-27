import React from 'react';
// import { useQuery } from 'urql';

import {

} from './Grade.module.scss';

const Grade = (props) => {

    return (
      <>
        <div>
          {props.ccrepo.map(repo => (
            <h2>{repo.name} - {repo.grade}</h2>
          ))}
        </div>
        </>
    ) 
};

export default Grade;