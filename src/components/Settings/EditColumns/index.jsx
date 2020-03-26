import React from 'react';
import {
  toggleCont,
  toggle,
  toggled,
  toggledCont,
  editColumnsDiv,
  itemsContainer,
  deleteIcon,
} from './EditColumns.module.scss';
import { useMutation } from 'urql';
import { UPDATE_STATUS_DISPLAY as updateDisplay } from '../../Project/Queries/index';
import DeleteColumn from '../DeleteColumn';

import EditColumnModal from '../EditColumnModal/index';

const EditColumns = ({ column, id, statuses }) => {
  const [, executeUpdateDisplay] = useMutation(updateDisplay);

  let displayFiltered = statuses.filter(function(e) {
    return e.display === true;
  });

  const disabledTer = displayFiltered.length >= 4 && !column.display;

  const toggler = e => {
    e.preventDefault();
    return disabledTer
      ? null
      : executeUpdateDisplay({ id, display: !column.display });
  };

  return (
    <div className={editColumnsDiv}>
      <div className={itemsContainer}>
        <div
          onClick={toggler}
          className={column.display ? toggledCont : toggleCont}
        >
          <div className={column.display ? toggled : toggle} />
        </div>
        <div>{column.name}</div>
      </div>
      <div className={itemsContainer}>
        <div>
          <EditColumnModal column={column} />
        </div>
        <div className={deleteIcon}>
          <DeleteColumn column={column} />
        </div>
      </div>
    </div>
  );
};

export default EditColumns;
