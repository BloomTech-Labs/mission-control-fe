import React from 'react';
import { useQuery } from 'urql';
import { PULSE as query } from '../Queries/pulseQuery';
import PulseChart from './Charts/PulseChart';

const RePulse = ({ owner, name }) => {
    
    const [state] = useQuery({ query, variables: {
        owner: owner,
        name: name
    }});

    const { data } = state;

    if (state.fetching){
        return <p>Detecting Pulse...</p>
    } else if (state.error) {
        return <p>No pulse detected __________________ : {state.error}</p>
    } else if (data.GithubPulse) {
        return (
            <div>
                <PulseChart data={data.GithubPulse} />
            </div>
        );
    } else {
        return (
            <p>Pulse not detected. Deceased.</p>
        )
    }
};

export default RePulse;