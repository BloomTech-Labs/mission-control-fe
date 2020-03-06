import React, { useState } from 'react';
import {
  toggleCont,
  toggle,
  toggled,
  toggledCont,
  editColumnsDiv,
} from './EditColumns.module.scss';

import EditColumnModal from '../EditColumnModal/index';

const EditColumns = ({ column }) => {
  const [toggleActive, setToggleActive] = useState(false);

  const toggler = e => {
    e.stopPropagation();
    setToggleActive(!toggleActive);
  };

  return (
    <div className={editColumnsDiv}>
      <div
        onClick={toggler}
        className={toggleActive ? toggleCont : toggledCont}
      >
        <div className={toggleActive ? toggle : toggled} />
      </div>
      <div>
        <EditColumnModal column={column} />
      </div>
    </div>
  );
};

export default EditColumns;
