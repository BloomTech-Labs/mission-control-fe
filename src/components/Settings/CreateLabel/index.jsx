import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useMutation } from 'urql';
import { CREATE_LABEL as createLabel } from '../../Project/Queries/index';

import { labelPreviewDesign, basicInput } from './CreateLabel.module.scss';
import CustomCirclePicker from '../StatusLabel/ColorPicker/CustomColorPicker';

const CreateLabelForm = ({ column }) => {
  const [label, setLabel] = useState({ name: '', color: '', id: '' });
  const [, executeCreate] = useMutation(createLabel);
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
    setLabel({ id: '', name: '', color: '' });
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
              className={basicInput}
            />
          </label>
          <br />
        </div>
        <br />
        <CustomCirclePicker label={label} setLabel={setLabel} />
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
      <div>
        <Button
          content="Save"
          size={'small'}
          onClick={handleSubmit}
          disabled={disableTer}
        />
      </div>
      <br />
    </form>
  );
};

export default CreateLabelForm;
