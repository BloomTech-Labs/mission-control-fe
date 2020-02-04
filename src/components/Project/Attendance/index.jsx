import React from 'react';

import Member from './Member/index';

import styles from '../NoteEditor/NoteEditor.module.scss';

// temp array of all project managers
const tempPM = [
  {
    name: 'Bernie Durfee',
    email: 'bernie.durfee@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-ULLS6HX6G-22adeea32d11-72',
  },
  {
    name: 'Jess Martin',
    email: 'jess.martin@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UJVKYLMED-1fa60e08d02b-512',
  },
  {
    name: 'Elizabeth Lin',
    email: 'elizabeth.lin@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-ULGD0FZ5L-52e54f3a2c96-512',
  },
  {
    name: 'Parth Shah',
    email: 'parth.shah@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UQ8RC9QG3-5a7f8584c858-72',
  },
  {
    name: 'Ryan Hamblin',
    email: 'ryan.hamblin@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-U5SF97A1Z-3e40fb644cb0-512',
  },
  {
    name: 'Dev Team',
    email: 'missioncontrolpm@gmail.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-USLACKBOT-sv41d8cd98f0-512',
  },
  {
    name: 'Jam Dimic',
    email: 'jam.dimic@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UP41N4TPB-d4ebc331c94c-48',
  },
  {
    name: 'Ryan Holdaway',
    email: 'ryan.holdaway@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-U9E7020TX-4e37d09c9c61-512',
  },
  {
    name: 'Alice Karsevar',
    email: 'alice.karsevar@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UGYKPV3PA-72c12c38e387-512',
  },
  {
    name: 'Edd Burke',
    email: 'edd.burke@lambdaschool.com',
    avatar: 'https://ca.slack-edge.com/T4JUEB3ME-UKW1FTYER-35b20bbc2498-48',
  },
];

export default ({ state, setState, user }) => {
  // takes in two arrays attendance, and all project managers
  const removeAllAttended = (attendedBy, projectManagers) => {
    return projectManagers.filter(({ email }) => {
      // filters by email if they are already attending or logged in
      return !(attendedBy.includes(email) || email === user.email);
    });
  };

  const markAbsent = e => {
    e.preventDefault();
    e.stopPropagation();
    const deleted = e.target.previousSibling.textContent;
    const newAttendees = state.attendees.filter(({ name }) => {
      return name !== deleted;
    });
    const deletedAttendee = state.attendees.filter(({ name }) => {
      return name === deleted;
    });
    const newAbsentees = [...state.absentees, ...deletedAttendee];
    setState({ ...state, attendees: newAttendees, absentees: newAbsentees });
  };

  const markAttended = e => {
    e.preventDefault();
    e.stopPropagation();
    const attended = e.target.previousSibling.textContent;
    const newAttendee = state.absentees.filter(({ name }) => {
      return name === attended;
    });
    const newAttendees = [...state.attendees, ...newAttendee];
    const newAbsentees = state.absentees.filter(({ name }) => {
      return name !== attended;
    });
    setState({ ...state, attendees: newAttendees, absentees: newAbsentees });
  };

  return (
    <div className={styles.attendance}>
      <div
        className={state.expandedAttendees ? styles.expanded : styles.collapsed}
        onClick={() =>
          setState({
            ...state,
            expandedAttendees: !state.expandedAttendees,
          })
        }
        role="presentation"
      >
        Attendees
        <div className={styles['attendees-avatars']}>
          {state.attendees.map(({ name, email }) => {
            return (
              <Member
                action="Remove"
                name={name}
                email={email}
                state={state}
                setState={setState}
                user={user}
                markAbsent={markAbsent}
              />
            );
          })}
        </div>
      </div>
      {!!state.absentees.length && (
        <div
          className={state.expandedAbsent ? styles.expanded : styles.collapsed}
          onClick={() =>
            setState({
              ...state,
              expandedAbsent: !state.expandedAbsent,
            })
          }
          role="presentation"
        >
          Absent
          <div className={styles['attendees-avatars']}>
            {removeAllAttended(state.attendees, tempPM).map(
              ({ name, email }) => {
                return (
                  <Member
                    action="Add"
                    name={name}
                    email={email}
                    state={state}
                    setState={setState}
                    user={user}
                    markAttended={markAttended}
                  />
                );
              }
            )}
          </div>
        </div>
      )}
    </div>
  );
};
