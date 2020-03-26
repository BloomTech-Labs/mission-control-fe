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
                '#10B4DC',
                '#F6C104',
                '#2DA602',
                '#8210DC',
                '#DC4110',
                '#F8A529',
              ]}
              onChange={handleColorChanges}
              width="130px"
            />
          }
          on="click"
          trigger={
            <Button
              content="Pick Color"
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
