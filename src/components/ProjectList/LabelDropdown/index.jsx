import React from 'react';
import { Dropdown } from 'semantic-ui-react';

const LabelDropdown = props => {
  const labels = props.labels.notes.map(label => ({
    key: label.id,
    value: label.id,
    text: label.updatedAt,
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
