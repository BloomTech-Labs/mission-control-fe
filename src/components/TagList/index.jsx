//LAB23-T1
import React from 'react';
import { useQuery } from 'urql';
import { TAG_LIST_VIEW as query } from './Queries/tagQueries';
import TagListContainer from './TagListContainer';
import TagListRow from './TagListRow';
import Settings from '../Settings/Settings'
import { Link } from 'react-router-dom';

import AddTagBtn from '../Tag/AddTagBtn';


// TagListView is the default view when a user signs into the application
// The TAG_LIST_VIEW query matches against the currently authenticated user
// and returns a list of tags that they are authorized to view.

const TagListView = () => {
  const [state] = useQuery({ query });
  const { data, fetching, error } = state;

  
  if (error) {
    return (
      <p>
        Error "TAG_LIST_VIEW": {error.name} {error.message}
      </p>
    );
  }

  if (fetching) {
    return <p>Loading...</p>;
  }

console.log(`TAG_DATA:%0`, data)
  return (
    <div>
<AddTagBtn/>
      <TagListContainer>
        {/* statusColumn={columns}> */}
     
        {data.tags.map(tag => (  
          <TagListRow
            key={tag.id}
            tag={tag}
          />
       
          
        )) 
        }
   
      </TagListContainer>
    </div>
  );
};

export default TagListView;
