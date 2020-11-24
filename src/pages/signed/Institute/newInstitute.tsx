import React, { useState, useEffect } from "react";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Message from "components/Message";
import AppBar from "../../../components/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "date-fns";
import { base } from "config/api";

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
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  date: {
    width: "100%",
    margin: "8px 9px",
  },
  category: {
    width: "100%",
  },
}));

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function NewRider(props) {
  const classes = useStyles();
  const [messageParams, setMessageParams] = useState<any>({
    message: "",
    severity: "",
  });
  const [registerInfo, setRegisterInfo] = useState<any>({
    name: "",
    category: "",
    date_of_birth: "",
    fed_tax_ido: "",
    subd_tax_ido: "",
    city_tax_ido: "",
  });

  const [hasInstitute, setHasInstitute] = useState<any>(false);

  useEffect(() => {
    base
      .get(`/showInstitute`)
      .then(() => {
        setHasInstitute(true);
      })
      .catch((er) => console.log(er));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    base
      .post(`/makeInstitute`, registerInfo)
      .then(() => {
        props.history.push(`/manageableEvents`, {
          message_alert: {
            message: "Institute successfully created.",
            severity: "success",
          },
        });
      })
      .catch((er) => {
        console.log(er);
        setMessageParams({
          message: "Sorry, the Institute could not be created",
          severity: "error",
        });
      }); // alert rider coundt be created
  };

  return (
    <div>
      <AppBar title="Create a New Institute" {...props} />
      {hasInstitute ? (
        <div style={{ paddingTop: "100px", textAlign: "center" }}>
          <Typography component="h1" variant="h5">
            You already have an institute
          </Typography>
        </div>
      ) : (
        <div>
          <Message
            message={messageParams.message}
            severity={messageParams.severity}
            {...props}
          />
          <div style={{ paddingTop: "10px", minHeight: "100%" }}>
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Typography component="h1" variant="h5">
                  Create new Institute
                </Typography>
                <form
                  onSubmit={handleSubmit}
                  className={classes.form}
                  noValidate
                >
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <TextField
                        onChange={(e) =>
                          setRegisterInfo({
                            ...registerInfo,
                            name: e.target.value,
                          })
                        }
                        autoComplete="name"
                        name="Name"
                        variant="outlined"
                        required
                        fullWidth
                        id="Name"
                        label="Name"
                        autoFocus
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        onChange={(e) =>
                          setRegisterInfo({
                            ...registerInfo,
                            fed_tax_ido: e.target.value,
                          })
                        }
                        variant="outlined"
                        required
                        fullWidth
                        name="fed_tax_ido"
                        label="Fed tax Ido"
                        type="Fed tax Ido"
                        id="Fed tax Ido"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        onChange={(e) =>
                          setRegisterInfo({
                            ...registerInfo,
                            subd_tax_ido: e.target.value,
                          })
                        }
                        variant="outlined"
                        required
                        fullWidth
                        name="subd_tax_ido"
                        label="Subd tax Ido"
                        type="Subd tax Ido"
                        id="Subd tax Ido"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        onChange={(e) =>
                          setRegisterInfo({
                            ...registerInfo,
                            city_tax_ido: e.target.value,
                          })
                        }
                        variant="outlined"
                        required
                        fullWidth
                        name="city_tax_ido"
                        label="City tax Ido"
                        type="City tax Ido"
                        id="City tax Ido"
                      />
                    </Grid>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Create
                  </Button>
                </form>
              </div>
            </Container>
          </div>
        </div>
      )}
    </div>
  );
}
