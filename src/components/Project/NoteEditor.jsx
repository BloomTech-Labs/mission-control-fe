import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperclip } from '@fortawesome/free-solid-svg-icons';
import { Dropdown } from 'semantic-ui-react';
import managers from './data/managers';

import styles from './NoteEditor.module.scss';

const topicOptions = [
  { key: 'gd', value: 'General Discussion', text: 'General Discussion' },
  {
    key: 'pca',
    value: 'Product Cycle Approval',
    text: 'Product Cycle Approval',
  },
  {
    key: 'rca',
    value: 'Release Canvas Approval',
    text: 'Release Canvas Approval',
  },
];

export default ({ user }) => {
  const [topic, setTopic] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState(0);
  const [attendees, setAttendees] = useState([]);
  const [expandedAttendees, setExpandedAttendees] = useState(false);
  const [expandedAbsent, setExpandedAbsent] = useState(false);
  const [absentees, setAbsentees] = useState([]);

  const markAbsent = e => {
    e.preventDefault();
    e.stopPropagation();
    const deleted = e.target.previousSibling.textContent.split(' ');
    const newAttendees = attendees.filter(({ firstName, lastName }) => {
      return firstName !== deleted[0] && lastName !== deleted[1];
    });
    const deletedAttendee = attendees.filter(({ firstName, lastName }) => {
      return firstName === deleted[0] && lastName === deleted[1];
    });
    const newAbsentees = [...absentees, ...deletedAttendee];
    setAttendees(newAttendees);
    setAbsentees(newAbsentees);
  };

  const markAttended = e => {
    e.preventDefault();
    e.stopPropagation();
    const attended = e.target.previousSibling.textContent.split(' ');
    const newAttendee = absentees.filter(({ firstName, lastName }) => {
      return firstName === attended[0] && lastName === attended[1];
    });
    const newAttendees = [...attendees, ...newAttendee];
    const newAbsentees = absentees.filter(({ firstName, lastName }) => {
      return firstName !== attended[0] && lastName !== attended[1];
    });

    setAttendees(newAttendees);
    setAbsentees(newAbsentees);
  };

  return (
    <div className={styles['main-container']}>
      <h2>Project Notes</h2>
      <div className={styles['editor-container']}>
        <div className={styles['avatar-container']}>
          <img
            src="https://ca.slack-edge.com/T4JUEB3ME-ULLS6HX6G-22adeea32d11-72"
            alt={`avatar of ${user.name}`}
          />
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            console.log({
              topic,
              body,
              rating,
              attendees,
            });
          }}
          className={styles['form-container']}
        >
          <div className={styles['form-header']}>
            <Dropdown
              placeholder="Select Topic"
              inline
              options={topicOptions}
              onChange={(_, value) => {
                setTopic(value);
              }}
            />
            <StarRatings
              numberOfStars={3}
              name="rating"
              starRatedColors="rgb(245,73,135)"
              starHoverColor="rgb(245,73,135)"
              starEmptyColor="rgba(245,73,135,.2)"
              changeRating={rating => setRating(rating)}
              starDimension="20px"
              starSpacing=".5px"
              rating={rating}
            />
          </div>
          <div className={styles['body-container']}>
            <textarea
              className={styles['body-input']}
              placeholder="What's going on?"
              name="body"
              onChange={e => setBody(e.target.value)}
            />
          </div>
          <div className={styles['text-footer']}>
            <div className="attendance">
              <div
                className={
                  expandedAttendees ? styles['expanded'] : styles['collapsed']
                }
                onClick={() => setExpandedAttendees(!expandedAttendees)}
              >
                Attendees
                <div className={styles['attendees-avatars']}>
                  {managers.map(({ name, email, avatar }) => {
                    // check the email of the attendees
                    return (
                      <div className={styles['mini-avatar-container']}>
                        <img src={avatar} alt={`avatar of ${name}`} />
                        <p>{name}</p>
                        <button onClick={markAbsent}>x</button>
                      </div>
                    );
                  })}
                </div>
              </div>
              {!!absentees.length && (
                <div
                  className={
                    expandedAbsent ? styles['expanded'] : styles['collapsed']
                  }
                  onClick={() => setExpandedAbsent(!expandedAbsent)}
                >
                  Absent
                  <div className={styles['attendees-avatars']}>
                    {absentees.map(({ firstName, lastName, avatar }) => {
                      return (
                        <div className={styles['mini-avatar-container']}>
                          <img src={avatar} alt="avatar"/>
                          <p>
                            {firstName} {lastName}
                          </p>
                          <button onClick={markAttended}>x</button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className={styles['button-container']}>
              <button className={styles['attach-btn']}>
                <FontAwesomeIcon icon={faPaperclip} /> Attach
              </button>
              <button className={styles['save-btn']}>Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
