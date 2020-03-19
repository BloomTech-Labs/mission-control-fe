import React, { useState } from 'react';
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
  const [toggleActive, setToggleActive] = useState(false);
  const [statusDisplay, setStatusDisplay] = useState(column.display);
  const [, executeUpdateDisplay] = useMutation(updateDisplay);
  const variables = { id, display: statusDisplay };

  const toggler = e => {
    e.preventDefault();
    setStatusDisplay(!statusDisplay);
    executeUpdateDisplay(variables);
  };
  console.log('column', statusDisplay);

  return (
    <div className={editColumnsDiv}>
      <div>
        <EditColumnModal column={column} />
      </div>
      <div className={togglerContainer}>
        <div
          onClick={toggler}
          className={statusDisplay ? toggledCont : toggleCont}
        >
          <div className={statusDisplay ? toggled : toggle} />
        </div>
        <div className={deleteIcon}>
          <DeleteColumn column={column} />
        </div>
      </div>
    </div>
  );
};

export default EditColumns;
