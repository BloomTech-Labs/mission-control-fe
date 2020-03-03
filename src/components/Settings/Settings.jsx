/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState, useCallback, useContext } from 'react';
import { bottomLinks, modalStyle, buttonStyle } from './Settings.module.scss';
import { Button, Header, Modal } from 'semantic-ui-react';
import { useMutation } from 'urql';
import { CREATE_LABEL as createLabel } from '../Project/Queries';

import LabelList from './LabelList/index';
import CreateLabelForm from './CreateLabel/index';
import EditColumns from './EditColumns/index';
import { LabelContext } from '../../contexts/LabelContext';

const Settings = () => {
  const { label, setLabel } = useContext(LabelContext);

  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const [, executeCreate] = useMutation(createLabel);

  const toggle = () => {
    handleClose();
    setLabel({ id: '', color: '', name: '' });
  };

  const disableTer = !label.color || !label.name;

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      executeCreate(label);
      toggle();
    },
    [executeCreate, label, toggle]
  );

  return (
    <div className={bottomLinks}>
      <Modal
        open={open}
        onClose={handleClose}
        trigger={<Button onClick={handleOpen}>Settings</Button>}
        className={modalStyle}
      >
        <Modal.Header>Settings</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Edit Columns</Header>
            <EditColumns />
            <Header>Create a Label</Header>
            <CreateLabelForm toggle={toggle} />
            <LabelList />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions className={buttonStyle}>
          <Button
            className="ui approve button"
            disabled={disableTer}
            onClick={handleSubmit}
          >
            Save
          </Button>
          <Button className="ui cancel button" onClick={toggle}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default Settings;
