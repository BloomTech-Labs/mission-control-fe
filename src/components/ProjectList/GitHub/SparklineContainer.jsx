import React from 'react';
import Sparkline from './Sparkline.jsx';
import { Maintainability } from './Sparkline.module.scss';

const SparklineContainer = props => {
  if (!props.sparkline || !props.sparkline.length) return null;


  return (
    <>
      <div className={Maintainability}>
        {props.sparkline.map(spark => {
          return <Sparkline key={spark.oid} additions={spark.additions} deletions={spark.deletions} changedFiles={spark.changedFiles} /> ;
        })}
      </div>
    </>
  );
};

export default SparklineContainer;