/* eslint react/no-multi-comp: 0, react/prop-types: 0 */
import React, { useState, useCallback, useContext } from 'react';
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
import CreateLabelForm from './CreateLabel';
import {LabelContext} from '../../contexts/LabelContext'

const Settings = props => {
  const {label, setLabel} = useContext(LabelContext)

  const { className } = props;

  const [modal, setModal] = useState(false);

  const [, executeCreate] = useMutation(createLabel);

  const toggle = () => setModal(!modal);

  const initState = {
    name: '',
    color: '',
  };

  const [form, setForm] = useState(initState);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      executeCreate(form);
      // console.log('Handle submit', handleSubmit);
      toggle();
      setForm(initState);
    },
    [executeCreate, form, initState, toggle]
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

  // const LabelDiv = styled.div`
  //   display: flex;
  //   justify-content: space-around;
  // `;

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

  console.log('label global state', label)

  return (
    <div className={bottomLinks}>
      <Button size="sm" color="secondary" onClick={toggle}>
        Settings
      </Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Settings</ModalHeader>
        <ModalBody>
          {/* <LabelDiv> */}
          <CreateLabelForm toggle={toggle}/>
          <LabelList />
          {/* </LabelDiv> */}
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default Settings;
