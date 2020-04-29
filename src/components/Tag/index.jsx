//Lab23-T1
import React, { useEffect, useState } from 'react';
import { useQuery } from 'urql';
import Header from '../Tag/Header';

import {
  parentTagContainer,
  tagPageContents


} from '../Tag/Tag.module.scss';

import {
  TAG_VIEW_QUERY as tagViewQuery,

} from '../Tag/Queries';

const Tag = props => {
  const { id } = props.match.params;

  //LAB23-T1  executeQuery will be used to query other obj arrays
  const [state, executeQuery] = useQuery({
    query: tagViewQuery,
    variables: { id },
  });
  const { data, fetching, error } = state;


  if (fetching) {
    return <p>Please Wait... Loading...</p>;
  }

  if (!data || !data.tag) {
    return (
      <h2>
        <span role="img">Tag Not Found 🤷‍♂️</span>
      </h2>
    );
  }

  console.log('TAG_VIEW_QUERY DATA: %O', data);
  return (
    <div className={parentTagContainer}>
      <div className={tagPageContents}>
        <div>
          <Header tagId={id} />
        </div>

      </div>
    </div>
  );
};

export default Tag
