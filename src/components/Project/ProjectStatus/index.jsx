import React from 'react';
import { useQuery } from 'urql';
import LabelDropdown from '../../ProjectList/LabelDropdown/index';
import {
  projectStatusDropdown,
  dropdownLabel,
} from './ProjectStatus.module.scss';

import { GET_PROJECT_STATUS as query } from '../Queries/index';

const ProjectStatus = ({ projectId }) => {
  const [state] = useQuery({
    query,
    variables: { id: projectId },
    requestPolicy: 'cache-and-network',
  });

  const { data } = state;

  return (
    <div className={projectStatusDropdown}>
      {data
        ? data.project.projectStatus.map(statuses => {
            return (
              <div className={dropdownLabel}>
                <p>{statuses.name}</p>
                <LabelDropdown labels={statuses.labels} />
              </div>
            );
          })
        : ''}
    </div>
  );
};
export default ProjectStatus;
