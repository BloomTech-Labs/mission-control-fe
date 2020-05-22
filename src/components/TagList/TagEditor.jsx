import React, { useState } from 'react';
import { useQuery, useMutation } from 'urql';
import { UPDATE_TAG as editTagQuery } from '../Project/Queries/TagQueries';
const TagEditor = props => {
  console.log(props.tag);

  const tagID = props.tag.id
  const tagNameProps = props.tag.name

  console.log(tagID)


  const [updateTagResults, updateTag] = useMutation(editTagQuery);

  // const [state, reexecuteQuery] = useQuery({ query: getTagsQuery });
  const [tagName, setTagName] = useState('');
  

  // TODO Tags Edit State
  const [edit, setEdit] = useState({
    active: false,
    id: '',
    currentName: '',
    newName: '',
  });

  // TODO Del Chandged from handleEditTag
  const onChangeEditTag = e => {
    e.persist();
    setEdit({ ...edit, newName: e.target.value });
  };

  // TODO Tag update submit submitUpdatedTag
  const submitUpdatedTag = e => {
    e.preventDefault();
    if (edit.newName !== '') {
      updateTag({
        tag: { id: edit.tagID },
        data: { name: edit.newName },
        
      }).then(() => {
        // Refetch the query and skip the cache
        // setEdit({ id: '', active: false, currentName: '', newName: '' });
        props.toggleEdit();
      });
    }
  };

  return (
    <div>
      <form>
      <input
        variant="outlined"
        color="secondary"
        onChange={onChangeEditTag}
        type="text"
        name="tagname"
        id="tagname"
        placeholder={tagNameProps}
        value={edit.newName}
      />

      <button type={"submit"} onClick={submitUpdatedTag}>Save</button>
      </form>
    </div>
  );
};

export default TagEditor;
