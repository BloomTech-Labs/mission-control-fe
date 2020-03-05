import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const LabelDropdown = props => {
  const labels = props.labels.map(label => ({
    key: label.name,
    value: label.color,
    text: label.name,
  }));

  //   console.log('labels', labels);

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
