import React from 'react';
import { columnEditCont } from './ColumnSettings.module.scss';
import { useQuery } from 'urql';
import { PROJECT_LIST_VIEW as query } from '../../ProjectList/Queries/projectQueries';
import EditColumns from '../EditColumns/index';
import CreateColumn from '../CreateColumn/index';

const ColumnSettings = () => {
  const [state] = useQuery({ query, requestPolicy: 'cache-and-network' });
  const { data } = state;

  console.log('data', data && data);

  const columns = data && data.programs[0].columns;

  return (
    <div>
      <div className={columnEditCont}>
        {columns
          ? columns.map(column => (
              <div>
                <EditColumns column={column} key={column.id} />
              </div>
            ))
          : ' '}
      </div>
      <CreateColumn />
    </div>
  );
};

export default ColumnSettings;
