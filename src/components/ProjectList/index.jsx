import React from 'react';
import { useQuery } from 'urql';
import { PROJECT_LIST_VIEW as query } from './Queries/projectQueries';
import ProjectListContainer from './ProjectListContainer';
import ProjectListRow from './ProjectListRow';
import Settings from '../Settings/Settings';

// ProjectListView is the default view when a user signs into the application
// The PROJECT_LIST_VIEW query matches against the currently authenticated user
// and returns a list of projects that they are authorized to view.

const ProjectListView = () => {
  const [state] = useQuery({ query });
  const { data, fetching, error } = state;
  const projects = [];

  data && data.programs[0].products.map(product => projects.push(product.projects[0]) );

  const columns = data && data.programs[0].statuses;

  if (fetching){
    return <p>Loading...</p>
  } else if (error){
    return <p>Error "PROJECT_LIST_VIEW": {error.name} {error.message}</p>
  } else if (data && projects.length) {
    return (
      <div>
        <Settings />
        <ProjectListContainer statusColumn={columns}>
          {projects.map(project => (
            <ProjectListRow
              key={project.id}
              project={project}
              statusColumn={columns}
            />
          ))}
        </ProjectListContainer>
      </div>
    );
  }
};

export default ProjectListView;