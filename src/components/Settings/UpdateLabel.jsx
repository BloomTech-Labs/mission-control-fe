import React, { useState, useCallback } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import { CirclePicker } from 'react-color';
import { labelDesign } from './Settings.module.scss';
import { UPDATE_LABEL as updateLabelMutation } from '../Project/Queries';
import { useMutation } from 'urql';
const UpdateLabel = props => {
  const initState = {
    id: `${props.label.id}`,
    name: `${props.label.name}`,
    color: `${props.label.color}`,
  };

  const [updateLabel, setUpdateLabel] = useState(initState);
  const [, executeUpdate] = useMutation(updateLabelMutation);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      executeUpdate(updateLabel);
    },
    [executeUpdate, updateLabel]
  );

  const handleChanges = e => {
    e.preventDefault();
    setUpdateLabel({
      ...updateLabel,
      [e.target.name]: e.target.value,
    });
  };

  const handleColorChanges = color => {
    setUpdateLabel({
      ...updateLabel,
      color: color.hex,
    });
  };
  const colorPickerJar = e => {
    e.preventDefault();
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
              value={updateLabel.name}
            />
          </label>
          <br />
          {updateLabel.name && updateLabel.color ? (
            <div
              className={labelDesign}
              style={{ background: `${updateLabel.color}` }}
            >
              {updateLabel.name}
            </div>
          ) : (
            ''
          )}
          <label>
            <div>
              <Popup
                content={
                  <CirclePicker
                    color={updateLabel.color}
                    colors={[
                      '#75a9b6',
                      '#575a7b',
                      '#27213d',
                      '#2c6049',
                      '#d19c18',
                      '#d42c08',
                    ]}
                    onChange={handleColorChanges}
                    width="130px"
                  />
                }
                on="click"
                trigger={
                  <Button content="Choose Color" onClick={colorPickerJar} />
                }
              />
            </div>
          </label>
        </div>
      </div>
      <div>
        <Button onClick={handleSubmit}>SAVE</Button>
      </div>
    </form>
  );
};
export default UpdateLabel;
