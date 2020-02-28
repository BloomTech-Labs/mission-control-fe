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

  console.log(data && data.labels);

  return (
    <div className={labelListStyle}>
      {data ? (
        data.labels.length < 4 ? (
          data.labels.map(label => {
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
        ) : (
          <div>click here to see more</div>
        )
      ) : (
        ''
      )}
    </div>
  );
};

export default LabelList;
