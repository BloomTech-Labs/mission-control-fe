import React from 'react';
import { useQuery } from 'urql';
import {
  projectStatusDropdown,
  dropdownLabel,
} from './ProjectStatus.module.scss';

import { GET_PROJECT_STATUS as query } from '../Queries/index';
import ProjectStatusLabel from './projectStatusLabel';

const ProjectStatus = ({ projectId, label }) => {
  const [state] = useQuery({
    query,
    variables: { id: projectId },
    requestPolicy: 'cache-and-network',
  });

  const { data } = state;

  return (
    <div className={projectStatusDropdown}>
      {data && data.project.projectStatus.length > 0
        ? data.project.projectStatus.map(statuses => {
            return (
              <div className={dropdownLabel} key={statuses.id}>
                <h3>{statuses.name}</h3>
                <ProjectStatusLabel
                  statuses={statuses}
                  labels={statuses.labels}
                  project={data.project}
                  statusId={statuses.id}
                  key={statuses.id}
                />
              </div>
            );
          })
        : ''}
    </div>
  );
};
export default ProjectStatus;
