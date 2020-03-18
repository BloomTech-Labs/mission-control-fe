import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import {
  labelDesign,
  hiddenDropdown,
  normalDropdown,
} from './LabelDropdown.module.scss';

const LabelDropdown = ({ labels, statusData }) => {
  console.log('statusData', statusData.display);
  const labelArr = labels.map(label => ({
    key: label.id,
    value: label.color,
    text: (
      <div className={labelDesign} style={{ background: `${label.color}` }}>
        {label.name}
      </div>
    ),
  }));
  if (statusData.display == true) {
    return <Dropdown placeholder="Select Label" options={labelArr} />;
  } else {
    return <div className={hiddenDropdown} />;
  }
};

export default LabelDropdown;
