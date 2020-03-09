import React from 'react';
import { useQuery } from 'urql';
import { SPARKLINE as query } from '../Queries/projectQueries';

import { Sparkyline } from './Sparkline.module.scss'

import SparkyChart from './Charts/SparkyChart'

const Sparkline = ({ name }) => {
  
  const [state] = useQuery({ query, variables:{name: name} });

  const { data } = state;

 

  if (state.fetching){
      return <p>Loading Sparkline...</p>
  } else


  return (
    <div className={Sparkyline}>
      <SparkyChart data={data.SparkyBoy}/>
    </div>
  );
};

export default Sparkline;