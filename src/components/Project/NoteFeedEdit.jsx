import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { Dropdown } from 'semantic-ui-react';
import { useMutation } from 'urql';
import extractAvatar from '../../utils/managers';

import styles from './NoteEditor.module.scss';
import { UpdateNoteMutation as updateNote } from './requests';

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

export default ({ user, note, id, setIsEditing, isEditing }) => {
  const initialState = {
    topic: note.topic,
    content: note.content,
    rating: note.rating,
    attendees: note.attendedBy,
    expandedAttendees: false,
    expandedAbsent: false,
    absentees: [],
    error: true,
    hover: true,
  };
  const [state, setState] = useState(initialState);
  const [res, executeMutation] = useMutation(updateNote);

  useEffect(() => {
    if (state.topic && state.content && state.rating > 0) {
      setState(s => ({ ...s, error: false, hover: false }));
    } else {
      setState(s => ({ ...s, error: true, hover: true }));
    }
  }, [state.topic, state.content, state.rating]);

  if (res.error) {
    alert('Incorrect data shape');
  }

  const markAbsent = e => {
    e.preventDefault();
    e.stopPropagation();
    const deleted = e.target.previousSibling.textContent;
    const newAttendees = state.attendees.filter(({ name }) => {
      return name !== deleted;
    });
    const deletedAttendee = state.attendees.filter(({ name }) => {
      return name === deleted;
    });
    const newAbsentees = [...state.absentees, ...deletedAttendee];
    setState({ ...state, attendees: newAttendees, absentees: newAbsentees });
  };

  const markAttended = e => {
    e.preventDefault();
    e.stopPropagation();
    const attended = e.target.previousSibling.textContent;
    const newAttendee = state.absentees.filter(({ name }) => {
      return name === attended;
    });
    const newAttendees = [...state.attendees, ...newAttendee];
    const newAbsentees = state.absentees.filter(({ name }) => {
      return name !== attended;
    });
    setState({ ...state, attendees: newAttendees, absentees: newAbsentees });
  };

  return (
    <div className={styles['main-container']}>
      <div className={styles['editor-container']}>
        <div className={styles['avatar-container']}>
          <img src={extractAvatar(user.email)} alt={`avatar of ${user.name}`} />
        </div>
        <form
          onSubmit={e => {
            e.preventDefault();
            const input = {
              id,
              topic: state.topic,
              content: state.content,
              rating: state.rating,
              // Extracts an array of emails from array of Person objects
              attendedBy: Array.from(state.attendees, ({ email }) => email),
            };
            executeMutation(input);
            setState(initialState);
            setIsEditing(!isEditing);
          }}
          className={styles['form-container']}
        >
          <div className={styles['form-header']}>
            <Dropdown
              placeholder="Select Topic"
              inline
              options={topicOptions}
              onChange={(_, { value }) => {
                setState({ ...state, topic: value });
              }}
              value={state.topic}
            />
            <StarRatings
              numberOfStars={3}
              name="rating"
              starRatedColors="rgb(245,73,135)"
              starHoverColor="rgb(245,73,135)"
              starEmptyColor="rgba(245,73,135,.2)"
              changeRating={rating => setState({ ...state, rating })}
              starDimension="20px"
              starSpacing=".5px"
              rating={state.rating}
            />
          </div>
          <div className={styles['body-container']}>
            <textarea
              className={styles['body-input']}
              placeholder="What's going on?"
              name="content"
              onChange={e => setState({ ...state, content: e.target.value })}
              value={state.content}
            />
          </div>
          <div className={styles['text-footer']}>
            <div className="attendance">
              <div
                className={
                  state.expandedAttendees ? styles.expanded : styles.collapsed
                }
                onClick={() =>
                  setState({
                    ...state,
                    expandedAttendees: !state.expandedAttendees,
                  })
                }
                role="presentation"
              >
                Attendees
                <div className={styles['attendees-avatars']}>
                  {state.attendees.map(({ name, email }) => {
                    // TODO: get slack avatar based on email
                    return (
                      <div className={styles['mini-avatar-container']}>
                        <img
                          src={extractAvatar(email)}
                          alt={`avatar of ${name}`}
                        />
                        <p>{name}</p>
                        <button onClick={markAbsent} type="button">
                          x
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
              {!!state.absentees.length && (
                <div
                  className={
                    state.expandedAbsent ? styles.expanded : styles.collapsed
                  }
                  onKeyDown={() =>
                    setState({
                      ...state,
                      expandedAttendees: !state.expandedAttendees,
                    })
                  }
                  onClick={() =>
                    setState({
                      ...state,
                      expandedAbsent: !state.expandedAbsent,
                    })
                  }
                  role="presentation"
                >
                  Absent
                  <div className={styles['attendees-avatars']}>
                    {state.absentees.map(({ name, email }) => {
                      return (
                        <div className={styles['mini-avatar-container']}>
                          <img
                            src={extractAvatar(email)}
                            alt={`avatar of ${name}`}
                          />
                          <p>{name}</p>
                          <button onClick={markAttended} type="button">
                            +
                          </button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
            <div className={styles['button-container']}>
              <button
                className="cancelButton"
                type="submit"
                onClick="window.location.reload();"
              >
                Cancel
              </button>
              <button
                className={
                  state.error ? styles['disabled'] : styles['save-btn']
                }
                type="submit"
                disabled={state.error}
                title={
                  state.hover
                    ? 'Please include a title, rating, and content'
                    : null
                }
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
