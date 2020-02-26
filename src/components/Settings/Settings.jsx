/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState, useCallback, useContext } from 'react';
import { bottomLinks } from './Settings.module.scss';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useMutation } from 'urql';
import { CREATE_LABEL as createLabel } from '../Project/Queries';

import LabelList from './LabelList';
import CreateLabelForm from './CreateLabel';
import { LabelContext } from '../../contexts/LabelContext';

const Settings = props => {
  const { label, setLabel } = useContext(LabelContext);

  const { className } = props;

  const [modal, setModal] = useState(false);

  const [, executeCreate] = useMutation(createLabel);

  const toggle = () => setModal(!modal);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      executeCreate(label);
      toggle();
      setLabel({ id: '', name: '', color: '' });
    },
    [executeCreate, label, setLabel]
  );

  // console.log('label global state', label);

  return (
    <div className={bottomLinks}>
      <Button size="sm" color="secondary" onClick={toggle}>
        Settings
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Settings</ModalHeader>
        <ModalBody>
          {/* <LabelDiv> */}
          <CreateLabelForm toggle={toggle} />
          <LabelList />
          {/* </LabelDiv> */}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={handleSubmit}>
            Save
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Settings;
