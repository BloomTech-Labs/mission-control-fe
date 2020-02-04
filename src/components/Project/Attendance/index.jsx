import React from 'react';

import Member from './Member/index';

import styles from '../NoteEditor/NoteEditor.module.scss';

export default ({ state, setState, user }) => {
  // removes redundant user avatar
  const removeUserAvatar = arr => {
    return arr.filter(person => person.email !== user.email);
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
          {removeUserAvatar(state.attendees).map(({ name, email }) => {
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
            {removeUserAvatar(state.absentees).map(({ name, email }) => {
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
            })}
          </div>
        </div>
      )}
    </div>
  );
};
