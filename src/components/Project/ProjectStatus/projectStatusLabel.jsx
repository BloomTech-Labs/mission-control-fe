import React from 'react';
import { dropdownLabel, labelDesign } from './ProjectStatus.module.scss';

const ProjectStatusLabel = ({ statuses, labels, project }) => {
  if (labels.length > 0) {
    return (
      <div>
        {statuses
          ? labels.map(statusLabel => {
              return (
                <div key={statusLabel.id}>
                  {statusLabel &&
                    statusLabel.selected.map(selected =>
                      selected.id === project.id ? (
                        <div
                          className={labelDesign}
                          style={{ background: `${statusLabel.color}` }}
                        >
                          {statusLabel.name}
                        </div>
                      ) : (
                        ''
                      )
                    )}
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
