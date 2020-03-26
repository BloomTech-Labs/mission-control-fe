import React from 'react';

import {
  labelPreviewDesign,
  basicInput,
  form,
  createContainer,
  labelNameContainer,
  labelPreviewCont,
} from './CreateLabel.module.scss';
import CustomCirclePicker from '../StatusLabel/ColorPicker/CustomColorPicker';

const CreateLabelForm = ({ column, label, setLabel }) => {
  const handleChanges = e => {
    e.preventDefault();
    setLabel({
      ...label,
      [e.target.name]: e.target.value,
      id: column.id,
    });
  };

  const disableTer = !label.color || !label.name;

  return (
    <form className={form}>
      <div>
        <div className={createContainer}>
          <div className={labelNameContainer}>
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
          </div>
          <div className={labelPreviewCont}>
            {label.name && label.color ? (
              <div
                className={labelPreviewDesign}
                style={{ background: `${label.color}` }}
              >
                {label.name}
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
      <br />
    </form>
  );
};

export default CreateLabelForm;
