/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState, useCallback, useContext } from 'react';
import { bottomLinks, modalStyle } from './Settings.module.scss';
import { Button, Header, Modal } from 'semantic-ui-react';
import { useMutation } from 'urql';
import { CREATE_LABEL as createLabel } from '../Project/Queries';

import LabelList from './LabelList';
import CreateLabelForm from './CreateLabel';
import { LabelContext } from '../../contexts/LabelContext';

const Settings = () => {
  const { label, setLabel } = useContext(LabelContext);

  const [modal, setModal] = useState(false);

  const [, executeCreate] = useMutation(createLabel);

  const toggle = () => {
    setModal(!modal);
    setLabel({ id: '', color: '', name: '' });
  };

  const disableTer = !label.color || !label.name;

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      executeCreate(label);
      toggle();
    },
    [executeCreate, label, setLabel]
  );

  return (
    <div className={bottomLinks}>
      <Modal trigger={<Button>Settings</Button>}>
        <Modal.Header>Settings</Modal.Header>
        <Modal.Content>
          <Modal.Description className={modalStyle}>
            <Header>Create a Label</Header>
            <CreateLabelForm toggle={toggle} />
            <LabelList />
          </Modal.Description>
        </Modal.Content>
        <div>
          <Button
            className="ui positive submit button"
            disabled={disableTer}
            onClick={handleSubmit}
          >
            Save
          </Button>
          <Button className="ui red deny clear button" onClick={toggle}>
            Cancel
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default Settings;
