import React from 'react';

import {
  teamContainer,
  teamTitle,
  memberContainer,
  members,
  avatar,
  teamNames,
  teamMemberTitle,

} from './Team.module.scss';

const Team = ({ team, teamLead, sectionLead }) => {
  return (
    <div className={teamContainer}>
      <h2 className={teamTitle} >Team</h2>
      <div className={memberContainer}>
        <h3>Section Lead</h3>
        <div className={members}>
          <img
            className={avatar}
            src="https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png"
            alt={sectionLead.name}
          />
          <p className={teamNames}>{sectionLead.name}</p>
        </div>
        <h3 className={teamMemberTitle}>Team Lead</h3>
        <div className={members}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png"
            alt={teamLead.name}
            className={avatar}
          />
          <p className={teamNames}>{teamLead.name}</p>
        </div>
        <h3 className={teamMemberTitle}>Team</h3>
        {team.map(member => {
          return (
            <div className={members}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png"
                alt={member.name}
                className={avatar}
              />
              <p className={teamNames}>{member.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
