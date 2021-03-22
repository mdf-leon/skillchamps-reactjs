import React, { useState, useEffect } from 'react';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import Snackbar from '@material-ui/core/Snackbar';

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Message(props: any) {
  const [open, setOpen] = useState<boolean>(false);

  const handleClose = (e) => {
    setOpen(false);
    let state = { ...props.history.location.state };
    delete state.message_alert;
    props.history.replace({ ...props.history.location, state });
    return props.onClose ? props.onClose(e) : null; // forma certa de subir um estado manualmente e opcionalmente
  };

  useEffect(() => {
    console.log(props.message);

    if (
      props.location.state?.message_alert?.message ||
      (props.message && props.message !== undefined)
    ) {
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.message]);

  return props.message ? (
    <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={
          props.location.state?.message_alert?.severity ||
          props.severity ||
          'success'
        }
      >
        {props.location.state?.message_alert?.message || props.message}
      </Alert>
    </Snackbar>
  ) : null;
}

// DOCUMENTATION: https://material-ui.com/components/alert/
