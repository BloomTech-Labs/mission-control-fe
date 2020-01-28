import React from 'react';

import styles from '../../styles/team.module.scss';

// Takes in an array of project roles
// const buildTeamList = team => {
//   const teamList = {};
//   // Looping through the array of project roles
//   team.forEach(member => {
//     // Destructuring out Roles and People from the project role
//     const { role, person } = member;
//     // Ternary checking if role already exists in the hash table
//     teamList[role.title]
//       ? (teamList[role.title] = [
//           // And appending the person to that role
//           ...teamList[role.title],
//           person,
//         ])
// // If the role does not exist, creates new one and inputs the person's name
//         (teamList[role.title] = [person]);
//   });
//   return teamList;
// };

export default ({ team, teamLead, sectionLead }) => {
  return (
    <div className={styles['team-container']}>
      <h2>Team</h2>
      <div className={styles['member-container']}>
        <h3>Section Lead</h3>
        <div className={styles.members}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png"
            alt={sectionLead.name}
            className={styles.avatar}
          />
          <p className={styles['team-names']}>{sectionLead.name}</p>
        </div>
        <h3>Team Lead</h3>
        <div className={styles.members}>
          <img
            src="https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png"
            alt={teamLead.name}
            className={styles.avatar}
          />
          <p className={styles['team-names']}>{teamLead.name}</p>
        </div>
        {team.map(member => {
          return (
            <div className={styles.members}>
              <img
                src="https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png"
                alt={member.name}
                className={styles.avatar}
              />
              <p className={styles['team-names']}>{member.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
