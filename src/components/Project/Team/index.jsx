import React from 'react';
import { useQuery } from 'urql';
import { TEAM_QUERY as query } from '../Queries';

import {
  teamContainer,
  teamTitle,
  memberContainer,
  members,
  avatar,
  teamNames,
  teamMemberTitle,
} from './Team.module.scss';
import { checkNullAvatar } from '../../../utils';

const Team = ({ projectId }) => {
  const [state] = useQuery({ query, variables: { id: projectId } });

  const { data, fetching } = state;

  if (data && data.project) {
    const {
      project: { team, projectManagers },
    } = data;

    if (fetching) return <h1>Loading</h1>;

    return (
      <aside className={teamContainer}>
        <h2 className={teamTitle}>Team</h2>
        <div className={memberContainer}>
          <h3 className={teamMemberTitle}>Manager</h3>
          {projectManagers.map(managers => {
            return (
              <section className={members} key={managers.name}>
                <img
                  src={checkNullAvatar(managers.avatar)}
                  alt={managers.name}
                  className={avatar}
                />
                <p className={teamNames}>{managers.name}</p>
              </section>
            );
          })}
          <h3 className={teamMemberTitle}>Team</h3>
          {team.map(teammate => {
            return (
              <section className={members} key={teammate.name}>
                <img
                  src={checkNullAvatar(teammate.avatar)}
                  alt={teammate.name}
                  className={avatar}
                />
                <p className={teamNames}>{teammate.name}</p>
              </section>
            );
          })}
        </div>
      </aside>
    );
  }
  return <h1>No team found</h1>;
};

export default Team;
