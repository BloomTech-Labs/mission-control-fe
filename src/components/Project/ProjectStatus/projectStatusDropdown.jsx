import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useMutation } from 'urql';
import { labelDesign } from './ProjectStatus.module.scss';
import {
  UPDATE_PROJECT_STATUS_ELEMENT_VALUE,
} from '../Queries/index';

const ProjectStatusDropdown = ({ projectStatusElement }) => {
  //console.log('PROJECT_STATUS_DROPDOWN DATA: %O', projectStatusElement);

  const [
    projectStatusElementValue,
    setProjectStatusElementValue,
  ] = React.useState(projectStatusElement.value.id);

  const [, executeUpdateProjectStatusElementValue] = useMutation(
    UPDATE_PROJECT_STATUS_ELEMENT_VALUE
  );

  const labelOptions = projectStatusElement.category.valueOptions.map(
    valueOption => ({
      key: valueOption.id,
      value: valueOption.id,
      text: (
        <div
          className={labelDesign}
          style={{ background: `${valueOption.color}` }}
        >
          {valueOption.label}
        </div>
      ),
    })
  );


  

  // TODO Created throw and catch statement to fix deployment error of and unhandled promise
  // line 5
  const handleChange = async (e, { value }) => {
    e.preventDefault();

    //console.log(
    //   'PROJECT_STATUS_DROPDOWN UPDATE: %O - %O - %O',
    //   projectStatusElement.project.id,
    //   projectStatusElement.id,
    //   value
    // );

    // setProjectStatusElementValue(
    await executeUpdateProjectStatusElementValue({
      projectId: projectStatusElement.project.id,
      projectStatusElementId: projectStatusElement.id,
      projectStatusValue: value,
    }).catch(error => {
      console.log(
        `Error projectStatusDropdown.jsx handleChange() with async(unhandled promise): ${error} line 53`
      );
    });

    setProjectStatusElementValue(value);
  };

  return (
    <Dropdown
      scrolling
      downward="true"
      onChange={handleChange}
      value={projectStatusElementValue}
      options={labelOptions}
    />
  );
};

export default ProjectStatusDropdown;
