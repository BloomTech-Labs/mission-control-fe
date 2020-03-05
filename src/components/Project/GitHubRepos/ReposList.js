import React, { useState } from 'react';
import { Button, Modal, Input, List } from 'semantic-ui-react';
// import {} from './Repos.module.scss';

const ReposList = () => {
  const [state, setState] = useState({ open: false });

  const show = dimmer => () => {
    setState({
      dimmer,
      open: true,
    });
  };

  const close = () => {
    setState({
      open: false,
    });
  };

  const repos = [
    { name: 'mission-control-be' },
    { name: 'mission-control-fe' },
  ];

  const { open, dimmer } = state;

  return (
    <div>
      <Button onClick={show(true)}>Add Your GitHub Repos</Button>

      <Modal dimmer={dimmer} open={open} onClose={close}>
        <Modal.Header>Add Your GitHub Repos</Modal.Header>
        <Modal.Content input>
          <Modal.Description>
            <p>Search for exisitng Repos</p>
          </Modal.Description>
          <div>
            <Input icon="user" placeholder="Search..." />
            <Button>Search</Button>
          </div>
          <List selection verticalAlign="middle">
            {repos.map(repo => (
              <List.Item>
                <List.Content>{repo.name}</List.Content>
              </List.Item>
            ))}
          </List>
        </Modal.Content>
        <Modal.Actions>
          <Button color="black" onClick={close}>
            Cancel
          </Button>
          <Button
            disabled
            positive
            icon="checkmark"
            labelPosition="right"
            content="Save Repos"
            onClick={close}
          />
        </Modal.Actions>
      </Modal>
    </div>
  );
};

export default ReposList;

/*
import React, { Component } from "react";
import { Button, Header, Image, Modal, Input, List } from "semantic-ui-react";

class ModalExampleDimmer extends Component {
  state = { open: false };

  show = dimmer => () => this.setState({ dimmer, open: true });
  close = () => this.setState({ open: false });

  repos = [{ name: "mission-control-be" }, { name: "mission-control-fe" }];

  render() {
    const { open, dimmer } = this.state;

    return (
      <div>
        <Button onClick={this.show(true)}>Add Your GitHub Repos</Button>

        <Modal dimmer={dimmer} open={open} onClose={this.close}>
          <Modal.Header>Add Your GitHub Repos</Modal.Header>
          <Modal.Content input>
            <Modal.Description>
              <p>Search for exisitng Repos</p>
            </Modal.Description>
            <div>
              <Input icon="user" placeholder="Search..." />
              <Button>Search</Button>
            </div>
            <List selection verticalAlign="middle">
              {this.repos.map(repo => (
                <List.Item>
                  <List.Content>{repo.name}</List.Content>
                </List.Item>
              ))}
            </List>
          </Modal.Content>
          <Modal.Actions>
            <Button color="black" onClick={this.close}>
              Cancel
            </Button>
            <Button
              disabled
              positive
              icon="checkmark"
              labelPosition="right"
              content="Save Repos"
              onClick={this.close}
            />
          </Modal.Actions>
        </Modal>
      </div>
    );
  }
}

export default ModalExampleDimmer;
*/
