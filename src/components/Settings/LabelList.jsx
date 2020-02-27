import React from 'react';
import styled from 'styled-components';
import { Button, UncontrolledPopover, PopoverBody } from 'reactstrap';
import { useQuery } from 'urql';
import { LABELS_QUERY as query } from '../ProjectList/Queries/projectQueries';

const LabelPreviewColor = styled.div`
  color: white;
  text-align: center;
  padding-top: 2px;
  margin-bottom: 10px;
  width: 60px;
  height: 20px;
  border-radius: 25px;
  font-size: 0.8rem;
`;

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
                  <LabelPreviewColor
                    style={{ background: `${label.color}` }}
                    key={label.id}
                  >
                    {label.name}
                  </LabelPreviewColor>
                );
              })
            : ''}
        </PopoverBody>
      </UncontrolledPopover>
    </div>
  );
};

export default LabelList;
