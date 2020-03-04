import React, { useState, useCallback, useContext } from 'react';
import { Button, Modal, Header } from 'semantic-ui-react';
import { modalStyle, buttonStyle } from './CreateColumn.module.scss';

import CreateLabelForm from '../CreateLabel/index';
import LabelList from '../LabelList/index';
import { useMutation } from 'urql';
import { CREATE_LABEL as createLabel } from '../../Project/Queries/index';

import { LabelContext } from '../../../contexts/LabelContext';

const CreateColumn = () => {
  const { label, setLabel } = useContext(LabelContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const [, executeCreate] = useMutation(createLabel);

  const toggle = () => {
    handleClose();
    setLabel({ id: '', color: '', name: '' });
  };

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      executeCreate(label);
      toggle();
    },
    [executeCreate, label, toggle]
  );

  return (
    <div>
      <Modal
        open={open}
        onClose={toggle}
        trigger={<Button onClick={handleOpen}>Create Column</Button>}
        className={modalStyle}
      >
        <Modal.Header>Create Column</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <form>
              <label> Column Name: </label>
              <input placeholder="Status" />
            </form>
            <Header>Create a Label</Header>
            <CreateLabelForm toggle={toggle} handleSubmit={handleSubmit} />
            <LabelList />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions className={buttonStyle}>
          <Button className="ui cancel button" onClick={toggle}>
            Cancel
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default CreateColumn;
