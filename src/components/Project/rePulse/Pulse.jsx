import React from 'react';
import { useQuery } from 'urql';
import query from '../Queries/pulseQuery';
import PulseChart from './Charts/PulseChart';

const RePulse = ({ owner, name }) => {
  const [state] = useQuery({
    query,
    variables: {
      owner,
      name,
    },
  });

  const { data, fetching, error } = state;

  if (error) {
    //console.log('Pulse Error: %O', error);

    return <p>Error</p>;
  }

  if (fetching) {
    return <p>Detecting Pulse...</p>;
  }

  //   if (state.error) {
  //     return <p>No pulse detected __________________ : {state.error}</p>;
  //   }

  //   if (data.GithubPulse) {
  //     return (
  //       <div>
  //         <PulseChart data={data.GithubPulse} />
  //       </div>
  //     );
  //   }

  return <p>Pulse not detected. Deceased.</p>;
};

export default RePulse;
