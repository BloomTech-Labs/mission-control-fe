import React from 'react';
import { columnEditCont } from './ColumnSettings.module.scss';

import EditColumns from '../EditColumns/index';
import CreateColumn from '../CreateColumn/index';

const ColumnSettings = () => {
  const columns = ['UX', 'Software Engineering', 'Data Science'];

  return (
    <div>
      <div className={columnEditCont}>
        {columns.map(column => (
          <EditColumns column={column} key={column} />
        ))}
      </div>
      <CreateColumn />
    </div>
  );
};

export default ColumnSettings;
