import React, { useState } from 'react';
import { Grid, Button, Modal, Input, List } from 'semantic-ui-react';
import {
  searchResult,
  repoAlignment,
  buttonAlign,
  button,
} from './Repos.module.scss';
import repos from './repoData';

const ReposList = () => {
  const [state, setState] = useState({ open: false });
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState('');
  const [repoSelected, setRepoSelect] = useState([]);

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

  const deleteRepo = e => {
    e.stopPropagation();
    const removeRepo = repoSelected.filter(
      selected => selected.name !== e.target.value
    );
    setRepoSelect(removeRepo);
  };

  const { open, dimmer } = state;

  return (
    <div>
      <Button onClick={show(true)}>Add Your GitHub Repos</Button>

      <Modal dimmer={dimmer} open={open} onClose={close}>
        <Modal.Header>Add Your GitHub Repos</Modal.Header>
        {/* add grid here to show two columns */}
        <Modal.Content>
          <Modal.Description>
            <p>Search for exisitng Repos</p>
          </Modal.Description>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <Input
                  icon="github"
                  placeholder="Search..."
                  value={query}
                  onChange={handleChange}
                />
                <Button onClick={handleSearch}>Search</Button>
                <List selection verticalAlign="middle" className={searchResult}>
                  {searchResults.map(repo => (
                    <List.Item
                      onClick={() => setRepoSelect([...repoSelected, repo])}
                    >
                      <List.Content className={buttonAlign} icon="github">
                        {repo.name}
                        <List.Icon
                          name="github"
                          size="small"
                          verticalAlign="middle"
                        />
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              </Grid.Column>
              <Grid.Column width={8}>
                <h3>Your repos selected</h3>
                <List selection verticalAlign="middle" className={searchResult}>
                  {repoSelected.map(repo => (
                    <List.Item className={repoAlignment}>
                      <List.Content className={buttonAlign}>
                        {repo.name}
                        <button
                          type="submit"
                          className={button}
                          value={repo.name}
                          // negative
                          // circular
                          onClick={deleteRepo}
                        >
                          X
                        </button>
                      </List.Content>
                    </List.Item>
                  ))}
                </List>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
