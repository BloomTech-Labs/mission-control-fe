import React from 'react';
import { labelDesign, modalStyle } from './Settings.module.scss';
import { Modal, Header } from 'semantic-ui-react';
import { FaRegEdit } from 'react-icons/fa';
import UpdateLabel from './UpdateLabel';
const StatusLabel = props => {
  return (
    <div className={labelDesign} style={{ background: `${props.label.color}` }}>
      {props.label.name}
      <Modal trigger={<FaRegEdit />}>
        <Modal.Header>Edit Label</Modal.Header>
        <Modal.Content>
          <Modal.Description className={modalStyle}>
            <Header>Update Label</Header>
            <UpdateLabel {...props} label={props.label} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    </div>
  );
};

export default StatusLabel;
