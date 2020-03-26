import React from 'react';
import { columnEditCont } from './ColumnSettings.module.scss';
import { useQuery } from 'urql';
import { LABEL_LIST_VIEW } from '../../ProjectList/Queries/projectQueries';
import EditColumns from '../EditColumns/index';

const ColumnSettings = () => {
  const [state] = useQuery({
    query: LABEL_LIST_VIEW,
    requestPolicy: 'cache-and-network',
  });
  const { data } = state;

  return (
    <div>
      <div className={columnEditCont}>
        {data
          ? data.programs[0].statuses.map(column => (
              <div key={column.id}>
                <EditColumns column={column} id={column.id} />
              </div>
            ))
          : ' '}
      </div>
    </div>
  );
};

export default ColumnSettings;
