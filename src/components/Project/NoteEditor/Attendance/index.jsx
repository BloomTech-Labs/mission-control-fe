import React from 'react';

import Member from './Member/index';
import styles from '../NoteEditor.module.scss';

export default ({
  attendees,
  setAttendees,
  absentees,
  setAbsentees,
  expandedAttendees,
  setExpandedAttendees,
  expandedAbsent,
  setExpandedAbsent,
  user,
}) => {
  const handleAttendance = (e, absent) => {
    e.preventDefault();
    e.stopPropagation();
    const person = e.target.previousSibling.textContent;
    if (absent) {
      const newAbsentee = attendees.filter(({ name }) => name === person);
      const newAttendees = attendees.filter(({ name }) => name !== person);
      const newAbsentees = [...absentees, ...newAbsentee];
      setAttendees(newAttendees);
      setAbsentees(newAbsentees);
    } else {
      const newAttendee = absentees.filter(({ name }) => name === person);
      const newAbsentees = absentees.filter(({ name }) => name !== person);
      const newAttendees = [...attendees, ...newAttendee];
      setAttendees(newAttendees);
      setAbsentees(newAbsentees);
    }
  };

  // takes in two arrays attendance, and all project managers
  const removeAllAttended = (attendedBy, allManagers) => {
    return allManagers.filter(({ email }) => {
      // filters by email if they are already attending or logged in
      return !(attendedBy.includes(email) || email === user.email);
    });
  };

  return (
    <div className={styles.attendance}>
      <div
        className={expandedAttendees ? styles.expanded : styles.collapsed}
        onClick={() => setExpandedAttendees(!expandedAttendees)}
        role="presentation"
      >
        Attendees
        <div className={styles['attendees-avatars']}>
          {attendees.map(({ name, email }) => {
            return (
              <Member
                key={`attendance${name}`}
                action="Remove"
                name={name}
                email={email}
                user={user}
                handleAttendance={handleAttendance}
              />
            );
          })}
        </div>
      </div>
      {!!absentees.length && (
        <div
          className={expandedAbsent ? styles.expanded : styles.collapsed}
          onClick={() => setExpandedAbsent(!expandedAbsent)}
          role="presentation"
        >
          Absent
          <div className={styles['attendees-avatars']}>
            {removeAllAttended(attendees, absentees).map(({ name, email }) => {
              return (
                <Member
                  key={`absence${name}`}
                  action="Add"
                  name={name}
                  email={email}
                  user={user}
                  handleAttendance={handleAttendance}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
