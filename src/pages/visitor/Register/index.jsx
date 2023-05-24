import React from "react";
import VisitorAppBar from "../../SharedLocalComponents/VisitorAppBar";
import {
  Container,
  Typography,
  Box,
  Link,
  CssBaseline,
  Button,
  makeStyles,
} from "@material-ui/core";
// import { base } from 'config/api';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="#">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp(props) {
  const classes = useStyles();

  return (
    <>
      <VisitorAppBar buttonName="Log in" buttonHref="/login" {...props} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          paddingTop: "1px",
          minHeight: "100%",
        }}
      >
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Button
              disabled
              variant="contained"
              color="primary"
              style={{ marginTop: 10 }}
              onClick={() => {
                props.history.push(`/register/rider`);
              }}
            >
              I am a RIDER
            </Button>
            <Typography variant="body2" color="textSecondary" align="center">
              (this version of the beta is not for riders. Contact the manager
              of your favorite event to help us develop)
            </Typography>
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
