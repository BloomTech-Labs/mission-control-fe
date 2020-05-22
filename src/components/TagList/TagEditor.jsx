import React, { useState } from 'react';
import { useQuery, useMutation, Query } from 'urql';
import { GET_ALL_TAGS as getTagsQuery } from '../TagList/Queries/tagQueries';
import { TAG_LIST_VIEW as getTagsList } from '../TagList/Queries/tagQueries';
import { UPDATE_TAG as editTagQuery } from '../Project/Queries/TagQueries';
import gql from 'graphql-tag';

const GET_TAG = gql`
  query getTag($name: String!) {
    tag(where: { name: $name }) {
      id
    }
  }
`;

const UPDATE_TAG = gql`
  mutation updateThisTag($tag: TagWhereUniqueInput!, $data: TagUpdateInput!) {
    updateTag(where: $tag, data: $data) {
      id
      name
    }
  }
`;

const TagEditor = props => {
  // TODO Tags Edit State
  const [edit, setEdit] = useState({
    active: false,
    id: '',
    currentName: '',
    newName: '',
  });

  const [loading, error, data, reexecuteQuery] = useQuery({
    query: getTagsQuery,
  });
  const [updateTag] = useMutation(editTagQuery);

  console.log({ getTagsList });

  const [tagToEdit, setTagToEdit] = useState(props);
  const [editing, setEditing] = useState(false);
  const [tagName, setTagName] = useState(tagToEdit.tag.name);
  const [tagID] = useState(tagToEdit.tag.id);

  console.log('data');

  console.log(tagName);

  // TODO OnChange Edit
  const onChangeEditTag = e => {
    e.persist();
    setEdit({ ...edit, [e.target.name]: e.target.value });

    console.log([e.target.name]);
    console.log([e.target.value]);
    console.log([e.target.id]);
  };

  const handleEditing = el => {
    setEdit({ ...edit, active: true, id: el.id, currentName: el.name });
  };

  // TODO Tag update submit submitUpdatedTag
  const submitEditTag = e => {
    e.preventDefault();
    if (edit.newName !== '') {
      UPDATE_TAG({ tag: { id: edit.id }, data: { name: edit.newName } }).then(
        () => {
          setEdit({ id: '', active: false, currentName: '', newName: '' });
          reexecuteQuery({ requestPolicy: 'network-only' });
        }
      );
    }
  };



  return (
    <div>
      <form onSubmit={submitEditTag}>
        <input
          variant="outlined"
          color="secondary"
          onChange={handleEditing}
          type="text"
          name="tagName"
          id={tagID}
          placeholder={tagName}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default TagEditor;
