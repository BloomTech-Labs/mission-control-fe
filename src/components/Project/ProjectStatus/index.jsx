import React, { useState } from 'react';
import { Accordion, Icon } from 'semantic-ui-react';
import {
  projectStatusDropdown,
  dropdownLabel,
  projectStatusContainer,
  accordIcon,
} from './ProjectStatus.module.scss';
import ProjectStatusDropdown from './projectStatusDropdown';

const ProjectStatus = ({ projectStatus }) => {
  const [accordion, setAccordion] = useState({ activeIndex: 1 });

  const handleClick = (e, titleProps) => {
    const { index } = titleProps;
    const { activeIndex } = accordion;
    const newIndex = activeIndex === index ? -1 : index;

    setAccordion({ activeIndex: newIndex });
  };

  const { activeIndex } = accordion;

  //console.log('PROJECT_STATUS DATA: %O', projectStatus);
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
            {projectStatus && projectStatus.length
              ? projectStatus.map(projectStatusElement => {
                  return (
                    <div
                      className={dropdownLabel}
                      key={projectStatusElement.id}
                    >
                      <h3>{projectStatusElement.category.name}</h3>
                      <ProjectStatusDropdown
                        projectStatusElement={projectStatusElement}
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
