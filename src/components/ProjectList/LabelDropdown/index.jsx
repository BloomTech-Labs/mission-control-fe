import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const LabelDropdown = props => {
  const labels = [{ value: props.labels.name, text: props.labels.name }];

  console.log('labels', labels);

  return (
    <Dropdown
      placeholder="Select Label"
      fluid
      search
      selection
      options={labels}
    />
  );
};

export default LabelDropdown;
