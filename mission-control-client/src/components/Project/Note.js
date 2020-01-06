import React from 'react';
import Rating from '@material-ui/lab/Rating';

attendees = [
  { photo: 'xyz', ID: '123' },
  { photo: 'abc', ID: '456' },
  { photo: 'def', ID: '789' },
];

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
  const { photo, name } = author;
  return (
    <section>
      <div className="avatar-container">
        <img src={photo} alt={name} className="avatar" />
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
                  <img src={attendee.photo} />
                  <p>{attendee.name}</p>
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
