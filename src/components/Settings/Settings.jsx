/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import { bottomLinks, modalStyle, buttonStyle } from './Settings.module.scss';
import { Button, Header, Modal } from 'semantic-ui-react';

import ColumnSettings from './ColumnSettings/index';

const Settings = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);

  const handleClose = () => setOpen(false);

  const toggle = () => {
    handleClose();
  };

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
            <Header>Edit Column View</Header>
            <ColumnSettings />
          </Modal.Description>
        </Modal.Content>
        <Modal.Actions className={buttonStyle}>
          <Button className="ui approve button" onClick={toggle}>
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
