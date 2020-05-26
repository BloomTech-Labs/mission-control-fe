import React from 'react';
import LinearProgress from '@material-ui/core/LinearProgress';
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

  if (fetching) {
    return <LinearProgress color="secondary" />;
  }

  if (data && data.project) {
    const {
      project: { teamMembers, teamManagers },
    } = data;

    return (
      <aside className={teamContainer}>
        <h2 className={teamTitle}>Team</h2>
        <div className={memberContainer}>
          <h3 className={teamMemberTitle}>Managers</h3>
          {teamManagers.map(teamManager => {
            return (
              <section className={members} key={teamManager.person.name}>
                <img
                  src={checkNullAvatar(teamManager.person.avatar)}
                  alt={teamManager.person.name}
                  className={avatar}
                />
                <p className={teamNames}>
                  {teamManager.person.name} ({teamManager.role.name})
                </p>
              </section>
            );
          })}
          <h3 className={teamMemberTitle}>Members</h3>
          {teamMembers.map(teamMember => {
            return (
              <section className={members} key={teamMember.person.name}>
                <img
                  src={checkNullAvatar(teamMember.person.avatar)}
                  alt={teamMember.person.name}
                  className={avatar}
                />
                <p className={teamNames}>
                  {teamMember.person.name} ({teamMember.role.name})
                </p>
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
