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
import DeleteColumn from '../DeleteColumn';

import EditColumnModal from '../EditColumnModal/index';

const EditColumns = ({ column, setColumns }) => {
  const [toggleActive, setToggleActive] = useState(false);

  const toggler = e => {
    e.stopPropagation();
    setToggleActive(!toggleActive);
  };

  return (
    <div className={editColumnsDiv}>
      <div>
        <EditColumnModal column={column} setColumns={setColumns} />
      </div>
      <div className={togglerContainer}>
        <div
          onClick={toggler}
          className={toggleActive ? toggleCont : toggledCont}
        >
          <div className={toggleActive ? toggle : toggled} />
        </div>
        <div className={deleteIcon}>
          <DeleteColumn column={column} />
        </div>
      </div>
    </div>
  );
};

export default EditColumns;
