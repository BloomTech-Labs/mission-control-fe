import React, { useState } from 'react';
import { useQuery } from 'urql';
import { Grid, Button, Modal, Input, List } from 'semantic-ui-react';
import {
  searchResult,
  repoAlignment,
  buttonAlign,
  button,
} from './Repos.module.scss';
// import repos from './repoData';
import { GET_GITHUB_REPOS as query } from '../Queries';

const initialQuery = '*///*oops'

const ReposList = () => {
  const [state, setState] = useState({ open: false });
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [repoSelected, setRepoSelect] = useState([]);
  const [results, executeQuery] = useQuery({
    query,
    variables: { search: searchQuery },
    // pause: true,
  });
  console.log(1, { results });
  const handleSearch = e => {
    e.stopPropagation();
    executeQuery();
    console.log(2, { results });
    setSearchResults(results.data.GithubRepos);
  };

  const handleChange = e => {
    setSearchQuery(e);
  };

  const show = () => () => {
    setState({
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

  const { data, fetching, error } = results;
  const { open } = state;

  return (
    <div>
      <Button onClick={show(true)}>Add Your GitHub Repos</Button>

      <Modal open={open} onClose={close}>
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
                  value={searchQuery}
                  onChange={e => handleChange(e.target.value)}
                />
                <Button onClick={handleSearch}>Search</Button>
                <List selection verticalAlign="middle" className={searchResult}>
                  {!fetching ? (
                    searchResults.map(repo => (
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
                    ))
                  ) : (
                    <h3>Searching...</h3>
                  )}
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
