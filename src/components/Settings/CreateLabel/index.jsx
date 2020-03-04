import React, { useContext } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import { CirclePicker } from 'react-color';

import { LabelContext } from '../../../contexts/LabelContext';
import { labelPreviewDesign } from './CreateLabel.module.scss';
import CustomCirclePicker from '../StatusLabel/ColorPicker/CustomColorPicker';

const CreateLabelForm = ({ handleSubmit }) => {
  const { label, setLabel } = useContext(LabelContext);

  const handleChanges = e => {
    e.preventDefault();
    setLabel({
      ...label,
      [e.target.name]: e.target.value,
    });
  };

  const disableTer = !label.color || label.name.length < 3;

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
