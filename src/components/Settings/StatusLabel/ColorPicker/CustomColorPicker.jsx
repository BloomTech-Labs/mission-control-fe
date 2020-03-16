import React from 'react';
import { CirclePicker } from 'react-color';
import { Popup, Button } from 'semantic-ui-react';
const CustomCirclePicker = props => {
  const handleColorChanges = color => {
    props.setLabel({
      ...props.label,
      color: color.hex,
    });
  };
  return (
    <label>
      <div>
        <Popup
          content={
            <CirclePicker
              color={props.label.color}
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
              size={'mini'}
            />
          }
        />
      </div>
    </label>
  );
};

export default CustomCirclePicker;
