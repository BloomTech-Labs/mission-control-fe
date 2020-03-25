import React from 'react';
import {
  toggleCont,
  toggle,
  toggled,
  toggledCont,
  editColumnsDiv,
  togglerContainer,
  deleteIcon,
} from './EditColumns.module.scss';
import { useMutation } from 'urql';
import { UPDATE_STATUS_DISPLAY as updateDisplay } from '../../Project/Queries/index';
import DeleteColumn from '../DeleteColumn';

import EditColumnModal from '../EditColumnModal/index';

const EditColumns = ({ column, id }) => {
  const [, executeUpdateDisplay] = useMutation(updateDisplay);

  const toggler = e => {
    e.preventDefault();
    executeUpdateDisplay({ id, display: !column.display });
  };

  return (
    <div className={editColumnsDiv}>
      <div>
        <EditColumnModal column={column} />
      </div>
      <div className={togglerContainer}>
        <div
          onClick={toggler}
          className={column.display ? toggledCont : toggleCont}
        >
          <div className={column.display ? toggled : toggle} />
        </div>
        <div className={deleteIcon}>
          <DeleteColumn column={column} />
        </div>
      </div>
    </div>
  );
};

export default EditColumns;
