import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { Dropdown, Button as SemanticButton } from 'semantic-ui-react';
import { useMutation, useQuery } from 'urql';
// import extractAvatar from '../../../utils/managers';

import Attendance from './Attendance';
import DeleteNote from '../NoteFeed/Note/DeleteNote';

import {
  CREATE_NOTE as createNote,
  UPDATE_NOTE as updateNote,
  NOTE_FEED_QUERY as query,
} from '../Queries';

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

const NoteEditor = ({
  projectManagers,
  user,
  projectId,
  note,
  setIsEditing,
}) => {
  const [, executeQuery] = useQuery({
    query,
    variables: { id: projectId },
    requestPolicy: 'cache-and-network',
  });

  const [topic, setTopic] = useState((note && note.topic) || '');
  const [content, setContent] = useState((note && note.content) || '');
  const [rating, setRating] = useState((note && note.rating) || 0);
  const [privateNote, setPrivateNote] = useState(
    (note && note.privateNote) || false
  );
  const [attendees, setAttendees] = useState((note && note.attendedBy) || []);
  const [expandedAttendees, setExpandedAttendees] = useState(false);
  const [expandedAbsent, setExpandedAbsent] = useState(false);
  const [absentees, setAbsentees] = useState(projectManagers || []);
  const [validated, setValidated] = useState(false);
  const [notification, setNotification] = useState(false);

  const [, executeCreate] = useMutation(createNote);
  const [, executeUpdate] = useMutation(updateNote);

  useEffect(() => {
    if (topic && content && rating > 0) {
      setValidated(true);
    } else {
      setValidated(false);
    }
  }, [topic, content, rating]);

  // resets the form, as form.reset doesn't seem to affect React state
  const resetForm = () => {
    setTopic('');
    setContent('');
    setRating(0);
    setAttendees([]);
    setAbsentees(projectManagers);
    setExpandedAttendees(false);
    setExpandedAbsent(false);
    setValidated(false);
    setNotification(false);
  };

  const handleSubmit = async (e, type) => {
    switch (type) {
      case 'create':
        e.preventDefault();
        executeCreate({
          id: projectId,
          topic,
          content,
          rating,
          privateNote,
          // Extracts an array of emails from array of Person objects
          attendedBy: Array.from(attendees, ({ email }) => email),
          notification,
        });
        resetForm();
        executeQuery();
        // Temp fix to re-render page, will reload the whole page to populate note after creation.
        setTimeout(function() {
          window.location.href = `/project/${projectId}`;
        }, 350);
        break;
      case 'update':
        e.preventDefault();
        executeUpdate({
          id: note.id,
          topic,
          content,
          rating,
          privateNote,
          attendedBy: Array.from(attendees, ({ email }) => email),
        });
        setIsEditing(false);
        break;
      default:
        resetForm();
    }
  };

  return (
    <div>
      <div className={styles['main-container']}>
        <div className={styles['editor-container']}>
          <div className={styles['avatar-container']}>
            <img
              src={
                'https://cdn4.iconfinder.com/data/icons/political-elections/50/48-512.png'
              }
              alt="Avatar"
            />
          </div>
          <form
            onSubmit={e => {
              if (note) {
                handleSubmit(e, 'update');
              } else {
                handleSubmit(e, 'create');
              }
            }}
            className={styles['form-container']}
          >
            <div className={styles['form-header']}>
              <Dropdown
                placeholder="Select Topic"
                inline
                options={topicOptions}
                onChange={(_, { value }) => {
                  setTopic(value);
                }}
                value={topic}
              />
              <StarRatings
                numberOfStars={3}
                name="rating"
                starRatedColor="rgb(245,73,135)"
                starHoverColor="rgb(245,73,135)"
                starEmptyColor="rgba(245,73,135,.2)"
                changeRating={newRating => setRating(newRating)}
                starDimension="20px"
                starSpacing=".5px"
                rating={rating}
              />
            </div>
            <div className={styles['body-container']}>
              <textarea
                className={styles['body-input']}
                placeholder="What's going on?"
                name="content"
                onChange={e => setContent(e.target.value)}
                value={content}
              />
            </div>
            <div className={styles['text-footer']}>
              <Attendance
                user={user}
                attendees={attendees}
                absentees={absentees}
                setAttendees={setAttendees}
                setAbsentees={setAbsentees}
                expandedAttendees={expandedAttendees}
                setExpandedAttendees={setExpandedAttendees}
                expandedAbsent={expandedAbsent}
                setExpandedAbsent={setExpandedAbsent}
                projectId={projectId}
                projectManagers={projectManagers}
              />
              <div
                className={
                  expandedAbsent || expandedAttendees
                    ? styles['button-container-min']
                    : styles['button-container']
                }
              >
                {note ? (
                  [
                    <DeleteNote id={note.id} setIsEditing={setIsEditing} />,
                    <SemanticButton
                      color="default"
                      variant="outlined"
                      type="button"
                      onClick={() => {
                        setIsEditing(false);
                      }}
                    >
                      Cancel
                    </SemanticButton>,
                  ]
                ) : (
                  <label className={styles.notification} htmlFor="notification">
                    Email Notifications
                    <input
                      type="checkbox"
                      checked={notification}
                      id="notification"
                      name="notification"
                      onChange={() => setNotification(!notification)}
                    />
                  </label>
                )}

                {privateNote ? (
                  <SemanticButton
                    onClick={() => setPrivateNote(!privateNote)}
                    type="button"
                    //color="pink"
                    className={styles['privatetoggle-btn']}
                    variant="outlined"
                  >
                    PRIVATE
                  </SemanticButton>
                ) : (
                  <SemanticButton
                    onClick={() => setPrivateNote(!privateNote)}
                    type="button"
                    className="ui pink basic button"
                    variant="outlined"
                  >
                    PUBLIC
                  </SemanticButton>
                )}
                <SemanticButton
                  className={validated ? styles['save-btn'] : styles.disabled}
                  type="submit"
                  disabled={!validated}
                  title={
                    validated
                      ? null
                      : 'Please include a title, rating, and content'
                  }
                >
                  Save
                </SemanticButton>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NoteEditor;
