import React from 'react';
import { Link } from 'react-router-dom';

import LetterGradeContainer from '../CodeClimate/LetterGradeContainer.jsx';
import LabelDropdown from '../LabelDropdown/index';

import { title, statusColumns } from './projectListRow.module.scss';
//this component renders the letter grade container underneath the specific project it's associated with.
const ProjectRow = ({ project, statusColumn }) => {
  const statusLabelsArr = [];
  var i;
  if (statusColumn.length > 0) {
    for (i = 0; i < 4 && !(i >= statusColumn.length); i++) {
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
                <td key={statusData.id} className={statusColumns}>
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
  } else
    return (
      <tr>
        <td className={title}>
          <Link to={`/project/${project.id}`} className={title}>
            {project.name}
          </Link>
          <LetterGradeContainer ghrepos={project.product.grades} name={project.name} />
        </td>
      </tr>
    );
};

export default ProjectRow;