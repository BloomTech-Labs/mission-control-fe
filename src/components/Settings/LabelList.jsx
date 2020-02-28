import React from 'react';
import { useQuery } from 'urql';
import { LABELS_QUERY as query } from '../ProjectList/Queries/projectQueries';
import {
  labelDesign,
  labelListStyle,
  labelListStyleB,
} from './Settings.module.scss';

const LabelList = () => {
  const [state] = useQuery({ query, requestPolicy: 'cache-and-network' });

  const { data } = state;

  return (
    <div className={labelListStyleB}>
      <div className={labelListStyle}>
        {data
          ? data.labels.map(label => {
              return (
                <div
                  className={labelDesign}
                  style={{ background: `${label.color}` }}
                  key={label.id}
                >
                  {label.name}
                </div>
              );
            })
          : ''}
      </div>
    </div>
  );
};

export default LabelList;
