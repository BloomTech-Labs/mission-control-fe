import React, { useState } from 'react';
// import { useQuery } from 'urql';
// import { SPARKLINE as query } from '../Queries/sparklineQuery';
import { Sparkyline } from './Sparkline.module.scss';
import SparkyChart from './Charts/SparkyChart';
import ChartDialog from '../GitHub/Charts/ChartDialog'

const Sparkline = ({ name, ghrepos, repoIndex, data, state } ) => {
  
    if (!Array.isArray(ghrepos) || !ghrepos.length) return null;

    if (state.fetching) {
        return <p>Loading Sparkline...</p>
    } else if (state.error) {
        return <p>Error: Sparkline unavailable.</p>
    } else if (data.SparkyBoy.length) {
        return (
            <>
                <SparkyChart data={data} tooltips={{ enabled: false }} maxValue={1000} />
            </>
        );
    } else {
        return (
            <p>Sparkline unavailable</p>
        )
    }
};

export default Sparkline;
