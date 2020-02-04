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
  const markAbsent = e => {
    e.preventDefault();
    e.stopPropagation();
    const deleted = e.target.previousSibling.textContent;
    const newAttendees = attendees.filter(({ name }) => {
      return name !== deleted;
    });
    const deletedAttendee = attendees.filter(({ name }) => {
      return name === deleted;
    });
    const newAbsentees = [...absentees, ...deletedAttendee];
    setAttendees(newAttendees);
    setAbsentees(newAbsentees);
  };

  const markAttended = e => {
    e.preventDefault();
    e.stopPropagation();
    const attended = e.target.previousSibling.textContent;
    const newAttendee = absentees.filter(({ name }) => {
      return name === attended;
    });
    const newAttendees = [...attendees, ...newAttendee];
    const newAbsentees = absentees.filter(({ name }) => {
      return name !== attended;
    });
    setAttendees(newAttendees);
    setAbsentees(newAbsentees);
  };

  // takes in two arrays attendance, and all project managers
  const removeAllAttended = (attendedBy, allManagers) => {
    return allManagers.filter(({ email }) => {
      // filters by email if they are already attending or logged in
      return !(attendedBy.includes(email) || email === user.email);
    });
  };

  // if (fetching) return <h1>Loading</h1>;
  // if (data && data.project) {
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
                action="Remove"
                name={name}
                email={email}
                user={user}
                markAbsent={markAbsent}
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
                  key={`attendance${name}`}
                  action="Add"
                  name={name}
                  email={email}
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
  // }
  // return <h1>No project found</h1>;
};
