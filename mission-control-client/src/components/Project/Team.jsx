import React from 'react';

import styles from '../../styles/team.module.scss';

//Takes in an array of project roles
const buildTeamList = team => {
  const teamList = {};
  //Looping through the array of project roles
  team.forEach(member => {
    //Destructuring out Roles and People from the project role
    const { role, person } = member;
    //Ternary checking if role already exists in the hash table
    teamList[role.title]
      ? (teamList[role.title] = [
          //And appending the person to that role
          ...teamList[role.title],
          person,
        ])
      : // If the role does not exist, creates new one and inputs the person's name
        (teamList[role.title] = [person]);
  });
  return teamList;
};

export default ({ team }) => {
  const renderedTeam = buildTeamList(team);
  return (
    <div className={styles['team-container']}>
      <h2>Team</h2>
      {Object.keys(renderedTeam).map(role => {
        return (
          <div className={styles['member-container']}>
            <h3>{role}</h3>
            {renderedTeam[role].map(name => {
              return (
                <div className={styles['members']}>
                  <img src={name.avatar} className={styles['avatar']} />
                  <p className={styles['team-names']}>
                    {name.firstName} {name.lastName}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
