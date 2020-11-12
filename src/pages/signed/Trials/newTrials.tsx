import React, { useState } from "react";
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
  options: {
    display: "flex",
    padding: "16px",
    justifyContent: "space-between",
    alignItems: "center",
    background: "transparent",
    borderBottom: "1px solid #D5D5D5",
  },
  row: {
    display: "flex",
    flexDirection: "column",
  },
  action: {
    position: "unset",
  },
}));

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function NewTrials(props: any) {
  const classes = useStyles();
  const [dataPenalties, setdataPenalties] = useState<any>([]);
  const [tempPenalties, setTempPenalties] = useState<any>({
    name: "",
    description: "",
    time_penalty: "",
  });
  const [dataBonuses, setdataBonuses] = useState<any>([]);
  const [tempBonuses, setTempBonuses] = useState<any>({
    name: "",
    description: "",
    time_bonus: "",
  });
  const [registerInfo, setRegisterInfo] = useState<any>({
    name: "",
  });
  const [open, setOpen] = useState<any>(false);

  const handleAddPenalty = () => {
    const temp = [...dataPenalties];
    temp.push(tempPenalties);
    setTempPenalties({
      name: "",
      description: "",
      time_penalty: "",
    });
    setdataPenalties(temp);
  };

  const handleAddBonuses = () => {
    const temp = [...dataBonuses];
    temp.push(tempBonuses);
    setTempBonuses({
      name: "",
      description: "",
      time_bonus: "",
    });
    setdataBonuses(temp);
  };

  const handleClose = () => {
    setOpen(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const event_id = localStorage.getItem("event_id");
    const rdata = {
      ...registerInfo,
      event_id,
      penalties: [...dataPenalties],
      bonuses: [...dataBonuses],
    };
    console.log(rdata);

    base
      .post(`/createTrial`, rdata)
      .then(() => {
        props.history.push(`/Trials`, { created: true });
      })
      .catch((er) => {
        setOpen(true);
        console.log(er.response.message);
      }); // alert Trial coundt be created
  };

  return (
    <>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          The Trial could not be created
        </Alert>
      </Snackbar>
      <Sidebar
        style={{ zIndex: 1000 }}
        topnav
        title="New Trial"
        rightIcon="gear"
      />
      <div style={{ paddingTop: "10px", minHeight: "100%" }}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Typography component="h1" variant="h5">
              Create new Trial
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
                <Typography
                  style={{ textAlign: "center", width: "100%" }}
                  component="h1"
                  variant="h5"
                >
                  Penalties
                </Typography>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setTempPenalties({
                        ...tempPenalties,
                        name: e.target.value,
                      })
                    }
                    value={tempPenalties.name}
                    variant="outlined"
                    required
                    fullWidth
                    name="penaltyName"
                    label="Penalty name"
                    id="Penalty name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setTempPenalties({
                        ...tempPenalties,
                        description: e.target.value,
                      })
                    }
                    value={tempPenalties.description}
                    variant="outlined"
                    required
                    fullWidth
                    name="description"
                    label="Description"
                    id="Description"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setTempPenalties({
                        ...tempPenalties,
                        time_penalty: e.target.value,
                      })
                    }
                    value={tempPenalties.time_penalty}
                    variant="outlined"
                    required
                    fullWidth
                    name="time_penalty"
                    label="Penalty time"
                    id="Penalty time"
                  />
                </Grid>
              </Grid>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => handleAddPenalty()}
              >
                Add penalties
              </Button>
              {/* BONUSES */}
              <Grid container spacing={2}>
                <Typography
                  style={{ textAlign: "center", width: "100%" }}
                  component="h1"
                  variant="h5"
                >
                  Bonuses
                </Typography>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setTempBonuses({
                        ...tempBonuses,
                        name: e.target.value,
                      })
                    }
                    value={tempBonuses.name}
                    variant="outlined"
                    required
                    fullWidth
                    name="bonusesName"
                    label="Bonuses name"
                    id="bonuses name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setTempBonuses({
                        ...tempBonuses,
                        description: e.target.value,
                      })
                    }
                    value={tempBonuses.description}
                    variant="outlined"
                    required
                    fullWidth
                    name="bonuses_description"
                    label="Description"
                    id="bonuses_escription"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    onChange={(e) =>
                      setTempBonuses({
                        ...tempBonuses,
                        time_bonus: e.target.value,
                      })
                    }
                    value={tempBonuses.time_bonus}
                    variant="outlined"
                    required
                    fullWidth
                    name="time_bonus"
                    label="Bonuses time"
                    id="time_bonus"
                  />
                </Grid>
              </Grid>
              <Button
                type="button"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={() => handleAddBonuses()}
              >
                Add Bonuses
              </Button>
              {/* RENDERS */}
              {dataPenalties[0] ? (
                <Typography
                  style={{ textAlign: "center", width: "100%" }}
                  component="h1"
                  variant="h5"
                >
                  Penalties
                </Typography>
              ) : null}
              {dataPenalties.map((content, i) => (
                <div
                  key={`TrialList${content.name}`}
                  className={classes.options}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      component={"span"}
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="h6"
                      color="textSecondary"
                    >
                      {content.name}
                    </Typography>
                    <Typography
                      component={"span"}
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="h6"
                    >
                      {content.description}
                    </Typography>
                    <Typography
                      component={"span"}
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="body2"
                      color="textSecondary"
                    >
                      {content.time_penalty}
                    </Typography>
                  </div>
                  <Button
                    onClick={() => {
                      const temp = [...dataPenalties];
                      // delete dataPenalties[i];
                      temp.splice(i, 1);
                      setdataPenalties(temp);
                    }}
                    className={classes.action}
                    disableRipple
                    size="small"
                    color="secondary"
                  >
                    Delete
                  </Button>
                </div>
              ))}

              {dataBonuses[0] ? (
                <Typography
                  style={{
                    textAlign: "center",
                    width: "100%",
                    marginTop: "16px",
                  }}
                  component="h1"
                  variant="h5"
                >
                  Bonuses
                </Typography>
              ) : null}
              {dataBonuses.map((content, i) => (
                <div
                  key={`TrialList${content.name}`}
                  className={classes.options}
                >
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <Typography
                      component={"span"}
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="h6"
                      color="textSecondary"
                    >
                      {content.name}
                    </Typography>
                    <Typography
                      component={"span"}
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="h6"
                    >
                      {content.description}
                    </Typography>
                    <Typography
                      component={"span"}
                      style={{ margin: 0 }}
                      gutterBottom
                      variant="body2"
                      color="textSecondary"
                    >
                      {content.time_bonus}
                    </Typography>
                  </div>
                  <Button
                    onClick={() => {
                      const temp = [...dataBonuses];
                      // delete dataBonuses[i];
                      temp.splice(i, 1);
                      setdataBonuses(temp);
                    }}
                    className={classes.action}
                    disableRipple
                    size="small"
                    color="secondary"
                  >
                    Delete
                  </Button>
                </div>
              ))}
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
