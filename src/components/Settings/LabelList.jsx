import React from 'react';
import { Button, UncontrolledPopover, PopoverBody } from 'reactstrap';
import { useQuery } from 'urql';
import { LABELS_QUERY as query } from '../ProjectList/Queries/projectQueries';
import StatusLabel from './StatusLabel';

const LabelList = () => {
  const [state] = useQuery({ query, requestPolicy: 'cache-and-network' });

  const { data } = state;

  return (
    <div>
      <Button id="LabelsView" type="button">
        View Labels
      </Button>
      <UncontrolledPopover
        trigger="legacy"
        placement="bottom"
        target="LabelsView"
      >
        <PopoverBody>
          {data
            ? data.labels.map(label => {
                return (
                  <StatusLabel label={label} key={label.id}/>
                );
              })
            : ''}
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
};

export default LabelList;
