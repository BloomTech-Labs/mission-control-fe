import React, { useState } from 'react';
import { useQuery } from 'urql';
import {
  projectStatusDropdown,
  dropdownLabel,
  projectStatusContainer,
  accordIcon,
} from './ProjectStatus.module.scss';
import ProjectStatusDropdown from './projectStatusDropdown';
import { Accordion, Icon } from 'semantic-ui-react';

import { GET_PROJECT_STATUS as query } from '../Queries/index';
const ProjectStatus = ({ projectId, label }) => {
  const [state] = useQuery({
    query,
    variables: { id: projectId },
    requestPolicy: 'cache-and-network',
  });
  const [accordion, setAccordion] = useState({ activeIndex: 1 });

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = accordion;
    const newIndex = activeIndex === index ? -1 : index;

    setAccordion({ activeIndex: newIndex });
  };

  console.log(handleClick);
  const { data } = state;

  const { activeIndex } = accordion;

  return (
    <div className={projectStatusContainer}>
      <Accordion>
        <Accordion.Title
          onClick={handleClick}
          active={activeIndex === 0}
          index={0}
        >
          <h2>
            Project Status
            <Icon className={accordIcon} name="dropdown" />
          </h2>
        </Accordion.Title>
        <Accordion.Content active={activeIndex === 0}>
          <div className={projectStatusDropdown}>
            {data && data.project.projectStatus.length > 0
              ? data.project.projectStatus.map(statuses => {
                  return (
                    <div className={dropdownLabel} key={statuses.id}>
                      <h3>{statuses.name}</h3>
                      <ProjectStatusDropdown
                        statusData={statuses}
                        labels={statuses.labels}
                        project={data.project}
                      />
                    </div>
                  );
                })
              : ''}
          </div>
        </Accordion.Content>
      </Accordion>
    </div>
  );
};
export default ProjectStatus;
