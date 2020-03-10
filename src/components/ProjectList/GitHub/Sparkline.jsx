import React, { useState } from 'react';
import { useQuery } from 'urql';
import { SPARKLINE as query } from '../Queries/projectQueries';

import { Sparkyline } from './Sparkline.module.scss'

import SparkyChart from './Charts/SparkyChart';
import { useSparkyHook } from '../GitHub/Charts/hooks/SparkyHook';

const initialValue = {
    additions: [],
    deletions: [],
    changedFiles: [] 
};

const Sparkline = ({ name }) => {
  
  const [state] = useQuery({ query, variables:{name: name} });

  const { data } = state; 

  const additions = [];
  const deletions = [];
  const changedFiles = [];

    


 
  if (state.fetching){
      return <p>Loading Sparkline...</p>
  } else{
    
    // console.log(data.length, data)

    if (data.SparkyBoy.length){
    
        data.SparkyBoy.map(commit => {
            return (

                additions.push(commit.additions),
                deletions.push(commit.deletions),
                changedFiles.push(commit.changedFiles)
            )
        })
    }
  return (
    <div className={Sparkyline}>
      <SparkyChart additions={additions} deletions={deletions} changedFiles={changedFiles}/>
    </div>
  );
  }
};

export default Sparkline;