/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState } from 'react';
import styled from 'styled-components';
import { bottomLinks } from './Settings.module.scss';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  UncontrolledPopover,
  PopoverBody,
} from 'reactstrap';
import { useMutation } from 'urql';
import { CirclePicker } from 'react-color';
import { CREATE_LABEL as createLabel } from '../Project/Queries';

import LabelList from './LabelList';

const Settings = props => {
  const { className } = props;

  const [modal, setModal] = useState(false);

  const [, executeCreate] = useMutation(createLabel);

  const toggle = () => setModal(!modal);

  const initState = {
    name: '',
    color: '',
  };

  const [form, setForm] = useState(initState);

  const handleSubmit = React.useCallback(
    e => {
      e.preventDefault();
      executeCreate(form);
      // console.log('Handle submit', handleSubmit);
      toggle();
      setForm(initState);
    },
    [executeCreate, form]
  );

  const LabelPreviewColor = styled.div`
    color: white;
    text-align: center;
    padding-top: 2px;
    margin-bottom: 10px;
    width: 60px;
    height: 20px;
    border-radius: 25px;
    font-size: 0.8rem;
    background: ${form.color};
  `;

  const LabelDiv = styled.div`
    display: flex;
    justify-content: space-around;
  `;

  // console.log('form', form);

  const handleChanges = e => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleColorChanges = color => {
    setForm({
      ...form,
      color: color.hex,
    });
  };

  return (
    <div className={bottomLinks}>
      <Button size="sm" color="secondary" onClick={toggle}>
        Settings
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Settings</ModalHeader>
        <ModalBody>
          <LabelDiv>
            <form>
              <div>
                <h4>Create New Label</h4>
                <div>
                  <label>
                    Label Name:
                    <input
                      name="name"
                      id="name"
                      placeholder="label name"
                      onChange={handleChanges}
                      value={form.name}
                    />
                  </label>
                  <br />
                  {form.name && form.color ? (
                    <LabelPreviewColor>{form.name}</LabelPreviewColor>
                  ) : (
                    ''
                  )}
                  <label>
                    <div>
                      <Button id="PopoverLegacy" type="button">
                        Choose Color
                      </Button>
                      <UncontrolledPopover
                        trigger="legacy"
                        placement="bottom"
                        target="PopoverLegacy"
                      >
                        <PopoverBody>
                          <CirclePicker
                            color={form.color}
                            colors={[
                              '#75a9b6',
                              '#575a7b',
                              '#27213d',
                              '#2c6049',
                              '#d19c18',
                              '#d42c08',
                            ]}
                            onChange={handleColorChanges}
                            width="130px"
                          />
                        </PopoverBody>
                      </UncontrolledPopover>
                    </div>
                  </label>
                </div>
              </div>
            </form>
            <LabelList />
          </LabelDiv>
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
