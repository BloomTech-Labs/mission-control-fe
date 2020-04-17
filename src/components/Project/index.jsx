import React, { useEffect, useState } from 'react';
import { useQuery } from 'urql';

import NoteEditor from './NoteEditor';
import NotesFeed from './NoteFeed';
import Team from './Team';

import Header from './Header';
import Grade from './Grade';
import GitHubRepos from './GitHubRepos';
import ProjectStatus from './ProjectStatus/index';

import {
  parentProjectContainer,
  projectPageContents,
  projectContainer,
  editorFeedContainer,
  teamContainer,
  gradeContainer,
} from './Project.module.scss';

import {
  PROJECT_VIEW_QUERY as projectViewQuery,
  GET_USER_ROLE as getUserRoleQuery,
} from './Queries';

const Project = props => {
  const { id } = props.match.params;
  const [state, executeQuery] = useQuery({
    query: projectViewQuery,
    variables: { id },
  });
  const { data, fetching, error } = state;

  const [user, setUser] = useState(false);

  const [result] = useQuery({
    query: getUserRoleQuery,
    variables: { email: data ? data.me.email : '' },
  });

  useEffect(() => {
    // console.log('Current user: %O', result.data);
    if (result.data && result.data.person) {
      setUser(result.data.person.role.privateNote);
    }
  }, [result.data]);

  if (error) {
    return (
      <p>
        Error "PROJECT_VIEW_QUERY": {error.name} {error.message}
      </p>
    );
  }

  if (fetching) {
    return <p>Please Wait... Loading...</p>;
  }

  if (!data || !data.project) {
    return (
      <h2>
        <span role="img">Project Not Found 🤷‍♂️</span>
      </h2>
    );
  }

  console.log('PROJECT_VIEW_QUERY DATA: %O', data);
  return (
    <div className={parentProjectContainer}>
      <div className={projectPageContents}>
        <div>
          <Header projectId={id} />
        </div>
        <div className={projectContainer}>
          <div className={editorFeedContainer}>
            <ProjectStatus projectStatus={data.project.status} />
            <h2>Repository Statistics</h2>
            <GitHubRepos
              githubRepos={data.project.product.githubRepos}
              productId={data.project.product.id}
              executeQuery2={executeQuery}
            />
            <div className={gradeContainer}>
              <Grade
                githubRepos={data.project.product.githubRepos}
                executeQuery={executeQuery}
              />
            </div>
            <h2>Project Notes</h2>
            {user === true ? (
              <NoteEditor
                executeQuery={executeQuery}
                user={data.me}
                projectId={id}
                projectManagers={data.project.projectManagers}
              />
            ) : null}

            <NotesFeed projectId={id} privateBol={user} />
          </div>
          <div className={teamContainer}>
            <Team projectId={id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
