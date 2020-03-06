import React from 'react';
import { columnEditCont } from './ColumnSettings.module.scss';
import { useQuery, useSubscription } from 'urql';
import {
  PROJECT_LIST_VIEW as query,
  PROGRAM_SUBSCRIPTION,
} from '../../ProjectList/Queries/projectQueries';
import EditColumns from '../EditColumns/index';
import CreateColumn from '../CreateColumn/index';

const ColumnSettings = () => {
  useSubscription({ query: PROGRAM_SUBSCRIPTION });
  const [state] = useQuery({ query, requestPolicy: 'cache-and-network' });
  const { data } = state;

  const columns = data && data.programs[0].columns;
  const programId = data && data.programs[0].id;

  return (
    <div>
      <div className={columnEditCont}>
        {columns
          ? columns.map(column => (
              <div key={column.id}>
                <EditColumns column={column} />
              </div>
            ))
          : ' '}
      </div>
      <CreateColumn programId={programId} />
    </div>
  );
};

export default ColumnSettings;
