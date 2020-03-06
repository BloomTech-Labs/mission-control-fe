import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { labelDesign, labels } from './LabelDropdown.module.scss';

const LabelDropdown = props => {
  const labels = props.labels.map(label => ({
    key: label.id,
    value: label.color,
    text: (
      <div className={labelDesign} style={{ background: `${label.color}` }}>
        {label.name}
      </div>
    ),
    content: (
      <div className={labelDesign} style={{ background: `${label.color}` }}>
        {label.name}
      </div>
    ),
  }));

  return (
    <Dropdown className={labels} placeholder="Select Label" options={labels} />
  );
};

export default LabelDropdown;
