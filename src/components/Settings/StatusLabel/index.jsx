import React from 'react';
import { labelDesign } from './StatusLabel.module.scss';

const StatusLabel = ({ label, columnId }) => {
  return (
    <div className={labelDesign} style={{ background: `${label.color}` }}>
      {label.name}
    </div>
  );
};

export default StatusLabel;
