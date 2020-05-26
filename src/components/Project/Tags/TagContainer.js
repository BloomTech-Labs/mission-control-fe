import React, { useContext } from 'react';
import { useQuery } from 'urql';
import { PROJECT_LIST_VIEW as query } from './Queries/tagQueries';
import TagListContainer from './TagListContainer';
import TagListRow from './TagListRow';

import { FILTERED_DATA as newQuery } from '../FilterBar/FilterBarQueries';
import { TagSearchContext } from '../../contexts/FilterBarContext';

// TagListView is the default view when a user signs into the application
// The PROJECT_LIST_VIEW query matches against the currently authenticated user
// and returns a list of tags that they are authorized to view.

const TagListView = () => {
  const tagSearchContext = useContext(TagSearchContext);

  const [state] = useQuery({
    query: newQuery,
    variables: {
      filter: {
        name_contains: tagSearchContext.searchTerm,
      },
    },
  });

  const { data, fetching, error } = state;

  if (error) {
    return (
      <p>
        Error "PROJECT_LIST_VIEW": {error.name} {error.message}
      </p>
    );
  }

  if (fetching) {
    return <p>Loading...</p>;
  } else {
    console.log(data);
  }

  const tagList = { ...data.tags };

  console.log(tagList.name);
  console.log('data');

  // const columns =
  //   data && data.programs[0].statuses && data.programs[0].statuses; // .filter(status => status.display);

  //console.log('PROJECT_DATA: %O', data);
  return (
    <div>
      <TagListContainer>
        {/* statusColumn={columns}> */}
        {data.tags.map(tag => (
          <TagListRow
            key={tag.id}
            tag={tag}
            // statusColumn={columns}
            // statusDisplay={columns.display}
          />
        ))}
      </TagListContainer>
    </div>
  );
};

export default TagListView;
