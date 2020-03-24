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
  projectStatusContainer,
} from './Project.module.scss';

import { PROJECT_VIEW_QUERY as query } from './Queries';
import { GET_USER_ROLE as userQuery } from './Queries';

const Project = props => {
  const { id } = props.match.params;
  const [state, executeQuery] = useQuery({ query, variables: { id } });
  const { data, fetching, error } = state;

  const [user, setUser] = useState(false);

  const [result] = useQuery({
    query: userQuery,
    variables: { email: data ? data.me.email : '' },
  });

  useEffect(() => {
    if (result.data) {
      setUser(result.data.person.role.privateNote);
    }
  }, [result.data]);

  if (fetching && !data) {
    return <p>Please Wait... Loading...</p>;
  } else if (error) {
    return (
      <p>
        Error "PROJECT_VIEW_QUERY": {error.name} {error.message}
      </p>
    );
  } else if (data) {
    return (
      <div className={parentProjectContainer}>
        <div className={projectPageContents}>
          <div>
            <Header projectId={id} />
          </div>
          <div className={projectContainer}>
            <div className={editorFeedContainer}>
              <div className={projectStatusContainer}>
                <h2>Project Status</h2>
                <ProjectStatus
                  projectId={id}
                  label={data.project.projectStatus.labels}
                />
              </div>
              <h2>Repository Statistics</h2>
              <GitHubRepos
                ghrepos={data.project.product.GHRepos}
                productId={data.project.product.id}
                executeQuery2={executeQuery}
              />
              <div className={gradeContainer}>
                <Grade
                  ghrepos={data.project.product.grades}
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
  } else {
    return <p>End of line.</p>;
  }
};

export default Project;
