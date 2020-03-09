import React from 'react';
import { Maintainability } from './Sparkline.module.scss';

const SparklineContainer = props => {
  if (!props.sparkline || !props.sparkline.length) return null;

  return (
    <>
      <div className={Maintainability}>
        ChartJS Stuff Here
      </div>
    </>
  );
};

export default SparklineContainer;