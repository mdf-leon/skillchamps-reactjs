import React, { useState, useEffect } from "react";
import Message from "components/Message";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import AppBar from "components/AppBar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "date-fns";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import MenuItem from "@material-ui/core/MenuItem";
import { base } from "config/api";

const currencies = [
  {
    value: "Beginners",
    label: "Beginners",
  },
  {
    value: "Advanced",
    label: "Advanced",
  },
  {
    value: "Expert",
    label: "Expert",
  },
];

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

export default function NewRider(props: any) {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState<any>();
  const [messageParams, setMessageParams] = useState<any>({
    message: "",
    severity: "",
  });
  const [registerInfo, setRegisterInfo] = useState<any>({
    name: "",
    category: "",
    date_of_birth: "",
    motorcycle: "",
    motorcycle_plate: "",
    license_ido: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let parameters = { event_id: localStorage.getItem("event_id") };
    const rdata = {
      ...registerInfo,
      date_of_birth: selectedDate?.toISOString().split("T")[0],
    };
    base
      .post(`/uncontrolledRegister`, { parameters, rdata })
      .then(() => {
        props.history.push(`/riders`, {
          // riderName:
          message_alert: {
            message: `Rider created successfully`,
            severity: "success",
          },
        });
      })
      .catch(() =>
        setMessageParams({
          message: "Sorry, the Rider could not be created",
          severity: "error",
        })
      ); // alert rider coundt be created
  };

  return (
    <>
      <Message
        message={messageParams.message}
        severity={messageParams.severity}
        {...props}
      />
      <AppBar title="Create a new Rider" {...props} />
      <div style={{ paddingTop: "10px", minHeight: "100%" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Create new Rider
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setRegisterInfo({ ...registerInfo, name: e.target.value })
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
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Grid container justify="space-around">
                    <KeyboardDatePicker
                      className={classes.date}
                      inputVariant="outlined"
                      margin="normal"
                      id="date-picker-dialog"
                      label="Birth date"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={setSelectedDate}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
                <Grid item xs={12}>
                  <TextField
                    className={classes.category}
                    id="outlined-select-currency"
                    select
                    label="Select"
                    value={registerInfo.category}
                    onChange={(event) =>
                      setRegisterInfo({
                        ...registerInfo,
                        category: event.target.value,
                      })
                    }
                    variant="outlined"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setRegisterInfo({
                        ...registerInfo,
                        motorcycle: e.target.value,
                      })
                    }
                    variant="outlined"
                    required
                    fullWidth
                    name="motorcycle"
                    label="Motorcycle"
                    type="Motorcycle"
                    id="Motorcycle"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setRegisterInfo({
                        ...registerInfo,
                        motorcycle_plate: e.target.value,
                      })
                    }
                    variant="outlined"
                    required
                    fullWidth
                    name="motorcycle_plate"
                    label="Motorcycle plate"
                    type="Motorcycle plate"
                    id="Motorcycle plate"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setRegisterInfo({
                        ...registerInfo,
                        license_ido: e.target.value,
                      })
                    }
                    variant="outlined"
                    required
                    fullWidth
                    name="license_ido"
                    label="License ido"
                    type="License ido"
                    id="License ido"
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
    </>
  );
}
