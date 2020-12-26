import React from 'react';
import VisitorTopBar from 'components/VisitorTopBar';
import {
  Container,
  Typography,
  Box,
  Link,
  CssBaseline,
  Button,
  makeStyles,
} from '@material-ui/core';
// import { base } from 'config/api';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="#">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props: any) {
  const classes = useStyles();

  return (
    <>
      <VisitorTopBar isTopBarButtonActive="register" {...props} />
      <div style={{ paddingTop: '1px', minHeight: '100%' }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: 10 }}
              onClick={() => {
                props.history.push(`/register/rider`);
              }}
            >
              I am a RIDER
            </Button>
            <Button
              variant="contained"
              color="secondary"
              style={{ marginTop: 10 }}
              onClick={() => {
                props.history.push(`/register/institute`);
              }}
            >
              I am an INSTITUTE
            </Button>
          </div>
          <Box mt={5}>
            <Copyright />
          </Box>
        </Container>
      </div>
    </>
  );
}
