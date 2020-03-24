import React, { useEffect, useState } from 'react';
import { labelListStyle, labelListCont } from './LabelList.module.scss';
import StatusLabel from '../StatusLabel/index';
import { LABEL_LIST_VIEW as query } from '../../ProjectList/Queries/projectQueries';
import { useQuery } from 'urql';
const LabelList = ({ column, columnId }) => {
  const [state] = useQuery({
    query,
    variables: { id: columnId },
    requestPolicy: 'cache-and-network',
  });
  const { data } = state;
  const [id, setId] = useState(-1);

  useEffect(() => {
    setId(data && data.programs[0].statuses.findIndex(c => c.id === column.id));
  }, [column.id, data]);

  return (
    <div className={labelListStyle}>
      {data && data.programs.length && id !== -1
        ? data.programs[0].statuses[id].labels.map(label => {
            return (
              <StatusLabel columnId={columnId} label={label} key={label.id} />
            );
          })
        : ''}
    </div>
  );
};

export default LabelList;
