import React from 'react';
import { Link } from 'react-router-dom';
import mapTime from '../../../mappers/mapTime';
import LetterGradeContainer from '../CodeClimate/LetterGradeContainer.jsx';

import { title, rtd } from './projectListRow.module.scss';

const ProjectRow = ({ project }) => {
  return (
    <tr>
      <td>
        <div></div>
      </td>
      <td className={title}>
        <Link to={`/project/${project.id}`} className={title}>
          {project.name}
        </Link>
        <LetterGradeContainer ccrepos={project.product.grades} />
      </td>
      <td className={rtd}>
        {project.notes.length
          ? mapTime(project.notes[0].updatedAt)
          : mapTime(project.updatedAt)}{' '}
        ago
      </td>
    </tr>
  );
};

export default ProjectRow;
