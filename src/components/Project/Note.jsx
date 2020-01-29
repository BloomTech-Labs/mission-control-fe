import React, { useState } from 'react';
import StarRatings from 'react-star-ratings';

import NoteFeedEdit from './NoteFeedEdit';

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
  editNoteBtn,
} from './Notes.module.scss';

const Note = ({ note, user, projectId, projectManagers }) => {
  const [expandedList, setExpandedList] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const { author, topic, content, rating, attendedBy, tags } = note;

  return isEditing === false ? (
    <section className={projectNote}>
      <div className={avatarContainer}>
        <img
          src={'https://ca.slack-edge.com/T4JUEB3ME-U9E7020TX-4e37d09c9c61-512'}
          alt={'Holdy'}
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
          >
            {attendedBy.map(attendee => {
              return (
                <div className={miniAvatarContainer}>
                  <img
                    src={
                      'https://ca.slack-edge.com/T4JUEB3ME-U9E7020TX-4e37d09c9c61-512'
                    }
                    alt="avatar"
                  />
                  <p>{attendee.name}</p>
                </div>
              );
            })}
          </div>
          <button
            className={editNoteBtn}
            onClick={() => setIsEditing(!isEditing)}
          >
            Edit
          </button>
        </div>
      </div>
    </section>
  ) : (
    <NoteFeedEdit
      id={note.id}
      note={note}
      user={user}
      projectId={projectId}
      projectManagers={projectManagers}
      setIsEditing={setIsEditing}
      isEditing={isEditing}
    />
  );
};

export default Note;
