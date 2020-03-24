import React from 'react';
import { useQuery } from 'urql';
import { SPARKLINE as query } from '../Queries/sparklineQuery';
import { Sparkyline } from './Sparkline.module.scss';
import SparkyChart from './Charts/SparkyChart';

const Sparkline = ({ name, repoIndex, handleSparkClick }) => {
  const [state] = useQuery({
    query,
    variables: {
      owner: 'Lambda-School-Labs',
      name: name,
    },
  });
  const { data } = state;

  if (state.fetching) {
    return <p>Loading Sparkline...</p>;
  } else if (state.error) {
    return <p>Error: Sparkline unavailable.</p>;
  } else if (data.SparkyBoy.length) {
    return (
      <>
        <div className={Sparkyline} onClick={() => handleSparkClick(repoIndex)}>
          <SparkyChart
            data={data}
            tooltips={{ enabled: false }}
            maxValue={1000}
          />
        </div>
      </>
    );
  } else {
    return <p>Sparkline unavailable</p>;
  }
};

export default Sparkline;
