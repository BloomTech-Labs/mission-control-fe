import React, { useState, useCallback } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import { CirclePicker } from 'react-color';
import { labelDesign } from './UpdateLabel.module.scss';
import { UPDATE_LABEL as updateLabelMutation } from '../../Project/Queries';
import { useMutation } from 'urql';
import CustomCirclePicker from '../StatusLabel/ColorPicker/CustomColorPicker';
const UpdateLabel = props => {
  const initState = {
    id: `${props.label.id}`,
    name: `${props.label.name}`,
    color: `${props.label.color}`,
  };

  const [label, setLabel] = useState(initState);
  const [, executeUpdate] = useMutation(updateLabelMutation);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      executeUpdate(label);
    },
    [executeUpdate, label]
  );

  const handleChanges = e => {
    e.preventDefault();
    setLabel({
      ...label,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form>
      <div>
        <div>
          <label>
            Label name:
            <input
              name="name"
              id="name"
              onChange={handleChanges}
              value={label.name}
            />
          </label>
          <br />
          {label.name && label.color ? (
            <div
              className={labelDesign}
              style={{ background: `${label.color}` }}
            >
              {label.name}
            </div>
          ) : (
            ''
          )}
          <CustomCirclePicker {...props} label={label} setLabel={setLabel} />
        </div>
      </div>
      <div>
        <Button onClick={handleSubmit}>Save Changes</Button>
      </div>
    </form>
  );
};
export default UpdateLabel;
