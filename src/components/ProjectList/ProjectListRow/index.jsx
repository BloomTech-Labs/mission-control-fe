import React from 'react';
import { Link } from 'react-router-dom';

import LetterGradeContainer from '../CodeClimate/LetterGradeContainer';
import LabelDropdown from '../LabelDropdown/index';

import {
  title,
  statusColumns,
  hiddenStatus,
} from './projectListRow.module.scss';

const ProjectRow = ({ project, statusColumn }) => {
  const statusLabelsArr = [];

//TODO KS Returning lower case project list  
  const projectName = project.name
  console.log(`ProjectListRow line 19 ${projectName}`)
  console.log(projectName)
  

  // Display status indicators if present
  if (statusColumn && statusColumn.length > 0) {
    for (let i = 0; i < 4 && !(i >= statusColumn.length); i += 1) {
      statusLabelsArr.push(statusColumn[i]);
    }

    return (
      <tr>
        <td className={title}>
          <Link to={`/project/${project.id}`} className={title}>
            {project.name}
          </Link>
          <LetterGradeContainer ghrepos={project.product.grades} />
        </td>
        {statusColumn.length > 0 && statusLabelsArr.length > 0
          ? statusLabelsArr.map(statusData => {
              return (
                <td
                  key={statusData.id}
                  className={
                    statusData.display === true ? statusColumns : hiddenStatus
                  }
                >
                  <LabelDropdown
                    labels={statusData.labels}
                    project={project}
                    statusData={statusData}
                  />
                </td>
              );
            })
          : ''}
      </tr>
    );
  }

  //console.log("PROJECT: %O", project)


  return (
    <tr>
      <td className={title}>
        <Link to={`/project/${project.id}`} className={title}>
          {project.name}
        </Link>
        <LetterGradeContainer
          ghrepos={project.product.grades}
          name={project.name}
        />
      </td>
    </tr>
  );
};

export default ProjectRow;
