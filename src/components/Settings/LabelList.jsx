import React from 'react';
import { useQuery } from 'urql';
import { LABELS_QUERY as query } from '../ProjectList/Queries/projectQueries';
import { labelListStyle } from './Settings.module.scss';
import StatusLabel from './StatusLabel';

const LabelList = () => {
  const [state] = useQuery({ query, requestPolicy: 'cache-and-network' });

  const { data } = state;

  return (
    <div className={labelListStyle}>
      {data
        ? data.labels.map(label => {
            return <StatusLabel label={label} key={label.id} />;
          })
        : ''}
    </div>
  );
};

export default LabelList;
