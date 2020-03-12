import React from 'react';
import { columnEditCont } from './ColumnSettings.module.scss';
import { useQuery, useSubscription } from 'urql';
import {
  LABEL_LIST_VIEW,
  PROGRAM_SUBSCRIPTION,
} from '../../ProjectList/Queries/projectQueries';
import EditColumns from '../EditColumns/index';
import CreateColumn from '../CreateColumn/index';

const ColumnSettings = () => {
  useSubscription({ query: PROGRAM_SUBSCRIPTION });

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
          ? data.programs[0].columns.map(column => (
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
