import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

import styles from '../../styles/notes.module.scss';

export default ({
  note: { author, title, body, rating, attachment, attendees, tags },
}) => {
  const [expanded, setExpanded] = useState(false);
  const { avatar, firstName } = author;
  return (
    <section className={styles['project-note']}>
      <div className={styles['avatar-container']}>
        <img src={avatar} alt={firstName} className={styles['avatar']} />
      </div>
      <div className={styles['note-container']}>
        <div className={styles['content-container']}>
          <div className={styles['note-header']}>
            <h2>{title}</h2>
            <StarRatings
              numberOfStars={3}
              rating={rating}
              className={styles['star-rating']}
              starRatedColor="rgb(245,73,135)"
              starEmptyColor="rgba(245,73,135,.2)"
              starDimension="20px"
              starSpacing=".5px"
            />
          </div>
          <div className={styles['note-body']}>{body}</div>
        </div>
        <div className={styles['note-footer']}>
          <div
            className={expanded ? styles['expanded'] : styles['collapsed']}
            onClick={() => setExpanded(!expanded)}
          >
            {attendees.map(attendee => {
              return (
                <div className={styles['mini-avatar-container']}>
                  <img src={attendee.avatar} />
                  <p>
                    {attendee.firstName} {attendee.lastName}
                  </p>
                </div>
              );
            })}
          </div>
          <button className={styles['edit-note-btn']}>Edit</button>
        </div>
      </div>
    </section>
  );
};
