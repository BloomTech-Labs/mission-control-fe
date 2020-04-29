import React from 'react';
import { Card, Modal } from 'antd';

const ViewTagModal = ({ modalOpen, tag, handleCloseModal }) => (
  <Modal
    name={tag.name}
    centered
    visible={modalOpen}
    onOk={handleCloseModal}
    onCancel={handleCloseModal}
  >
 
  </Modal>
);

export default ViewTagModal;
