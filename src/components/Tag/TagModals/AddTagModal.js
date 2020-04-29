import React from 'react';
import { Modal, Form, Input, Switch } from 'antd';

const formItemLayout = { labelCol: { span: 5 }, wrapperCol: { span: 14 } };

const AddTagModal = ({
  modalOpen,
  handleSubmit,
  handleCloseModal,
  handleChecked,
  handleChange,
  name,
  isUsed,
  ...props
}) => (
  <Modal
    name="Add new tag"
    centered
    visible={modalOpen}
    onOk={handleSubmit}
    onCancel={handleCloseModal}
  >
    <Form layout="horizontal">
      <Form.Item label="Name" {...formItemLayout}>
        <Input
          value={name}
          onChange={handleChange}
          placeholder="tag name"
          name="name"
        />
      </Form.Item>
      <Form.Item label="IsUsed" {...formItemLayout}>
        <Switch checked={isUsed} onChange={handleChecked} />
      </Form.Item>
    </Form>
  </Modal>
);

const WrappedForm = Form.create({ name: 'add-new-tag' })(AddTagModal);

export default WrappedForm;
