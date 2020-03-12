import React, { useEffect, useState } from 'react';
import { useQuery } from 'urql';

import NoteEditor from './NoteEditor';
import NotesFeed from './NoteFeed';
import Team from './Team';

import Header from './Header';
import Grade from './Grade';
import GitHubRepos from './GitHubRepos';

import {
  parentProjectContainer,
  projectPageContents,
  projectContainer,
  editorFeedContainer,
  teamContainer,
  gradeContainer,
} from './Project.module.scss';

import { PROJECT_VIEW_QUERY as query } from './Queries';
import { GET_USER_ROLE as userQuery } from './Queries';

const Project = props => {
  const { id } = props.match.params;
  const [state, executeQuery] = useQuery({ query, variables: { id } });
  const { data, fetching } = state;

  const [user, setUser] = useState(false);

  const [result] = useQuery({
    query: userQuery,
    variables: { email: data ? data.me.email : '' },
  });

  useEffect(() => {
    if (result.data) {
      setUser(result.data.person.role.privateNote);
    }
  }, [data]);

  return data ? (
    <div className={parentProjectContainer}>
      <div className={projectPageContents}>
        <div>
          <Header projectId={id} />
        </div>
        <div className={projectContainer}>
          <div className={editorFeedContainer}>
            <h2>Repos Code Health</h2>
            <GitHubRepos />
            <div className={gradeContainer}>
              <Grade ccrepos={data.project.product.grades} />
            </div>
            <h2>Project Notes</h2>
            {user == true ? (
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
  ) : (
    <h1>Loading</h1>
  );
};

export default Project;
