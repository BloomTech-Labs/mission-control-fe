import React from 'react';
import { useQuery } from 'urql';
import { LABELS_QUERY as query } from '../ProjectList/Queries/projectQueries';
import StatusLabel from './StatusLabel';
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
              return <StatusLabel label={label} key={label.id} />;
            })
          : ''}
      </div>
    </div>
  );
};

export default LabelList;
