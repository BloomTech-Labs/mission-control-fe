import React, { useState } from 'react';
import { Button, Modal, Input, List } from 'semantic-ui-react';
// import {} from './Repos.module.scss';
import repos from './repoData';

const ReposList = () => {
  const [state, setState] = useState({ open: false });
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');

  const handleSearch = e => {
    e.stopPropagation();
    setSearchResults(repos.filter(repo => repo.name.includes(query)));
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

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
            <Input
              icon="user"
              placeholder="Search..."
              value={query}
              onChange={handleChange}
            />
            <Button onClick={handleSearch}>Search</Button>
          </div>
          <List selection verticalAlign="middle">
            {searchResults.map(repo => (
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
