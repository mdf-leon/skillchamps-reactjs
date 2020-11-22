import React, { useState, useEffect } from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Message(props: any) {
  const [open, setOpen] = useState<boolean>(true);

  const handleClose = () => {
    setOpen(false);
    let state = { ...props.history.location.state };
    delete state.created;
    props.history.replace({ ...props.history.location, state });
  };
  
  return (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity="success">
        Trial successfully created
      </Alert>
    </Snackbar>
  );
}
