import React from 'react';
import { useQuery } from 'urql';
import { SPARKLINE as query } from '../Queries/sparklineQuery';
import { Sparkyline } from './Sparkline.module.scss';
import SparkyChart from './Charts/SparkyChart';
import { ChartDatafier } from './Charts/ChartDatafier';

const Sparkline = ({ name }) => {
  
    const [state] = useQuery({ query, variables:{
        owner: 'Lambda-School-Labs',
        name: name} });
    const { data } = state; 

    // const additions = [];
    // const deletions = [];
    // const changedFiles = [];

    if (state.fetching){
        return <p>Loading Sparkline...</p>
    } else if (state.error) {
        return <p>Error: {state.error}</p>
    } else if (data.SparkyBoy.length) {
        return (
            <div className={Sparkyline}>
                <SparkyChart data={data} maxValue={1000}/>
            </div>
        );
    } else {
        return (
            <p>Sparkline unavailable</p>
        )
    }
};

export default Sparkline;