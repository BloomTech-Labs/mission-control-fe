import React from 'react';
import { useQuery } from 'urql';
import { SPARKLINE as query } from '../Queries/projectQueries';

import { Sparkyline } from './Sparkline.module.scss'

const Sparkline = ({ name }) => {
  
  const [state] = useQuery({ query, variables:{name: name} });

  const { data } = state;

  console.log(data)

  if (state.isFetching){
      return <p>Loading Sparkline...</p>
  }

  return (
    <div className={Sparkyline}>
        Sparkline
    </div>
  );
};

export default Sparkline;