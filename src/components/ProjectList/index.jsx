import React from 'react';
import { useQuery } from 'urql';
import { PROJECT_LIST_VIEW as query } from './projectQueries';

import ProjectListContainer from './ProjectListContainer';
import ProjectListRow from './ProjectListRow';

// ProjectListView is the default view when a user signs into the application
// The PROJECT_LIST_VIEW query matches against the currently authenticated user
// and returns a list of projects that they are authorized to view.

const ProjectListView = () => {
  const [state] = useQuery({ query });
  const { data } = state;

  if (data && data.me.projects.length) {
    const {
      me: { projects },
    } = data;

    return (
      <ProjectListContainer>
        {projects.map(project => (
          <ProjectListRow key={project.id} project={project} />
        ))}
      </ProjectListContainer>
    );
  }
  return <h1>loading</h1>;
};

export default ProjectListView;
