import React from 'react';
import { Link } from 'react-router-dom';
import mapTime from '../../../mappers/mapTime';
import { useQuery } from 'urql';
import { LABELS_QUERY as query } from '../Queries/projectQueries';
import { title, rtd, rtc } from './projectListRow.module.scss';
import { labelPreviewDesign } from '../../Settings/Settings.module.scss';

// Sanitize string inputs to remove Product prefix
const cleanName = str => {
  const match = str.match(/Labs \d{1,3} -(.+)/);
  return match[1];
};

const ProjectRow = ({ project }) => {
  console.log(project);

  const [state] = useQuery({ query, requestPolicy: 'cache-and-network' });

  const { data } = state;

  return (
    <tr>
      <td>
        <div></div>
      </td>
      <td className={title}>
        <Link to={`/project/${project.id}`} className={title}>
          {cleanName(project.name)}
        </Link>
      </td>
      <td>{project.sectionLead.name}</td>
      <td>{project.teamLead.name}</td>
      <td className={rtd}>
        {project.notes.length
          ? mapTime(project.notes[0].updatedAt)
          : mapTime(project.updatedAt)}{' '}
        ago
      </td>
      <td className={rtc}>
        <div
          style={{ background: `${data && data.labels[0].color}` }}
          className={labelPreviewDesign}
        >
          {data && data.labels[0].name}
          {/* {!project.projectStatus ? (
            <div>Add Label</div>
          ) : (
            <div>{project.projectStatus.name}</div>
          )} */}
        </div>
      </td>
    </tr>
  );
};

export default ProjectRow;
