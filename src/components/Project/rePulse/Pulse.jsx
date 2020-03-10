import React from 'react';
import { useQuery } from 'urql';
import { PULSE as query } from '../Queries/pulseQuery';
import PulseChart from './Charts/PulseChart';

const rePulse = ({ owner, name }) => {
    
    const [state] = useQuery({ query, variables: {
        owner: owner,
        name: name
    }});

    const { data } = state;

    if (state.fetching){
        return <p>Detecting Pulse...</p>
    } else if (state.error) {
        return <p>No pulse detected __________________ : {state.error}</p>
    } else if (data.GithubPulse.length) {
        return (
            <div className={PulseBoy}>
                <PulseChart data={data} />
            </div>
        );
    } else {
        return (
            <p>Pulse not detected. Deceased.</p>
        )
    }
};

export default rePulse;