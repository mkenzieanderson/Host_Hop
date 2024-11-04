import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Typography from '@mui/material/Typography';
import './CreateAccountButton.css';

function CreateAccountButton() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button 
          variant="contained"
          color="success"
          onClick={handleClickOpen}
      >
          Sign Up
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
      >
        <DialogTitle className="are-you-sure-title">
          Are you sure that you want to create a new account?
        </DialogTitle>
        <DialogContent>
          <Typography>
            Usernames cannot be modified once an account is created.
          </Typography>
        </DialogContent>
        <DialogActions className="buttons">
          <Button 
            variant="contained"
            onClick={handleClose} 
            color="error"
            className="cancel-button"
          >
            Cancel
          </Button>
          <Button 
            variant="contained"
            onClick={handleClose} 
            color="success"
            className="continue-button"
          >
            Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default CreateAccountButton;