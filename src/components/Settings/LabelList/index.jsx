import React from 'react';
import { labelListStyle } from './LabelList.module.scss';
import StatusLabel from '../StatusLabel/index';

const LabelList = ({ column }) => {
  return (
    <div className={labelListStyle}>
      {column
        ? column.labels.map(label => {
            return <StatusLabel label={label} key={label.id} />;
          })
        : ''}
    </div>
  );
};

export default LabelList;
