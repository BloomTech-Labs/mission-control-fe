import React from 'react';
import { labelDesign } from './UpdateLabel.module.scss';

import CustomCirclePicker from '../StatusLabel/ColorPicker/CustomColorPicker';
import { basicInput } from './UpdateLabel.module.scss';
const UpdateLabel = props => {
  const handleChanges = e => {
    e.preventDefault();
    props.setLabel({
      ...props.label,
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
              value={props.label.name}
              className={basicInput}
            />
          </label>
          <br />
          {props.label.name && props.label.color ? (
            <div
              className={labelDesign}
              style={{ background: `${props.label.color}` }}
            >
              {props.label.name}
            </div>
          ) : (
            ''
          )}
          <CustomCirclePicker
            {...props}
            label={props.label}
            setLabel={props.setLabel}
          />
        </div>
      </div>
    </form>
  );
};
export default UpdateLabel;
