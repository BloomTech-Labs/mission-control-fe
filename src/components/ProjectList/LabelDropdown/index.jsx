import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { labelDesign } from './LabelDropdown.module.scss';

const LabelDropdown = ({ labels }) => {
  const labelArr = labels.map(label => ({
    key: label.id,
    value: label.color,
    text: (
      <div className={labelDesign} style={{ background: `${label.color}` }}>
        {label.name}
      </div>
    ),
  }));

  return <Dropdown placeholder="Select Label" options={labelArr} />;
};

export default LabelDropdown;
