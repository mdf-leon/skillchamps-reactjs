import React, { useState } from "react";
import VisitorAppBar from "../../SharedLocalComponents/VisitorAppBar";
// import { Redirect } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  CssBaseline,
  makeStyles,
  Container,
} from "@material-ui/core";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Center } from "./styles";
// import { Typography } from "@material-ui/core";
import {
  Typography,
  // LandPageButton,
  // DivButtons,
} from "./stylees";
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import Message from "components/Message";
const useStyles = makeStyles((theme) => ({
  paper: {
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

export default function Login(props: any) {
  const classes = useStyles();
  const [messageParams, setMessageParams] = useState<any>({
    message: "",
    severity: "",
  });
  // return = view (parte visual)
  // http://backend.skillchamps.net/login/google
  return (
    // <Redirect to="/dashboard" />
    <>
      <Message
        {...props}
        message={messageParams.message}
        severity={messageParams.severity}
        onClose={() => setMessageParams({})}
      />
      <VisitorAppBar buttonName="Register" buttonHref="/register" {...props} />
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
            <Center>
              <div
                style={{
                  textAlign: "center",
                  fontSize: "20px",
                  // fontWeight: "500"
                }}
              >
                <Typography
                  component="h4"
                  variant="h4"
                  style={{ textAlign: "center" }}
                >
                  Login
                </Typography>
              </div>
              <div style={{ textAlign: "center", margin: "5px 0 0 0" }}>
                <GoogleLoginButton onClick={()=>window.location.href = 'https://backend.skillchamps.net/login/google'}></GoogleLoginButton>
                <FacebookLoginButton onClick={()=>window.location.href = 'https://backend.skillchamps.net/login/facebook'}></FacebookLoginButton>
              </div>
            </Center>
          </div>
        </Container>
      </div>
    </>
  );
}
