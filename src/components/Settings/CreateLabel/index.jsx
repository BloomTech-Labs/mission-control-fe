import React, { useState, useContext, useCallback } from 'react';
import { Button } from 'semantic-ui-react';
import { useMutation } from 'urql';
import { CREATE_LABEL as createLabel } from '../../Project/Queries/index';

import { LabelContext } from '../../../contexts/LabelContext';
import { labelPreviewDesign } from './CreateLabel.module.scss';
import CustomCirclePicker from '../StatusLabel/ColorPicker/CustomColorPicker';

const CreateLabelForm = ({ column }) => {
  const [label, setLabel] = useState('');
  const [o, executeCreate] = useMutation(createLabel);
  const handleChanges = e => {
    e.preventDefault();
    setLabel({
      ...label,
      [e.target.name]: e.target.value,
      id: column.id,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    executeCreate(label);
    console.log(label);
  };

  const disableTer = !label.color || !label.name;

  return (
    <form>
      <div>
        <div>
          <label>
            Label Name:
            <input
              name="name"
              id="name"
              placeholder="label..."
              onChange={handleChanges}
              value={label.name}
            />
          </label>
          <br />
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
        <CustomCirclePicker label={label} setLabel={setLabel} />
      </div>
      <div>
        <Button content="Save" onClick={handleSubmit} disabled={disableTer} />
      </div>
    </form>
  );
};

export default CreateLabelForm;
