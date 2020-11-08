import React, { useState, useEffect } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert, { AlertProps } from "@material-ui/lab/Alert";
import Sidebar from "../../../components/Sidebar";
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
    value: "Beginner",
    label: "Beginner",
  },
  {
    value: "Advanced",
    label: "Advanced",
  },
  {
    value: "Police",
    label: "Police",
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
  const [selectedDate, setSelectedDate] = useState<any>(new Date());

  const [registerInfo, setRegisterInfo] = useState<any>({
    event_name: "",
    date_begin: selectedDate?.toISOString().split("T")[0],
  });

  const [open, setOpen] = useState<any>("");

  const handleClose = () => {
    setOpen("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {
      ...registerInfo,
      date_begin: selectedDate?.toISOString().split("T")[0],
    };
    base
      .post(`/createEvent`, params)
      .then((result) => {
        setOpen("success");
        props.history.push(`/manageableEvents`, { created: true });
      })
      .catch(() => setOpen("error")); // alert rider coundt be created
  };

  return (
    <>
      <Snackbar
        open={open === "success" ? true : open === "error" ? true : false}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        {open === "success" ? (
          <Alert onClose={handleClose} severity="success">
            Event created successfully
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity="error">
            The Event could not be created
          </Alert>
        )}
      </Snackbar>
      <Sidebar
        style={{ zIndex: 1000 }}
        topnav
        title="New Event"
        rightIcon="gear"
      />
      <div style={{ paddingTop: "10px", minHeight: "100%" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Create new Event
            </Typography>
            <form onSubmit={handleSubmit} className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setRegisterInfo({
                        ...registerInfo,
                        event_name: e.target.value,
                      })
                    }
                    name="event_name"
                    variant="outlined"
                    required
                    fullWidth
                    id="event_name"
                    label="Event Name"
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
                      label="Date picker dialog"
                      format="MM/dd/yyyy"
                      value={selectedDate}
                      onChange={setSelectedDate}
                      KeyboardButtonProps={{
                        "aria-label": "change date",
                      }}
                    />
                  </Grid>
                </MuiPickersUtilsProvider>
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
