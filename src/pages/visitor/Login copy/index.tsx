import React, { useState } from "react";
import VisitorTopBar from "components/VisitorTopBar";
// import { Button } from 'components';
// import { Redirect } from 'react-router-dom'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import {
  TextField,
  CssBaseline,
  makeStyles,
  Button,
  Container,
} from "@material-ui/core";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Center, Card, Row } from "./styles";
import { Typography } from "@material-ui/core";
import { base } from "../../../config/api";

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

export default function Login(props: any) {
  const classes = useStyles();
  const [fData, setFData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); 

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    base
      .post("/authenticate", fData)
      .then((r) => {
        console.log(r);
        localStorage.setItem("token", r.data.token);
        // setCookie("jwt", r.data.token);
        window.location.reload();
      })
      .catch((e) => {
        setLoading(false);
        console.log(e.response);
      });
  };

  // return = view (parte visual)
  return (
    // <Redirect to="/dashboard" />
    <>
      <VisitorTopBar isTopBarButtonActive="login" {...props} />
      <div style={{ paddingTop: "1px", minHeight: "100%" }}>
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
                  style={{ textAlign: "center", marginTop: "22px" }}
                >
                  Login
                </Typography>
              </div>
              <div style={{ textAlign: "center", margin: "5px 0 20px 0" }}>
                <Typography
                  component="h6"
                  variant="h6"
                  style={{ textAlign: "center", marginTop: "22px" }}
                >
                  Dont have an account? <a href="/register">Register</a>
                </Typography>
              </div>
              {/* className="login-form" */}
              <form onSubmit={handleSubmit} className={classes.form}>
                <div style={{ marginBottom: "10px" }}>
                  <TextField
                    style={{ width: "100%" }}
                    label="E-mail"
                    onChange={(e) =>
                      setFData({ ...fData, email: e.target.value })
                    }
                    // placeholder="Email"
                    variant="outlined"
                  />
                </div>
                <div style={{ marginBottom: "15px" }}>
                  <TextField
                    style={{ width: "100%" }}
                    label="Password"
                    onChange={(e) =>
                      setFData({ ...fData, password: e.target.value })
                    }
                    type="password"
                    variant="outlined"
                    // placeholder="Password"
                  />
                </div>
                {/* <Row style={{ marginBottom: '15px' }}>
            <p>
              <Checkbox />I agree to the <a href="/">terms of service</a>
            </p>
            <span className="mx-2" />
          </Row> */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                  }}
                >
                  <Typography
                    component={"span"}
                    style={{ margin: 0 }}
                    gutterBottom
                    variant="h6"
                    color="textSecondary"
                  >
                    <a href="/"> Forgot password </a>
                  </Typography>
                  <div style={{ width: "60px" }} />
                  <Button variant="contained" color="primary" type="submit">
                    Log in
                  </Button>
                </div>
              </form>
            </Center>
          </div>
        </Container>
      </div>
    </>
  );
}
