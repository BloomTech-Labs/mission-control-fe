import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react';
import { deleteCont } from './Grade.module.scss';
import { useMutation } from 'urql';
import { DELETE_GHREPO as query } from '../Queries';

function DeleteRepo({ id, name, executeQuery }) {
    const [open, setOpen] = useState(false);

    const [, deleteRepo] = useMutation(query);

    const show = () => () => {
        setOpen(!open);
      };

    const handleDeleteRepos = () => {
        deleteRepo({ id })
        setOpen(!open)
        executeQuery({
            requestPolicy: 'network-only',
          })
    }

    return (
        <React.Fragment>
            <div className={ deleteCont } onClick={show()}>
                X
            </div>
            <Modal size={'mini'} open={open} onClose={show()}>
            <Modal.Content>
                <Modal.Description>
                    <h4>Delete {name}?</h4>
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
