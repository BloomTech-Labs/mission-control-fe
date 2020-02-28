import React, { useContext } from 'react';
import { Button, Popup } from 'semantic-ui-react';
import { CirclePicker } from 'react-color';

import { LabelContext } from '../../contexts/LabelContext';
import { labelPreviewDesign } from './Settings.module.scss';

const CreateLabelForm = () => {
  const { label, setLabel } = useContext(LabelContext);

  const handleChanges = e => {
    e.preventDefault();
    setLabel({
      ...label,
      [e.target.name]: e.target.value,
    });
  };

  const handleColorChanges = color => {
    setLabel({
      ...label,
      color: color.hex,
    });
  };

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
          <label>
            <div>
              <Popup
                content={
                  <CirclePicker
                    color={label.color}
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
                  <Button
                    content="Choose Color"
                    onClick={e => e.preventDefault()}
                  />
                }
              />
            </div>
          </label>
        </div>
      </div>
    </form>
  );
};

export default CreateLabelForm;
