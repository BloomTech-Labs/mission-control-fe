import React, { useContext, useEffect, useState } from 'react';
import { labelListStyle } from './LabelList.module.scss';
import StatusLabel from '../StatusLabel/index';
import {
  LABELS_SUBSCRIPTION,
  LABEL_LIST_VIEW as query,
} from '../../ProjectList/Queries/projectQueries';
import { useSubscription, useQuery } from 'urql';
import { LabelContext } from '../../../contexts/LabelContext';

const LabelList = ({ column }) => {
  const [state] = useQuery({
    query,
    requestPolicy: 'cache-and-network',
  });
  const { data } = state;
  const [id, setId] = useState(-1);

  // console.log('column label id', id);
  // console.log('column id', column.id);
  console.log('data program', data && data.programs[0].columns);
  useEffect(() => {
    setId(data && data.programs[0].columns.findIndex(c => c.id == column.id));
    console.log('this is column id', id);
  }, []);

  return (
    <div className={labelListStyle}>
      {data && id !== -1
        ? data.programs[0].columns[id].labels.map(label => {
            return <StatusLabel label={label} key={label.id} />;
          })
        : ''}
    </div>
  );

  // Testing out subscriptions with labels, to no success.
  // Originally attempted to just use labelSubscription, but wouldn't render anything
  // so I followed how they had it setup for the howtographql tutorial
  // If you want to test it out on the project_list_view stuff,
  // you will first need to s et up the sub on the backend, then go to /middleware/Urql.jsx
  // and swap LABELS_QUERY for the other one, as well as make the sub for the front end
  // const { labelArray } = useContext(LabelContext);
  // const handleLabelSubscription = response => {
  //   return [response.newLabels, ...labelArray];
  // };
  // console.log(handleLabelSubscription);

  // const [state] = useQuery({ query, requestPolicy: 'cache-and-network' });
  // useSubscription({ query: LABELS_SUBSCRIPTION }, handleLabelSubscription);
  // const { data } = state;
  // console.log('LABEL DATA', data);
  // return (
  //   <div className={labelListStyle}>
  //     {data
  //       ? data.labels.map(label => {
  //           return <StatusLabel label={label} key={label.id} />;
  //         })
  //       : ''}
  //   </div>
  // );
};

export default LabelList;
