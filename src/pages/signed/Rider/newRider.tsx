import React, { useEffect } from "react";
import Sidebar from "../../../components/Sidebar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
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

export default function NewRider() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = React.useState(
    new Date().toDateString()
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log(date);
  };

  const [currency, setCurrency] = React.useState("Beginner");

  const handleCategoryChange = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    base
      .post(`/uncontrolledRegister`)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <Sidebar
        style={{ zIndex: 1000 }}
        topnav
        title="New Rider"
        rightIcon="gear"
      />
      <div style={{ paddingTop: "25px", minHeight: "100%" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Create new Rider
            </Typography>
            <form className={classes.form} noValidate>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
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
                      disableToolbar
                      inputVariant="outlined"
                      variant="inline"
                      format="MM/dd/yyyy"
                      margin="normal"
                      id="date-picker-inline"
                      label="Birth Date"
                      value={selectedDate}
                      onChange={handleDateChange}
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
                    value={currency}
                    onChange={handleCategoryChange}
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
