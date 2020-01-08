import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

import styles from '../../styles/editor.module.scss';

// avatar of person signed in
// note title
// note body
// attendees
// rating
// attachment

export default ({ user, team }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [rating, setRating] = useState('');
  const [expanded, setExpanded] = useState(false);
  const [attendees, setAttendees] = useState(team);

  const deleteAttendee = e => {
    e.preventDefault();
    e.stopPropagation();
    const deleted = e.target.previousSibling.textContent.split(' ');
    const newAttendees = attendees.filter(({ firstName, lastName }) => {
      return firstName != deleted[0] && lastName != deleted[1];
    });
    setAttendees(newAttendees);
  };

  return (
    <div>
      <h2>Project Notes</h2>
      <div className={styles['editor-container']}>
        <div className={styles['avatar-container']}>
          <img src={user.avatar} />
        </div>
        <form className={styles['form-container']}>
          <div className={styles['form-header']}>
            <input
              placeholder="Meeting Topic"
              type="text"
              name="title"
              onChange={e => setTitle(e.target.value)}
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
            <div
              className={expanded ? styles['expanded'] : styles['collapsed']}
              onClick={() => setExpanded(!expanded)}
            >
              <div className={styles['attendees-avatars']}>
                {attendees.map(attendee => {
                  return (
                    <div className={styles['mini-avatar-container']}>
                      <img src={attendee.avatar} />
                      <p>
                        {attendee.firstName} {attendee.lastName}
                      </p>
                      <button onClick={deleteAttendee}>x</button>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="button-container">
              <button>Attach</button>
              <button>Save</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
