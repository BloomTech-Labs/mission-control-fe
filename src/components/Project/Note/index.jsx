import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

import EditIcon from '@material-ui/icons/Edit';
import Fab from '@material-ui/core/Fab';
import { Label } from 'semantic-ui-react';

import NoteFeedEdit from '../NoteFeedEdit';
import extractAvatar from '../../../utils/managers';

import {
  section,
  projectNote,
  avatarContainer,
  avatar,
  contentContainer,
  noteContainer,
  noteHeader,
  starRating,
  noteBody,
  noteFooter,
  expanded,
  miniAvatarContainer,
  collapsed,
} from './Notes.module.scss';

const Note = ({ note, user, projectManagers, editable }) => {
  const [expandedList, setExpandedList] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { topic, content, rating, attendedBy } = note;

  // Removes redundant avatar of signed-in user
  const displayedAttendees = attendedBy.filter(person => person.email !== user);

  return isEditing === false ? (
    <section className={projectNote}>
      <div className={avatarContainer}>
        <img
          src={extractAvatar(note.author.email)}
          alt={`avatar of ${note.author.name}`}
          className={avatar}
        />
      </div>
      <div className={noteContainer}>
        <div className={contentContainer}>
          <div className={noteHeader}>
            <h2>{topic}</h2>
            <StarRatings
              numberOfStars={3}
              rating={rating}
              className={starRating}
              starRatedColor="rgb(245,73,135)"
              starEmptyColor="rgba(245,73,135,.2)"
              starDimension="20px"
              starSpacing=".5px"
            />
          </div>
          <div className={noteBody}>{content}</div>
        </div>
        <div className={noteFooter}>
          <div
            className={expandedList ? expanded : collapsed}
            onClick={() => setExpandedList(!expandedList)}
            role="presentation"
          >
            {displayedAttendees.map(attendee => {
              return (
                <div className={miniAvatarContainer}>
                  <img
                    src={extractAvatar(attendee.email)}
                    alt={`avatar of ${attendee.name}`}
                  />
                  <button type="button">
                    <Label disabled size="small">
                      {attendee.name}
                    </Label>
                  </button>
                </div>
              );
            })}
          </div>
          {editable ? (
            <Fab color="default" onClick={() => setIsEditing(true)}>
              <EditIcon />
            </Fab>
          ) : (
            false
          )}
        </div>
      </div>
    </section>
  ) : (
    <NoteFeedEdit
      key={note.id}
      id={note.id}
      note={note}
      user={user}
      projectManagers={projectManagers}
      setIsEditing={setIsEditing}
    />
  );
};

export default Note;
