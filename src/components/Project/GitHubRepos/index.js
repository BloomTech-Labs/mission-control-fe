import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from 'urql';
import { Grid, Button, Modal, Input, List } from 'semantic-ui-react';
import {
  searchResult,
  repoAlignment,
  buttonAlign,
  button,
} from './Repos.module.scss';
import {
  GET_GITHUB_REPOS as query,
  CREATE_GHREPO as createRepo,
} from '../Queries';
import Grade from '../Grade';

const initialQuery = '';

const ReposList = ({ ghrepos, productId }) => {
  const [state, setState] = useState({ open: false });
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState(initialQuery);
  const [repoSelected, setRepoSelect] = useState([]);
  const [githubRepos, setGithubRepos] = useState(
    ghrepos.map(repo => ({
      ...repo,
      grade: 'A',
      link: 'http://www.google.com',
    }))
  );
  const [results, executeQuery] = useQuery({
    query,
    variables: { search: searchQuery },
    pause: true,
    requestPolicy: 'network-only',
  });
  const [, addRepo] = useMutation(createRepo);

  useEffect(() => {
    setSearchResults(results.data ? results.data.GithubRepos : []);
  }, [results]);

  const handleChange = e => {
    setSearchQuery(e.target.value);
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
    setSearchResults([]);
    setSearchQuery(initialQuery);
    setRepoSelect([]);
  };

  const handleAddSelected = repo => {
    const existingSelected = repoSelected.map(
      existingRepo => existingRepo.name
    );
    if (!existingSelected.includes(repo.name)) {
      setRepoSelect([
        ...repoSelected,
        {
          name: repo.name,
          repoId: repo.id,
          owner: repo.owner,
          ownerId: repo.ownerId,
          id: productId,
        },
      ]);
    }
  };

  const handleAddRepos = () => {
    const ghNames = githubRepos.map(repo => (repo.name ? repo.name : ''));
    const filterRepos = repoSelected.filter(repo => {
      if (!ghNames.includes(repo.name)) {
        return repo;
      }
    });
    Promise.all(
      filterRepos.map(repo => {
        return addRepo({ ...repo }).then(result => {
          return result.data.createGithubRepo;
        });
      })
    ).then(res => {
      setGithubRepos([...githubRepos, ...res]);
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
      <Button onClick={show()}>Add Your GitHub Repos</Button>

      <Modal open={open} onClose={close}>
        <Modal.Header>Add Your GitHub Repos</Modal.Header>
        {/* add grid here to show two columns */}
        <Modal.Content>
          <Modal.Description>
            <p>Search for existing Repos</p>
          </Modal.Description>
          <Grid>
            <Grid.Row>
              <Grid.Column width={8}>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    executeQuery();
                    
                  }}
                >
                  <Input
                    icon="github"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={handleChange}
                  />
                  <Button type="submit">Search</Button>
                </form>
                <List selection verticalAlign="middle" className={searchResult}>
                  {!fetching ? (
                    searchResults.map(repo => (
                      <List.Item
                        key={repo.name}
                        onClick={() => handleAddSelected(repo)}
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
                  {repoSelected.map(repo => {
                    return (
                      <List.Item key={repo.name} className={repoAlignment}>
                        <List.Content className={buttonAlign}>
                          {repo.name}
                          <button
                            type="submit"
                            className={button}
                            value={repo.name}
                            onClick={deleteRepo}
                          >
                            X
                          </button>
                        </List.Content>
                      </List.Item>
                    );
                  })}
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
            disabled={!repoSelected.length}
            positive
            icon="checkmark"
            labelPosition="right"
            content="Save Repos"
            onClick={() => {
              close();
              handleAddRepos();
              window.location.reload();
            }}
          />
        </Modal.Actions>
      </Modal>
      <div>
        <Grade ccrepos={githubRepos} />
      </div>
    </div>
  );
};

export default ReposList;
