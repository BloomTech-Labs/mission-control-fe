import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

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
  const [attendees, setAttendees] = useState(team);

  return (
    <div className="editor-container">
      <div className="avatar-container">
        <img src={user.avatar} className="mini-avatar" />
      </div>
      <form>
        <div className="form-header">
          <input
            type="text"
            name="title"
            onChange={e => setTitle(e.target.value)}
          />
          <StarRatings
            numberOfStars={3}
            name="rating"
            starRatedColors="rgb(245,73,135)"
            starHoverColor="rgb(245,73,135)"
            changeRating={rating => setRating(rating)}
            starDimension="20px"
            starSpacing=".5px"
          />
        </div>
        <textarea name="body" onChange={e => setBody(e.target.value)} />
        <div className="text-container-footer">
          <div className="attendes-avatars">
            {attendees.map(attendee => {
              return (
                <div className={'mini-avatar-container'}>
                  <img src={attendee.avatar} />
                  <p>
                    {attendee.firstName} {attendee.lastName}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </div>
  );
};
