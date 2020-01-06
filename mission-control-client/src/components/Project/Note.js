import React, { useState } from 'react';
import Rating from '@material-ui/lab/Rating';

export default ({
  author,
  title,
  body,
  rating,
  attachment,
  attendees,
  tags,
}) => {
  const [expanded, setExpanded] = useState(false);
  const { avatar, firstName } = author;
  return (
    <section>
      <div className="avatar-container">
        <img src={avatar} alt={firstName} className="avatar" />
      </div>
      <div className="note-container">
        <div className="note-header">
          {title}
          <Rating name="rating" value={rating} readOnly />
        </div>
        <div className="note-body">{body}</div>
        <div className="note-footer">
          <div
            className={expanded ? 'expanded' : 'linear'}
            onClick={() => setExpanded(!expanded)}
          >
            {attendees.map(attendee => {
              return (
                <div className="mini-avatar-container">
                  <img src={attendee.avatar} />
                  <p>
                    {attendee.firstName} {attendee.lastName}
                  </p>
                </div>
              );
            })}
          </div>
          <button className="edit-note-btn">Edit</button>
        </div>
      </div>
    </section>
  );
};
