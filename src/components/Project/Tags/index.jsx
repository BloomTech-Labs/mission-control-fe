import React, {useState} from 'react';
import { useQuery, useMutation, refetchQueries} from 'urql';

import { GET_ALL_TAGS as getTagsQuery } from '../Queries/TagQueries';
import { CREATE_TAG as createTagQuery} from '../Queries/TagQueries';

//Basic Styling
import {
    tag
  } from './tags.scss';


const Tags = ({ projectId }) => {

const [state, reexecuteQuery] = useQuery({ query: getTagsQuery });
const [tagName, setTagName] = useState('');
const [addTagResults, addTag] =  useMutation(createTagQuery);

const handleChange = e => {
    //reset timer on each key stroke
    e.persist();
    setTagName(e.target.value);
  }//end handleChange

  const handleSubmit = e => {
    //hitting enter key submits immediately
    e && e.preventDefault();
    //clear the submit timer and submit form automatically
    if (tagName !== '') {
      console.log('send new or update query to BE');
      //Using create tag mutation
      addTag({name: tagName
        }).then(() => {
          // Refetch the query and skip the cache
        reexecuteQuery({ requestPolicy: 'network-only' });
        }

        )



    }//end if
    //reset searchFilter to empty str
    setTagName('');
  
  }//end handleSubmit

  const { data, fetching, error } = state;

  if (fetching) {
    return <h1>Loading...</h1>;
  }

  if (error) {
      console.log(error)
      return <h1>There was an error getting your tags</h1>;
  }


    if (data && data.tags) {

    return (
        <>
            <input
            onChange={handleChange}
            type='text'
            name='search'
            id='search'
            placeholder='Search'
            value={tagName}
          />
            <button onClick={handleSubmit}> Create tag </button>

            <h3> Tags </h3>

            <div className='tags-container'>
            {data.tags.map(element => (
                                <div className='tag'>{element.name}</div>
            ))}
            </div>
        </>
    );
  }
};

export default Tags;
