import React, { useEffect, useState } from 'react';
import {
  labelListStyle,
  labelListDiv,
  itemsContainer,
} from './LabelList.module.scss';
import StatusLabel from '../StatusLabel/index';
import DeleteLabel from '../DeleteLabel/DeleteLabel';
import UpdateLabelModal from '../UpdateLabelModal/index';
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
              <div className={labelListDiv} key={label.id}>
                <div className={itemsContainer}>
                  <StatusLabel columnId={columnId} label={label} />
                </div>
                <div className={itemsContainer}>
                  <UpdateLabelModal label={label} />
                  <DeleteLabel label={label} columnId={columnId} />
                </div>
              </div>
            );
          })
        : ''}
    </div>
  );
};

export default LabelList;
