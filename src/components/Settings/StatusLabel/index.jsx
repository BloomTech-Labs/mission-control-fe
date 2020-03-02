import React from 'react';
import { labelDesign, editModalStyle } from './StatusLabel.module.scss';
import { Modal, Header } from 'semantic-ui-react';
import { FaRegEdit } from 'react-icons/fa';
import UpdateLabel from '../UpdateLabel/index';
import DeleteLabel from '../DeleteLabel/index';
const StatusLabel = props => {
  return (
    <div className={labelDesign} style={{ background: `${props.label.color}` }}>
      {props.label.name}
      <DeleteLabel {...props} label={props.label} />
      <Modal className={editModalStyle} trigger={<FaRegEdit />}>
        <Modal.Header>Edit Label</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Update Label</Header>
            <UpdateLabel {...props} label={props.label} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default StatusLabel;
