import React, { useContext, useEffect, useState } from 'react';
import { labelListStyle } from './LabelList.module.scss';
import StatusLabel from '../StatusLabel/index';
import { LABEL_LIST_VIEW as query } from '../../ProjectList/Queries/projectQueries';
import { useQuery, useSubscription } from 'urql';
const LabelList = ({ column, columnId }) => {
  const [state] = useQuery({
    query,
    variables: { id: columnId },
    requestPolicy: 'cache-and-network',
  });
  const { data } = state;
  const [id, setId] = useState(-1);
  // // useSubscription({ query });

  useEffect(() => {
    setId(data && data.programs[0].columns.findIndex(c => c.id == column.id));
  }, []);

  return (
    <div className={labelListStyle}>
      {data && data.programs.length && id !== -1
        ? data.programs[0].columns[id].labels.map(label => {
            return <StatusLabel column={column} label={label} key={label.id} />;
          })
        : ''}
    </div>
  );
};

export default LabelList;
