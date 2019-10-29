import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { connect } from 'react-redux'

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Edit = props => {

  const { open } = props 

  const { handleClose } = props

  return (
    <div>
      <Dialog open={open} modal = {true} TransitionComponent={Transition}>
        <h2>Edit Profile</h2>
            <Button autoFocus color="inherit" onClick={handleClose}>
              SAVE CHANGES
            </Button>
      </Dialog>
    </div>
  );
}

const mapStateToProps = state => {
    return {
        state
    }
}

export default connect(mapStateToProps, {})(Edit)