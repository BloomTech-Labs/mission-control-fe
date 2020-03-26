import React, { useState } from 'react';

import {
  basicInput,
  form,
  addLabelButton,
  addLabelCont,
  disAddLabelButton,
  disForm,
} from './CreateLabel.module.scss';
import CustomCirclePicker from '../StatusLabel/ColorPicker/CustomColorPicker';

const CreateLabelForm = ({ column, label, setLabel }) => {
  const [addLabel, setAddLabel] = useState(false);
  const handleChanges = e => {
    e.preventDefault();
    setLabel({
      ...label,
      [e.target.name]: e.target.value,
      id: column.id,
    });
  };

  const handleOpen = () => {
    setAddLabel(!addLabel);
  };

  const disableTer = !label.color || !label.name;

  return (
    <div className={addLabelCont}>
      <button
        className={!addLabel ? addLabelButton : disAddLabelButton}
        onClick={handleOpen}
      >
        + Add label
      </button>
      <form className={addLabel ? form : disForm}>
        <label>Label Name:</label>
        <input
          name="name"
          id="name"
          placeholder="label..."
          onChange={handleChanges}
          value={label.name}
          className={basicInput}
        />
        <CustomCirclePicker label={label} setLabel={setLabel} />
      </form>
    </div>
  );
};

export default CreateLabelForm;
