import React from 'react';
import CREATE_TAG from "./index.jsx"
import { Button, TextField, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles} from "@material-ui/core"

const useStyles = makeStyles({
    root:{
        textAlign:"center",
    }
})

export default function TagModal() {
    const classes = useStyles()
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button variant="outlined" color="secondary" onClick={handleClickOpen}>
        Create Tag Here
      </Button>
      <Dialog className={classes.root}  open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle  id="form-dialog-title">Tags</DialogTitle>
        <DialogContent >
          <DialogContentText>
           <CREATE_TAG />
          </DialogContentText>
         
        </DialogContent>
        
      </Dialog>
    </div>
  );
}