import React from 'react';
import { columnEditCont } from './ColumnSettings.module.scss';
import { useQuery } from 'urql';
import { LABEL_LIST_VIEW } from '../../ProjectList/Queries/projectQueries';
import EditColumns from '../EditColumns/index';
import CreateColumn from '../CreateColumn/index';

const ColumnSettings = () => {
  const [state] = useQuery({
    query: LABEL_LIST_VIEW,
    requestPolicy: 'cache-and-network',
  });
  const { data } = state;

  const programId = data && data.programs[0].id;

  return (
    <div>
      <div className={columnEditCont}>
        {data
          ? data.programs[0].statuses.map(column => (
              <div key={column.id}>
                <EditColumns column={column} />
              </div>
            ))
          : ' '}
      </div>
      <CreateColumn programId={programId} column={data} />
    </div>
  );
};

export default ColumnSettings;
