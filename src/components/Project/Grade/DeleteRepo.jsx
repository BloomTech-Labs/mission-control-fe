import React, { useState } from 'react'
import { Grid, Button, Modal, Input, List } from 'semantic-ui-react';
import { deleteCont } from './Grade.module.scss';
import { useMutation } from 'urql';
import { DELETE_GHREPO as query } from '../Queries';
  

function DeleteRepo({ id }) {
    const [open, setOpen] = useState(false);

    const [, deleteRepo] = useMutation(query);

    const show = () => () => {
        setOpen(!open);
      };

    const handleDeleteRepos = () => {
        console.log(id)
        deleteRepo(id)
        setOpen(!open)
    }

    return (
        <React.Fragment>
            <div className={ deleteCont } onClick={show()}>
                X
            </div>
            <Modal open={open} onClose={show()}>
            <Modal.Content>
                <Modal.Description>
                    <p>Are you sure you want to delete this repo?</p>
                </Modal.Description>
            </Modal.Content>
            <Modal.Actions>
            <Button color="black" onClick={show()}>
                Cancel
            </Button>
            <Button
                positive
                icon="checkmark"
                labelPosition="right"
                content="Confirm"
                onClick={() => handleDeleteRepos()}
            />
            </Modal.Actions>
        </Modal>
      </React.Fragment>
    )
}

export default DeleteRepo
