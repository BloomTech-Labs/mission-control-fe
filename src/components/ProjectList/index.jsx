import React from 'react';
import { useQuery } from 'urql';
import { PROJECT_LIST_VIEW as query } from './Queries/projectQueries';

import ProjectListContainer from './ProjectListContainer';
import ProjectListRow from './ProjectListRow';

// ProjectListView is the default view when a user signs into the application
// The PROJECT_LIST_VIEW query matches against the currently authenticated user
// and returns a list of projects that they are authorized to view.

const ProjectListView = () => {
  const [state] = useQuery({ query });
  const { data } = state;

  const projects = [];

  data &&
    data.programs[0].products.map(product =>
      projects.push(product.projects[0])
    );

  const columns = data && data.programs[0].columns;

  console.log('programs', data && data.programs);

  if (data && projects.length) {
    return (
      <ProjectListContainer status={columns}>
        {projects.map(project => (
          <ProjectListRow key={project.id} project={project} status={columns} />
        ))}
      </ProjectListContainer>
    );
  }
  return <h1>loading</h1>;
};

export default ProjectListView;
