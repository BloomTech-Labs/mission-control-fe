import React, { useState } from 'react';
import { useQuery, useMutation } from 'urql';
import { Link } from 'react-router-dom';
import { title } from './tagListRow.module.scss';
import { GET_ALL_TAGS as getTagsQuery } from "../Queries/tagQueries";
import { CREATE_TAG as createTagQuery } from "../../Project/Queries/TagQueries";
import { UPDATE_TAG as editTagQuery } from "../../Project/Queries/TagQueries";
import { DELETE_TAG as deleteTagQuery } from "../../Project/Queries/TagQueries";

import TagEditor from '../TagEditor'

import DeleteIcon from '@material-ui/icons/Delete';
import CheckIcon from '@material-ui/icons/Check';
import LinearProgress from '@material-ui/core/LinearProgress';
import EditIcon from '@material-ui/icons/Edit';

const TagRow = ({ tag, id, name, isUsed, tagArr, executeOperation }) => {
  const TagsArr = [];

  const [state, reexecuteQuery] = useQuery({ query: getTagsQuery });
  const [deleteTagResults, deleteTag] = useMutation(deleteTagQuery);
  const [tagName, setTagName] = useState('');
  const [addTagResults, addTag] = useMutation(createTagQuery);
  const [updateTagResults, updateTag] = useMutation(editTagQuery);

  // TODO Tags Edit State
  const [edit, setEdit] = useState({
    active: false,
    id: '',
    currentName: '',
    newName: '',
  });

  const [editing, setEditing] = useState(false);

  const handleChange = e => {
    // reset timer on each key stroke
    e.persist();
    setTagName(e.target.value);
  }; // end handleChange

  // TODO DEL changed startEditing
  const handleEditing = el => {
    setEdit({ ...edit, active: true, id: el.id, currentName: el.name });
  };

  // TODO Del Chandged from handleEditTag
  const onChangeEditTag = e => {
    e.persist();
    setEdit({ ...edit, newName: e.target.value });
  };

  // TODO Tag update submit submitUpdatedTag
  let submitUpdatedTag = e => {
    e && e.preventDefault();
    if (edit.newName !== '') {
      updateTag({ tag: { id: edit.id }, data: { name: edit.newName } }).then(
        () => {
          // Refetch the query and skip the cache
          setEdit({ id: '', active: false, currentName: '', newName: '' });
          reexecuteQuery({ requestPolicy: 'network-only' });
        }
      );
    }
  };

  // TODO Handle delete tag
  const handleDelete = id => {
    deleteTag({ tag: { id } }).then(() => {
      reexecuteQuery({ requestPolicy: 'network-only' });
    });
  };

  const handleClickEdit = () => {
    
    setEditing(!editing);
    console.log(editing);
  };

  // Display status indicators if present
  if (tagArr && tagArr.length > 0) {
    for (let i = 0; i < 4 && !(i >= tagArr.length); i += 1) {
      TagsArr.push(tagArr[i]);
    }

    return (
      <tr>
        <td className={title}>
          <Link to={`/tag/${tag.id}`} className={title}>
            {tag.name}
          </Link>
        </td>
        {tagArr.length > 0 && TagsArr.length > 0
          ? TagsArr.map(tags => {
              return <td key={tags.id} tag={tags} />;
            })
          : ''}
      </tr>
    );
  }

  return (
    <tr>
      <td className={title}>
        <button onClick={handleClickEdit}>
          {!editing ? `Edit` : `Cancel`}
        </button>

        {editing ? (
          <TagEditor toggleEdit={handleClickEdit} key={tag.id} tag={tag} />
        ) : (
          <div className={title}>
            <Link className={title} onClick={() => handleDelete(tag.id)}>
              <button>Delete</button>
            </Link>
            <Link to={`/tag/${tag.id}`} className={title}>
              {tag.name}
            </Link>
          </div>
        )}
      </td>
    </tr>
  );
};

export default TagRow;