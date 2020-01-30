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

const Team = ({ projectId }) => {
  const [state] = useQuery({ query, variables: { id: projectId } });

  const { data, fetching } = state;

  if (data && data.project) {
    const {
      project: { team, teamLead, sectionLead },
    } = data;

    if (fetching) return <h1>Loading</h1>;

    return (
      <aside className={teamContainer}>
        <h2 className={teamTitle}>Team</h2>
        <div className={memberContainer}>
          <h3 className={teamMemberTitle}>Section Lead</h3>
          <section className={members}>
            <img
              className={avatar}
              src="https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png"
              alt={sectionLead.name}
            />
            <p className={teamNames}>{sectionLead.name}</p>
          </section>
          <h3 className={teamMemberTitle}>Team Lead</h3>
          <section className={members}>
            <img
              src="https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png"
              alt={teamLead.name}
              className={avatar}
            />
            <p className={teamNames}>{teamLead.name}</p>
          </section>
          <h3 className={teamMemberTitle}>Team</h3>
          {team.map(({ name, email }) => {
            return (
              <section className={members} key={email}>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png"
                  alt={name}
                  className={avatar}
                />
                <p className={teamNames}>{name}</p>
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
