import React, { useState } from 'react';
import {
  toggleCont,
  toggle,
  toggled,
  toggledCont,
  editColumnsDiv,
} from './EditColumns.module.scss';

const EditColumns = props => {
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
        <p>{props.column}</p>
      </div>
    </div>
  );
};

export default EditColumns;
