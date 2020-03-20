import React from 'react';
import { dropdownLabel, labelDesign } from './ProjectStatus.module.scss';

const ProjectStatusLabel = ({ statuses, labels }) => {
  console.log(labels);

  if (labels.length > 0) {
    return (
      <div>
        {statuses && labels.length > 0
          ? labels.map(statusLabels => {
              return (
                <div
                  className={labelDesign}
                  style={{ background: `${statusLabels.color}` }}
                >
                  {statusLabels.name}
                </div>
              );
            })
          : ''}
      </div>
    );
  } else {
    return (
      <div>
        <p>No Labels</p>
      </div>
    );
  }
};

export default ProjectStatusLabel;
